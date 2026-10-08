import { useState, useEffect, useRef, useCallback } from 'react';
import { FRIDAY_SCENES } from './fridayScenes';

/**
 * Custom hook to control Friday storyboard state machine and playback timeline.
 * Supports IntersectionObserver trigger, hover pause, manual scrubbing,
 * step jumping, and prefers-reduced-motion accessibility.
 */
export function useFridayTimeline(containerRef, customScenes) {
  const scenes = customScenes && customScenes.length > 0 ? customScenes : FRIDAY_SCENES;
  const scenesRef = useRef(scenes);
  scenesRef.current = scenes;

  const [sceneIndex, setSceneIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sceneProgress, setSceneProgress] = useState(0); // 0 to 1 within the current scene
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const sceneIndexRef = useRef(sceneIndex);
  sceneIndexRef.current = sceneIndex;

  const isPlayingRef = useRef(isPlaying);
  isPlayingRef.current = isPlaying;

  const isHoveredRef = useRef(isHovered);
  isHoveredRef.current = isHovered;

  const isIntersectingRef = useRef(isIntersecting);
  isIntersectingRef.current = isIntersecting;

  const animFrameRef = useRef(null);
  const lastTimeRef = useRef(null);
  const elapsedInSceneRef = useRef(0);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => {
      setIsReducedMotion(mediaQuery.matches);
      if (mediaQuery.matches) {
        setIsPlaying(false);
        setSceneProgress(1); // Show final complete state
      }
    };

    updateMotion();
    mediaQuery.addEventListener?.('change', updateMotion);
    return () => mediaQuery.removeEventListener?.('change', updateMotion);
  }, []);

  // IntersectionObserver to auto-play when 40% visible
  useEffect(() => {
    const element = containerRef?.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const visible = entry.isIntersecting;
        setIsIntersecting(visible);

        if (visible && !isReducedMotion && !isHoveredRef.current) {
          setIsPlaying(true);
        } else if (!visible) {
          setIsPlaying(false);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [containerRef, isReducedMotion]);

  // Handle Playback Loop via requestAnimationFrame
  useEffect(() => {
    if (!isPlaying || isReducedMotion) {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = null;
      }
      lastTimeRef.current = null;
      return;
    }

    const step = (timestamp) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = timestamp;
      }
      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      // Only advance if not hovered and element is visible
      if (!isHoveredRef.current && isIntersectingRef.current) {
        elapsedInSceneRef.current += delta;
        const currentList = scenesRef.current;
        const currentSceneDuration = currentList[sceneIndexRef.current]?.durationMs || 5000;
        const progress = Math.min(elapsedInSceneRef.current / currentSceneDuration, 1);
        setSceneProgress(progress);

        if (elapsedInSceneRef.current >= currentSceneDuration) {
          // Transition to next scene
          const nextIndex = (sceneIndexRef.current + 1) % currentList.length;
          sceneIndexRef.current = nextIndex;
          setSceneIndex(nextIndex);
          elapsedInSceneRef.current = 0;
          setSceneProgress(0);
        }
      }

      animFrameRef.current = requestAnimationFrame(step);
    };

    animFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = null;
      }
    };
  }, [isPlaying, isReducedMotion]);

  // Controls
  const play = useCallback(() => {
    if (!isReducedMotion) {
      setIsPlaying(true);
      lastTimeRef.current = null;
    }
  }, [isReducedMotion]);

  const pause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [isPlaying, pause, play]);

  // Manual jump to a specific scene: jumps immediately and pauses autoplay
  const goTo = useCallback((targetIndex) => {
    const currentList = scenesRef.current;
    const validIndex = Math.max(0, Math.min(targetIndex, currentList.length - 1));
    sceneIndexRef.current = validIndex;
    setSceneIndex(validIndex);
    elapsedInSceneRef.current = 0;
    setSceneProgress(1); // jump to full scene render
    setIsPlaying(false);
  }, []);

  const nextScene = useCallback(() => {
    const currentList = scenesRef.current;
    const nextIdx = (sceneIndexRef.current + 1) % currentList.length;
    goTo(nextIdx);
  }, [goTo]);

  const prevScene = useCallback(() => {
    const currentList = scenesRef.current;
    const prevIdx = (sceneIndexRef.current - 1 + currentList.length) % currentList.length;
    goTo(prevIdx);
  }, [goTo]);

  // Hover handlers for stage
  const onStageMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const onStageMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return {
    sceneIndex,
    currentScene: scenes[sceneIndex] || scenes[0],
    sceneProgress,
    totalScenes: scenes.length,
    scenes,
    isPlaying,
    isReducedMotion,
    isHovered,
    play,
    pause,
    togglePlay,
    goTo,
    nextScene,
    prevScene,
    onStageMouseEnter,
    onStageMouseLeave
  };
}
