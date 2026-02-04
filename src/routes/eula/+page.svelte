<script lang="ts">
  import Logo from "$lib/components/Logo.svelte";
</script>

<svelte:head>
  <title>End User License Agreement - Employee Envoy</title>
  <meta
    name="description"
    content="End User License Agreement (EULA) for Employee Envoy software and services including trial and beta access terms."
  />

  <!-- Canonical URL -->
  <link rel="canonical" href="https://employeeenvoy.com/eula" />

  <!-- Open Graph -->
  <meta
    property="og:title"
    content="End User License Agreement - Employee Envoy"
  />
  <meta
    property="og:description"
    content="EULA for Employee Envoy software and services."
  />
  <meta property="og:url" content="https://employeeenvoy.com/eula" />
  <meta property="og:image" content="https://employeeenvoy.com/og-image.png" />

  <!-- Twitter Card -->
  <meta
    name="twitter:title"
    content="End User License Agreement - Employee Envoy"
  />
  <meta
    name="twitter:description"
    content="EULA for Employee Envoy software and services."
  />
  <meta name="twitter:image" content="https://employeeenvoy.com/og-image.png" />
</svelte:head>

<!-- Navigation -->
<nav
  class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-slate-800"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <a href="/">
        <Logo size="sm" variant="default" />
      </a>
      <a
        href="/"
        class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-amber-500 transition-colors"
      >
        ← Back to Home
      </a>
    </div>
  </div>
</nav>

<div
  class="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 pt-24 pb-12 px-4 sm:px-6 lg:px-8"
