import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, FileText, Shield, ArrowLeft, Lock, GitMerge, Github, ExternalLink, Activity } from 'lucide-react';
import './TermsAndPolicy.scss';

export default function TermsAndPolicy() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [hash]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <div className="docs-page">
      {/* Left Sidebar */}
      <aside className="docs-sidebar">
        <div className="docs-sidebar__header">
          <Link to="/" className="docs-sidebar__back">
            <ArrowLeft size={16} /> Back to app
          </Link>
          <div className="docs-sidebar__logo">
            <Shield size={20} className="text-purple" />
            <span style={{ fontWeight: 700 }}>Secure & Transparent</span>
          </div>
        </div>

        <nav className="docs-nav">
          <div className="docs-nav__section">
            <h4 className="docs-nav__title">Overview</h4>
            <a href="#" className="docs-nav__link"><Github size={16} /> GitHub</a>
            <a href="#" className="docs-nav__link"><Lock size={16} /> AI Safety</a>
          </div>

          <div className="docs-nav__section">
            <h4 className="docs-nav__title">Legal</h4>
            <a href="#" className="docs-nav__link docs-nav__link--active"><FileText size={16} /> Privacy Policy</a>
            <a href="#" className="docs-nav__link"><FileText size={16} /> Terms of Service</a>
            <a href="#" className="docs-nav__link"><FileText size={16} /> Cookie Policy</a>
          </div>

          <div className="docs-nav__section">
            <h4 className="docs-nav__title">Integrations</h4>
            <a href="#" className="docs-nav__link"><GitMerge size={16} /> GitHub Services</a>
            <a href="#" className="docs-nav__link docs-nav__link--disabled"><GitMerge size={16} /> GitLab (Soon)</a>
          </div>

          <div className="docs-nav__section">
            <h4 className="docs-nav__title">Security</h4>
            <a href="#" className="docs-nav__link"><Activity size={16} /> AI Safety</a>
            <a href="#" className="docs-nav__link"><Lock size={16} /> Permissions</a>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="docs-main">
        <div className="docs-content">
          <div className="docs-breadcrumbs">
            <span>Hora</span> <ChevronRight size={14} /> <span>Legal</span> <ChevronRight size={14} /> <span className="current">Privacy Policy</span>
          </div>

          <header className="docs-header">
            <h1 className="docs-title">Privacy Policy</h1>
            <div className="docs-meta">
              <span className="docs-meta__item">Last updated: 16 March 2026</span>
              <span className="docs-meta__badge">v2.0</span>
            </div>
          </header>

          <div className="docs-body">
            <p className="docs-intro">
              At Hora ("we", "our", "us") we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines our practices regarding the collection, use, disclosure, and protection of your data when you visit our platform hora.dev. By using our services, you agree to the terms of this policy.
            </p>

            <section id="introduction" className="docs-section">
              <h2><span className="section-num">1</span> Introduction</h2>
              <p>Hora is dedicated to creating a safe and secure online environment for our clients and platform visitors. We understand the importance of privacy and are committed to safeguarding your personal information.</p>
              <p>This Privacy Policy explains our practices concerning the collection, use, and sharing of your data. We encourage you to review this policy regularly as we may update it periodically to reflect changes in our practices or legal requirements.</p>
              <div className="docs-callout">
                <p>Hora is an engineering analytics platform that integrates with Git providers such as GitHub to compute developer productivity metrics, DORA metrics, and AI-assisted insights. This policy covers all data processed through that integration.</p>
              </div>
            </section>

            <section id="information-collected" className="docs-section">
              <h2><span className="section-num">2</span> Information We Collect</h2>
              
              <h3>2.1 Personal Data</h3>
              <p>We collect personally identifiable information ("Personal Data") that you voluntarily provide to us. This may include your name, email address, phone number, and billing information. You may provide this information when you sign up for our services, contact us for inquiries, or participate in surveys and promotions.</p>
              
              <h3>2.2 Non-Personal Data</h3>
              <p>In addition to Personal Data, we collect non-personal information that cannot be used to identify you individually. This includes data such as your IP address, browser type, operating system, referring URLs, pages viewed, and the dates/times of your visits.</p>

              <h3>2.3 GitHub Integration Data</h3>
              <p>When you connect Hora to a GitHub organisation, we access repository data through the GitHub Apps authentication model. We only access the minimum data required to compute analytics. See the GitHub Data section for a complete breakdown.</p>
            </section>

            <section id="how-we-use" className="docs-section">
              <h2><span className="section-num">3</span> How We Use Your Information</h2>
              
              <h3>3.1 Personal Data</h3>
              <ul className="docs-list">
                <li><strong>Providing Services:</strong> To deliver the services you request, manage your account, and process transactions.</li>
                <li><strong>Communication:</strong> To communicate with you about your account, respond to inquiries, provide updates, and send promotional materials.</li>
                <li><strong>Personalisation:</strong> To tailor our services to your preferences and enhance your user experience.</li>
                <li><strong>Improvement:</strong> To analyse and improve our services, develop new features, and understand how users interact with our platform.</li>
              </ul>

              <h3>3.2 Non-Personal Data</h3>
              <ul className="docs-list">
                <li><strong>Enhance User Experience:</strong> By understanding how visitors use Hora, we can improve navigation, content, and functionality.</li>
                <li><strong>Monitor Trends:</strong> To analyse trends and gather demographic information about our user base.</li>
                <li><strong>Security:</strong> To detect and prevent fraud, abuse, and security incidents.</li>
              </ul>
            </section>

            <section id="sharing" className="docs-section">
              <h2><span className="section-num">4</span> Sharing Your Information</h2>
              <p>We do not sell, trade, or rent your Personal Data to third parties. We may share information in the following limited circumstances:</p>
              <div className="docs-grid-2">
                <div className="docs-card">
                  <h4>Service Providers</h4>
                  <p>Trusted third-party providers who assist in operating our platform, conducting our business, or servicing you.</p>
                </div>
                <div className="docs-card">
                  <h4>Legal Requirements</h4>
                  <p>We may disclose your information if required by law or in response to valid requests by public authorities.</p>
                </div>
                <div className="docs-card">
                  <h4>Business Transfers</h4>
                  <p>In the event of a merger or acquisition, your information may be transferred to the acquiring entity.</p>
                </div>
                <div className="docs-card">
                  <h4>Protection of Rights</h4>
                  <p>When we believe disclosure is appropriate to protect the rights, property, or safety of Hora, our users, or others.</p>
                </div>
              </div>
            </section>

            <section id="github-data" className="docs-section">
              <h2><span className="section-num">5</span> How Hora Uses GitHub Data</h2>
              <p>Hora integrates with GitHub using a GitHub App to securely access repository data. This enables us to compute engineering velocity, DORA metrics, and AI-assisted insights without requiring direct user credentials or full GitHub account access.</p>
              
              <div className="docs-tags">
                <span className="docs-tag docs-tag--green">Never stores passwords</span>
                <span className="docs-tag docs-tag--green">No personal access tokens</span>
                <span className="docs-tag docs-tag--green">Fully revocable access</span>
              </div>

              <h3>Authentication Model</h3>
              <p>Hora leverages GitHub Apps to provide a secure, scalable, and granular authentication model that surpasses traditional OAuth methods.</p>
              <ul className="docs-list docs-list--check">
                <li>Least-privilege scoped access — only the minimum permissions required are requested</li>
                <li>Per-repository installation control — you choose exactly which repos Hora can access</li>
                <li>Short-lived auto-rotating tokens — tokens expire automatically, no long-lived secrets</li>
                <li>Granular organisational permissions — fine-grained control at the org level</li>
              </ul>

              <div className="docs-diagram">
                <div className="diagram-box">Hora App <br/><small>Private Key JWT</small></div>
                <ArrowLeft className="diagram-arrow" />
                <div className="diagram-box diagram-box--primary">GitHub App <br/><small>Installation Token</small></div>
                <ArrowLeft className="diagram-arrow" />
                <div className="diagram-box">GitHub API v3</div>
              </div>

              <h3>GitHub Data Hora Accesses</h3>
              <p>Hora only accesses data required for analytics and reporting. <strong>No source code is read.</strong></p>
              
              <div className="docs-grid-3">
                <div className="docs-card docs-card--small">
                  <h4>Repository Metadata</h4>
                  <ul>
                    <li>Repository name</li>
                    <li>Default branch</li>
                    <li>Visibility (public/private)</li>
                  </ul>
                </div>
                <div className="docs-card docs-card--small">
                  <h4>Pull Requests</h4>
                  <ul>
                    <li>PR count & author</li>
                    <li>Created/merged timestamps</li>
                    <li>Review duration & lead time</li>
                  </ul>
                </div>
                <div className="docs-card docs-card--small">
                  <h4>Commits & Deploys</h4>
                  <ul>
                    <li>Commit timestamps & authors</li>
                    <li>GitHub Actions runs</li>
                    <li>Deployment success/failure</li>
                  </ul>
                </div>
              </div>

              <div className="docs-alert docs-alert--warning">
                <h4>Hora Does NOT Read</h4>
                <ul>
                  <li>Private user messages</li>
                  <li>GitHub issue comment content (unless explicitly enabled)</li>
                  <li>Source code contents (except commit metadata)</li>
                </ul>
              </div>

              <h3>DORA Metrics Calculation</h3>
              <p>Hora computes industry-standard DORA metrics using GitHub signals.</p>
              <table className="docs-table">
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>Source</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Deployment Frequency</strong></td>
                    <td>GitHub Actions / Deployments</td>
                  </tr>
                  <tr>
                    <td><strong>Lead Time for Changes</strong></td>
                    <td>PR created → merged</td>
                  </tr>
                  <tr>
                    <td><strong>Change Failure Rate</strong></td>
                    <td>Failed deployments</td>
                  </tr>
                  <tr>
                    <td><strong>MTTR</strong></td>
                    <td>Recovery window after failures</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section id="ai-safety" className="docs-section">
              <h2><span className="section-num">6</span> AI Safety & Data Minimisation</h2>
              <p>Hora's AI-powered insights are designed with data minimisation as a core principle. We are deliberate about what data is shared with AI models and what remains private.</p>
              
              <div className="docs-split">
                <div className="docs-split-col docs-split-col--good">
                  <h4>✅ What AI Receives</h4>
                  <ul>
                    <li>Numeric metrics & summaries</li>
                    <li>Aggregated, non-PII data</li>
                    <li>Velocity summaries</li>
                    <li>Bottleneck analysis</li>
                  </ul>
                  <p className="docs-note">If AI is disabled, Hora continues to function with pure metrics. AI responses gracefully degrade.</p>
                </div>
                <div className="docs-split-col docs-split-col--bad">
                  <h4>🚫 Never Sent to AI</h4>
                  <ul>
                    <li>Raw GitHub tokens or secrets</li>
                    <li>Private code or commit diffs</li>
                    <li>File contents</li>
                    <li>Access tokens</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="permissions" className="docs-section">
              <h2><span className="section-num">7</span> Permissions Requested</h2>
              <p>Hora requests only the permissions necessary for the features you use. All permissions are visible and controllable from your GitHub settings.</p>
              
              <table className="docs-table">
                <thead>
                  <tr>
                    <th>Permission</th>
                    <th>Scope</th>
                    <th>Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Read metadata</td>
                    <td><code className="docs-code">metadata: read</code></td>
                    <td>Repo identification</td>
                  </tr>
                  <tr>
                    <td>Read pull requests</td>
                    <td><code className="docs-code">pull_requests: read</code></td>
                    <td>Velocity & lead time</td>
                  </tr>
                  <tr>
                    <td>Read actions</td>
                    <td><code className="docs-code">actions: read</code></td>
                    <td>Deployment tracking</td>
                  </tr>
                  <tr>
                    <td>Read commits</td>
                    <td><code className="docs-code">contents: read</code> (metadata only)</td>
                    <td>Contribution analysis</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section id="user-control" className="docs-section">
              <h2><span className="section-num">8</span> User Control & Revocation</h2>
              <p>You maintain full control over Hora's access to your GitHub data at all times.</p>
              
              <div className="docs-grid-2">
                <div className="docs-card">
                  <h4>Full Control</h4>
                  <ul>
                    <li>Remove GitHub App installation anytime</li>
                    <li>Tokens expire automatically</li>
                    <li>All permissions transparent in UI</li>
                  </ul>
                </div>
                <div className="docs-card">
                  <h4>After Uninstalling</h4>
                  <ul>
                    <li>Hora immediately loses all access</li>
                    <li>No background polling continues</li>
                    <li>All data requests cease instantly</li>
                  </ul>
                </div>
              </div>

              <div className="docs-alert docs-alert--info">
                <p><strong>ℹ️ To revoke access:</strong> Visit GitHub → Settings → Integrations → GitHub Apps, find Hora, and click Uninstall. Access stops immediately with no grace period.</p>
              </div>
            </section>

            <section id="data-retention" className="docs-section">
              <h2><span className="section-num">9</span> Data Retention</h2>
              <p>We retain your Personal Data only for as long as necessary to provide our services and fulfil the purposes outlined in this Privacy Policy.</p>
              <ul className="docs-list">
                <li><strong>Account Data:</strong> Retained for the duration of your account. Deleted within 30 days of account closure upon request.</li>
                <li><strong>GitHub Metrics Data:</strong> Retained for up to 24 months to provide historical trend analysis. Deleted upon account closure or GitHub App uninstallation.</li>
                <li><strong>Log Data:</strong> Access logs retained for up to 90 days for security and debugging purposes.</li>
              </ul>
            </section>

            <section id="changes" className="docs-section">
              <h2><span className="section-num">10</span> Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we update this policy, we will revise the "Last Updated" date and notify you via email or an in-app notification for significant changes.</p>
            </section>

            <section id="contact" className="docs-section">
              <h2><span className="section-num">11</span> Contact Us</h2>
              <p>If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our privacy team:</p>
              
              <div className="docs-contact-card">
                <h4>📧 Hora Privacy Team</h4>
                <p><strong>Email:</strong> privacy@hora.dev</p>
                <p><strong>Address:</strong> Hora System Inc., Hyderabad, Telangana, India</p>
                <p><strong>Response time:</strong> Within 72 hours</p>
              </div>
            </section>

          </div>
          
          <footer className="docs-footer">
            <div className="docs-footer__links">
              <Link to="/terms-and-policy">Privacy Policy</Link>
              <Link to="/terms-and-policy">Terms of Service</Link>
              <Link to="/terms-and-policy">Cookie Policy</Link>
              <Link to="/terms-and-policy">Security</Link>
              <Link to="/terms-and-policy">Status</Link>
            </div>
            <p>© {new Date().getFullYear()} Hora System Inc. All rights reserved.</p>
          </footer>
        </div>
      </main>

      {/* Right Sidebar (Table of Contents) */}
      <aside className="docs-toc">
        <h4>On this page</h4>
        <nav>
          <a href="#introduction" onClick={(e) => scrollToSection(e, 'introduction')}>1. Introduction</a>
          <a href="#information-collected" onClick={(e) => scrollToSection(e, 'information-collected')}>2. Information We Collect</a>
          <div className="docs-toc__sub">
            <a href="#information-collected">2.1 Personal Data</a>
            <a href="#information-collected">2.2 Non-Personal Data</a>
            <a href="#information-collected">2.3 GitHub Data</a>
          </div>
          <a href="#how-we-use" onClick={(e) => scrollToSection(e, 'how-we-use')}>3. How We Use Your Information</a>
          <a href="#sharing" onClick={(e) => scrollToSection(e, 'sharing')}>4. Sharing Your Information</a>
          <a href="#github-data" onClick={(e) => scrollToSection(e, 'github-data')}>5. GitHub Data Usage</a>
          <a href="#ai-safety" onClick={(e) => scrollToSection(e, 'ai-safety')}>6. AI Safety</a>
          <a href="#permissions" onClick={(e) => scrollToSection(e, 'permissions')}>7. Permissions</a>
          <a href="#user-control" onClick={(e) => scrollToSection(e, 'user-control')}>8. User Control</a>
          <a href="#data-retention" onClick={(e) => scrollToSection(e, 'data-retention')}>9. Data Retention</a>
          <a href="#changes" onClick={(e) => scrollToSection(e, 'changes')}>10. Changes</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>11. Contact Us</a>
        </nav>
      </aside>
    </div>
  );
}