>
  <div class="max-w-4xl mx-auto">
    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        End User License Agreement
      </h1>
      <p class="text-gray-600 dark:text-gray-400">
        Last updated: February 2, 2026
      </p>
    </div>

    <!-- Content -->
    <div
      class="bg-white dark:bg-slate-800 rounded-2xl border-2 border-gray-200 dark:border-slate-700 p-8 md:p-12 prose prose-slate dark:prose-invert max-w-none"
    >
      <div
        class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-8"
      >
        <p class="text-amber-800 dark:text-amber-200 text-sm m-0">
          <strong>IMPORTANT:</strong> Please read this End User License Agreement
          ("EULA" or "Agreement") carefully before using Employee Envoy. By installing,
          accessing, or using the software or services, you agree to be bound by
          the terms of this Agreement.
        </p>
      </div>

      <h2>1. Agreement Overview</h2>
      <p>
        This End User License Agreement ("EULA") is a legal agreement between
        you (either an individual or a single entity, referred to as "You,"
        "Your," or "User") and Employee Envoy ("Company," "We," "Us," or "Our")
        for the use of:
      </p>
      <ul>
        <li>The Employee Envoy web application ("Web App")</li>
        <li>The Employee Envoy desktop application ("Desktop App")</li>
        <li>Associated documentation, updates, and support services</li>
        <li>Any trial, beta, or early access versions of the software</li>
      </ul>
      <p>
        This EULA supplements our Terms of Service and Privacy Policy. In case
        of conflict, this EULA governs regarding software licensing matters.
      </p>

      <h2>2. License Grant</h2>

      <h3>2.1 Scope of License</h3>
      <p>
        Subject to your compliance with this Agreement, the Company grants you a
        limited, non-exclusive, non-transferable, revocable license to:
      </p>
      <ul>
        <li>
          Install and use the Desktop App on devices owned or controlled by you
        </li>
        <li>Access and use the Web App through a supported web browser</li>
        <li>Use the software solely for your internal business purposes</li>
      </ul>

      <h3>2.2 License Restrictions</h3>
      <p>You may NOT:</p>
      <ul>
        <li>
          Copy, modify, adapt, translate, or create derivative works of the
          software
        </li>
        <li>
          Reverse engineer, decompile, disassemble, or attempt to derive source
          code
        </li>
        <li>Rent, lease, lend, sell, sublicense, or distribute the software</li>
        <li>Remove, alter, or obscure any proprietary notices or labels</li>
        <li>Use the software to develop a competing product or service</li>
        <li>Use the software in violation of applicable laws or regulations</li>
        <li>Circumvent any technical limitations or security measures</li>
        <li>Share your account credentials or allow unauthorized access</li>
        <li>Use automated tools (bots, scrapers) without written permission</li>
      </ul>

      <h3>2.3 Reservation of Rights</h3>
      <p>
        All rights not expressly granted in this Agreement are reserved by the
        Company. The software is licensed, not sold. This Agreement does not
        grant you any rights to trademarks, service marks, or logos of Employee
        Envoy.
      </p>

      <h2>3. Trial and Beta Software</h2>

      <h3>3.1 Trial Period</h3>
      <p>
        We may offer a free trial period for evaluation purposes. During the
        trial:
      </p>
      <ul>
        <li>You have access to the full functionality of the software</li>
        <li>No payment information is required to begin the trial</li>
        <li>The trial period is limited (typically 14-30 days as specified)</li>
        <li>
          We may limit the number of employees, customers, or integrations
        </li>
        <li>Trial access may be terminated at our discretion</li>
      </ul>
      <p>
        At the end of the trial period, you must either subscribe to a paid plan
        or cease using the software. Your data may be retained for a limited
        time to allow for subscription conversion.
      </p>

      <h3>3.2 Beta and Early Access</h3>
      <p>If you participate in a beta program or early access release:</p>
      <ul>
        <li>
          <strong>Beta Status:</strong> The software is provided in a pre-release
          state and may contain bugs, errors, or incomplete features
        </li>
        <li>
          <strong>No Warranty:</strong> Beta software is provided "AS IS" without
          any warranties whatsoever
        </li>
        <li>
          <strong>Feedback:</strong> You agree to provide feedback on your experience,
          which becomes our property
        </li>
        <li>
          <strong>Confidentiality:</strong> Beta features and functionality must
          be kept confidential unless otherwise specified
        </li>
        <li>
          <strong>Data Risk:</strong> Data may be lost during beta testing; you are
          responsible for maintaining backups
        </li>
        <li>
          <strong>Termination:</strong> Beta access may be terminated at any time
          without notice
        </li>
        <li>
          <strong>No Transition Guarantee:</strong> Participation in beta does not
          guarantee access to the final product or any specific pricing
        </li>
      </ul>

      <h3>3.3 Evaluation Limitations</h3>
      <p>
        Trial and beta software may include functional limitations including but
        not limited to:
      </p>
      <ul>
        <li>Restricted number of user accounts</li>
        <li>Limited customer or employee records</li>
        <li>Disabled or limited integration features</li>
        <li>Watermarks or trial notices in the interface</li>
        <li>Disabled export or reporting features</li>
        <li>Time-limited access to certain features</li>
      </ul>

      <h2>4. Desktop Application Specific Terms</h2>

      <h3>4.1 Installation</h3>
      <p>
        The Desktop App may be installed on devices you own or control. You are
        responsible for ensuring your system meets the minimum requirements for
        the software.
      </p>

      <h3>4.2 Local Data Storage</h3>
      <p>The Desktop App may store data locally on your device, including:</p>
      <ul>
        <li>Cached data for offline access</li>
        <li>
          Credentials in the system keychain (macOS Keychain, Windows Credential
          Manager)
        </li>
        <li>Application preferences and settings</li>
        <li>Log files for troubleshooting</li>
      </ul>
      <p>
        You are responsible for the security of your device and any locally
        stored data.
      </p>

      <h3>4.3 Updates</h3>
      <p>
        The software may automatically check for and install updates. These
        updates may include:
      </p>
      <ul>
        <li>Bug fixes and security patches</li>
        <li>Feature enhancements</li>
        <li>Changes required for compatibility</li>
      </ul>
      <p>
        You agree that the Company may automatically update the software.
        Continued use after updates constitutes acceptance of the updated
        software.
      </p>

      <h3>4.4 Telemetry and Analytics</h3>
      <p>
        The Desktop App may collect anonymous usage data to improve the product.
        This may include:
      </p>
      <ul>
        <li>Feature usage statistics</li>
        <li>Error reports and crash data</li>
        <li>Performance metrics</li>
      </ul>
      <p>
        Personal data and business data are NOT collected through telemetry. You
        may disable telemetry in the application settings where available.
      </p>

      <h2>5. Intellectual Property</h2>

      <h3>5.1 Ownership</h3>
      <p>
        The software, including all copies, modifications, enhancements, and
        derivative works, is owned by Employee Envoy or its licensors. The
        software is protected by copyright, trade secret, and other intellectual
        property laws.
      </p>

      <h3>5.2 Your Content</h3>
      <p>
        You retain ownership of any data, content, or materials you input into
        the software ("Your Content"). You grant us a limited license to use
        Your Content solely to provide the services.
      </p>

      <h3>5.3 Feedback</h3>
      <p>
        If you provide suggestions, ideas, or feedback about the software
        ("Feedback"), you grant us an irrevocable, perpetual, royalty-free
        license to use such Feedback for any purpose without compensation or
        attribution.
      </p>

      <h2>6. Disclaimers</h2>

      <h3>6.1 No Warranty</h3>
      <p class="font-bold">
        THE SOFTWARE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF
        ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, OR
        NON-INFRINGEMENT.
      </p>

      <h3>6.2 No Guarantee</h3>
      <p>We do not warrant that:</p>
      <ul>
        <li>The software will meet your specific requirements</li>
        <li>
          The software will be uninterrupted, timely, secure, or error-free
        </li>
        <li>Results obtained from the software will be accurate or reliable</li>
        <li>Defects in the software will be corrected</li>
        <li>
          The software will be compatible with any other software or hardware
        </li>
      </ul>

      <h3>6.3 Third-Party Services</h3>
      <p>
        The software integrates with third-party services. We are not
        responsible for the availability, reliability, or functionality of these
        services. Your use of third-party services is subject to their
        respective terms and conditions.
      </p>

      <h3>6.4 Professional Advice</h3>
      <p>
        The software is a tool to assist with employee lifecycle management. It
        does not provide legal, HR, or professional advice. You should consult
        appropriate professionals for compliance, legal, or HR matters.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p class="font-bold">
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL EMPLOYEE ENVOY
        OR ITS SUPPLIERS BE LIABLE FOR ANY SPECIAL, INCIDENTAL, INDIRECT,
        PUNITIVE, OR CONSEQUENTIAL DAMAGES WHATSOEVER, INCLUDING BUT NOT LIMITED
        TO:
      </p>
      <ul>
        <li>Loss of profits, revenue, or data</li>
        <li>Business interruption</li>
        <li>Cost of procurement of substitute goods or services</li>
        <li>Computer failure or malfunction</li>
        <li>
          Any other damages arising out of use or inability to use the software
        </li>
      </ul>
      <p class="font-bold">
        OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE
        SOFTWARE IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR ONE HUNDRED
        DOLLARS ($100), WHICHEVER IS GREATER.
      </p>
      <p>
        Some jurisdictions do not allow the limitation or exclusion of liability
        for incidental or consequential damages, so the above limitations may
        not apply to you.
      </p>

      <h2>8. Indemnification</h2>
      <p>
        You agree to indemnify, defend, and hold harmless Employee Envoy and its
        officers, directors, employees, agents, and successors from any claims,
        damages, losses, liabilities, costs, and expenses (including reasonable
        attorney fees) arising from:
      </p>
      <ul>
        <li>Your use of the software</li>
        <li>Your violation of this Agreement</li>
        <li>Your violation of any third-party rights</li>
        <li>Your Content or data processed through the software</li>
      </ul>

      <h2>9. Term and Termination</h2>

      <h3>9.1 Term</h3>
      <p>
        This Agreement is effective until terminated. For trial users, this
        Agreement terminates at the end of the trial period unless you
        subscribe. For subscribers, this Agreement continues for the duration of
        your subscription.
      </p>

      <h3>9.2 Termination by You</h3>
      <p>
        You may terminate this Agreement at any time by uninstalling the Desktop
        App, closing your account, and ceasing all use of the software.
      </p>

      <h3>9.3 Termination by Us</h3>
      <p>We may terminate this Agreement immediately if:</p>
      <ul>
        <li>You breach any term of this Agreement</li>
        <li>You fail to pay any applicable fees</li>
        <li>We discontinue the software</li>
        <li>Required by law or legal process</li>
      </ul>

      <h3>9.4 Effect of Termination</h3>
      <p>Upon termination:</p>
      <ul>
        <li>All rights granted under this Agreement cease immediately</li>
        <li>You must uninstall and destroy all copies of the Desktop App</li>
        <li>You must cease all use of the Web App</li>
        <li>We may delete your data after a reasonable retention period</li>
        <li>Sections 5, 6, 7, 8, and 10 survive termination</li>
      </ul>

      <h2>10. General Provisions</h2>

      <h3>10.1 Governing Law</h3>
      <p>
        This Agreement is governed by the laws of the State of California,
        United States, without regard to conflict of law principles. You consent
        to the exclusive jurisdiction of the courts in California.
      </p>

      <h3>10.2 Entire Agreement</h3>
      <p>
        This Agreement, together with our Terms of Service and Privacy Policy,
        constitutes the entire agreement between you and Employee Envoy
        regarding the software.
      </p>

      <h3>10.3 Severability</h3>
      <p>
        If any provision of this Agreement is found unenforceable, the remaining
        provisions remain in full force and effect.
      </p>

      <h3>10.4 Waiver</h3>
      <p>
        Failure to enforce any provision of this Agreement does not constitute a
        waiver of that provision.
      </p>

      <h3>10.5 Assignment</h3>
      <p>
        You may not assign this Agreement without our written consent. We may
        assign this Agreement without restriction.
      </p>

      <h3>10.6 Export Compliance</h3>
      <p>
        You agree to comply with all applicable export laws and regulations. You
        may not export or re-export the software to any country, entity, or
        person prohibited by law.
      </p>

      <h3>10.7 U.S. Government Users</h3>
      <p>
        If you are a U.S. Government end user, the software is deemed
        "commercial computer software" and "commercial computer software
        documentation" pursuant to FAR 12.212 and DFARS 227.7202.
      </p>

      <h3>10.8 Modifications</h3>
      <p>
        We may modify this Agreement at any time. We will notify you of material
        changes via email or through the software. Continued use after
        modifications constitutes acceptance of the updated Agreement.
      </p>

      <h2>11. Contact Information</h2>
      <p>For questions about this EULA, please contact us:</p>
      <p>
        <strong>Email:</strong> legal@employeeenvoy.com<br />
        <strong>Support:</strong> support@employeeenvoy.com<br />
        <strong>Website:</strong> https://employeeenvoy.com
      </p>

      <hr class="my-8 border-gray-300 dark:border-gray-700" />

      <p class="text-sm text-gray-500 dark:text-gray-400">
        BY INSTALLING, COPYING, OR OTHERWISE USING THE SOFTWARE, YOU ACKNOWLEDGE
        THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THE TERMS OF
        THIS END USER LICENSE AGREEMENT.
      </p>
    </div>

    <div class="mt-8 text-center">
      <a
        href="/"
        class="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-medium"
      >
        ← Back to Home
      </a>
    </div>
  </div>
</div>
