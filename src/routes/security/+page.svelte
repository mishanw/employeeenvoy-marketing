<script lang="ts">
  import {
    Shield,
    Lock,
    Check,
    Users,
    FileCheck,
    Eye,
    Key,
    Server,
    Globe,
    AlertTriangle,
    ArrowRight,
    Fingerprint,
  } from "@lucide/svelte";
  import Logo from "$lib/components/Logo.svelte";
</script>

<svelte:head>
  <title>Security & Compliance - Employee Envoy</title>
  <meta
    name="description"
    content="Learn about Employee Envoy's security practices, compliance, encryption, and data protection measures. GDPR-ready & CCPA compliant."
  />

  <!-- Canonical URL -->
  <link rel="canonical" href="https://employeeenvoy.com/security" />

  <!-- Open Graph -->
  <meta property="og:title" content="Security & Compliance - Employee Envoy" />
  <meta
    property="og:description"
    content="Enterprise-grade security with AES-256 encryption, TOTP MFA, audit logging, and GDPR-ready/CCPA compliance."
  />
  <meta property="og:url" content="https://employeeenvoy.com/security" />
  <meta property="og:image" content="https://employeeenvoy.com/og-image.png" />

  <!-- Twitter Card -->
  <meta name="twitter:title" content="Security & Compliance - Employee Envoy" />
  <meta
    name="twitter:description"
    content="Enterprise-grade security with AES-256 encryption, TOTP MFA, and GDPR-ready/CCPA compliance."
  />
  <meta name="twitter:image" content="https://employeeenvoy.com/og-image.png" />
</svelte:head>

<!-- Hero Section -->
<section
  class="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-amber-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
>
  <div class="max-w-4xl mx-auto text-center">
    <div
      class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-sm font-medium mb-8"
    >
      <Shield class="w-4 h-4" />
      <span>Enterprise-Grade Security</span>
    </div>
    <h1
      class="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
    >
      Your Data is Protected
    </h1>
    <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
      We take security seriously. Employee Envoy uses industry-leading
      encryption, access controls, and compliance standards to protect your
      employee data.
    </p>
  </div>
</section>

<!-- Security Practices -->
<section class="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Security Practices
      </h2>
      <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Multiple layers of security protect your data at every level
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Encryption -->
      <div
        class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700"
      >
        <div
          class="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-4"
        >
          <Lock class="w-6 h-6 text-amber-600 dark:text-amber-400" />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          End-to-End Encryption
        </h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          All data is encrypted at rest and in transit using AES-256 encryption.
          Credentials are encrypted with industry-standard algorithms.
        </p>
        <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li class="flex items-start gap-2">
            <Check class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <span>AES-256 encryption at rest</span>
          </li>
          <li class="flex items-start gap-2">
            <Check class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <span>TLS 1.3 for data in transit</span>
          </li>
          <li class="flex items-start gap-2">
            <Check class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <span>Encrypted credential storage</span>
          </li>
        </ul>
      </div>

      <!-- Authentication -->
      <div
        class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700"
      >
        <div
          class="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-4"
        >
          <Key class="w-6 h-6 text-amber-600 dark:text-amber-400" />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Strong Authentication
        </h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Multi-factor authentication, passkeys, and secure password hashing
          protect user accounts from unauthorized access.
        </p>
        <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li class="flex items-start gap-2">
            <Check class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <span>Passkeys (Face ID, Touch ID, security keys)</span>
          </li>
          <li class="flex items-start gap-2">
            <Check class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <span>PBKDF2-SHA512 password hashing</span>
          </li>
          <li class="flex items-start gap-2">
            <Check class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <span>TOTP-based MFA (RFC 6238)</span>
          </li>
          <li class="flex items-start gap-2">
            <Check class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <span>Phishing-resistant WebAuthn/FIDO2</span>
          </li>
        </ul>
      </div>

      <!-- Access Control -->
      <div
        class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700"
      >
        <div
          class="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-4"
        >
          <Users class="w-6 h-6 text-amber-600 dark:text-amber-400" />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Role-Based Access
        </h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Granular permissions ensure users only access data and features they
          need for their role.
        </p>
        <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li class="flex items-start gap-2">
            <Check class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <span>Persona-based access control</span>
          </li>
          <li class="flex items-start gap-2">
            <Check class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <span>Multi-tenant data isolation</span>
          </li>
          <li class="flex items-start gap-2">
            <Check class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <span>Customer-level permissions</span>
          </li>
        </ul>
      </div>

      <!-- Audit Logging -->
      <div
        class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700"
      >
        <div
          class="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-4"
        >
          <FileCheck class="w-6 h-6 text-amber-600 dark:text-amber-400" />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Complete Audit Trail
        </h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Every action is logged with timestamps, user identification, and
          context for compliance and security.
        </p>
        <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li class="flex items-start gap-2">
            <Check class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <span>Comprehensive activity logging</span>
          </li>
          <li class="flex items-start gap-2">
            <Check class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <span>Immutable audit records</span>
          </li>
          <li class="flex items-start gap-2">
            <Check class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <span>Exportable audit logs</span>
          </li>
        </ul>
      </div>

      <!-- Infrastructure -->
      <div
        class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700"
      >
        <div
          class="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-4"
        >
          <Server class="w-6 h-6 text-amber-600 dark:text-amber-400" />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Secure Infrastructure
        </h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Built on Cloudflare's global network with enterprise-grade security
          and reliability.
        </p>
        <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li class="flex items-start gap-2">
            <Check class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <span>Cloudflare Workers & D1 Database</span>
          </li>
          <li class="flex items-start gap-2">
            <Check class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <span>High availability on Cloudflare's global network</span>
          </li>
          <li class="flex items-start gap-2">
            <Check class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <span>Automatic backups & disaster recovery</span>
          </li>
        </ul>
      </div>

      <!-- Privacy -->
      <div
        class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700"
      >
        <div
          class="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-4"
        >
          <Eye class="w-6 h-6 text-amber-600 dark:text-amber-400" />
        </div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Data Privacy
        </h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          We never sell your data. Your employee information is used solely to
          provide the service.
        </p>
        <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li class="flex items-start gap-2">
            <Check class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <span>No data sharing with third parties</span>
          </li>
          <li class="flex items-start gap-2">
            <Check class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <span>Data deletion on request</span>
          </li>
          <li class="flex items-start gap-2">
            <Check class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <span>Right to access & export data</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Compliance -->
<section
  class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800"
>
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Compliance & Certifications
      </h2>
      <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        We meet or exceed industry standards for data protection and privacy
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <!-- GDPR -->
      <div
        class="p-8 rounded-2xl bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700"
      >
        <div class="flex items-center gap-4 mb-4">
          <div
            class="w-16 h-16 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center"
          >
            <Globe class="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
            GDPR-Ready
          </h3>
        </div>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Built with GDPR principles in mind to support European users' data
          protection rights.
        </p>
        <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li class="flex items-start gap-2">
            <Check class="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
            <span>Right to access, rectification, and erasure</span>
          </li>
          <li class="flex items-start gap-2">
            <Check class="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
            <span>Data portability</span>
          </li>
          <li class="flex items-start gap-2">
            <Check class="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
            <span>Privacy by design</span>
          </li>
        </ul>
      </div>

      <!-- CCPA/CPRA -->
      <div
        class="p-8 rounded-2xl bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700"
      >
        <div class="flex items-center gap-4 mb-4">
          <div
            class="w-16 h-16 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center"
          >
            <Shield class="w-8 h-8 text-amber-600 dark:text-amber-400" />
          </div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
            CCPA/CPRA Compliant
          </h3>
        </div>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Compliant with California Consumer Privacy Act (CCPA) and California
          Privacy Rights Act (CPRA).
        </p>
        <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li class="flex items-start gap-2">
            <Check class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <span>Right to know what data is collected</span>
          </li>
          <li class="flex items-start gap-2">
            <Check class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <span>Right to delete personal information</span>
          </li>
          <li class="flex items-start gap-2">
            <Check class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
            <span>Right to opt-out of data sharing</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- SOC 2 Roadmap -->
    <div
      class="mt-12 p-8 rounded-2xl bg-slate-100 dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 max-w-4xl mx-auto"
    >
      <div class="flex items-start gap-4">
        <Shield
          class="w-6 h-6 text-slate-600 dark:text-slate-400 flex-shrink-0 mt-1"
        />
        <div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            SOC 2 Roadmap
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            We are building our security controls with SOC 2 Trust Service
            Criteria in mind. Our current infrastructure includes many controls
            required for SOC 2 compliance:
          </p>
          <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <li class="flex items-start gap-2">
              <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Access controls with MFA and role-based permissions</span>
            </li>
            <li class="flex items-start gap-2">
              <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Encryption at rest and in transit</span>
            </li>
            <li class="flex items-start gap-2">
              <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Comprehensive audit logging</span>
            </li>
            <li class="flex items-start gap-2">
              <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Secure credential storage</span>
            </li>
          </ul>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            We plan to pursue formal SOC 2 certification as we scale. Enterprise
            customers requiring SOC 2 attestation can <a
              href="/contact"
              class="text-amber-600 dark:text-amber-400 hover:underline"
              >contact us</a
            > to discuss our security controls and roadmap.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Security Features -->
<section class="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Additional Security Features
      </h2>
    </div>

    <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      <div
        class="flex items-start gap-4 p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700"
      >
        <Check class="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
        <div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-1">
            Rate Limiting
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            API endpoints are protected with rate limiting to prevent abuse and
            brute force attacks.
          </p>
        </div>
      </div>

      <div
        class="flex items-start gap-4 p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700"
      >
        <Check class="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
        <div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-1">
            Content Security Policy
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            CSP headers protect against XSS attacks and unauthorized script
            execution.
          </p>
        </div>
      </div>

      <div
        class="flex items-start gap-4 p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700"
      >
        <Check class="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
        <div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-1">
            Regular Security Updates
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            We regularly update dependencies and patch security vulnerabilities.
          </p>
        </div>
      </div>

      <div
        class="flex items-start gap-4 p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700"
      >
        <Check class="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
        <div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-1">
            Automated Backups
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Daily automated backups ensure data recovery in case of incidents.
          </p>
        </div>
      </div>

      <div
        class="flex items-start gap-4 p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700"
      >
        <Check class="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
        <div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-1">
            Health Monitoring
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            24/7 monitoring and alerting for security incidents and system
            health.
          </p>
        </div>
      </div>

      <div
        class="flex items-start gap-4 p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700"
      >
        <Check class="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
        <div>
          <h3 class="font-semibold text-gray-900 dark:text-white mb-1">
            Secure Credential Storage
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            Integration credentials are encrypted and stored securely, never
            exposed in logs or UI.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Reporting Security Issues -->
<section
  class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800"
>
  <div class="max-w-4xl mx-auto text-center">
    <div
      class="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mx-auto mb-6"
    >
      <AlertTriangle class="w-8 h-8 text-amber-600 dark:text-amber-400" />
    </div>
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
      Found a Security Issue?
    </h2>
    <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
      We take security vulnerabilities seriously. If you discover a security
      issue, please report it responsibly.
    </p>
    <div
      class="p-6 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-left max-w-2xl mx-auto"
    >
      <p class="text-gray-700 dark:text-gray-300 mb-4">
        <strong>Email:</strong>
        <a
          href="mailto:security@employeeenvoy.com"
          class="text-amber-600 dark:text-amber-400 hover:underline"
          >security@employeeenvoy.com</a
        >
      </p>
      <p class="text-sm text-gray-600 dark:text-gray-400">
        Please include details about the vulnerability, steps to reproduce, and
        potential impact. We will respond within 48 hours and work with you to
        resolve the issue responsibly.
      </p>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section
  class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-500 to-orange-500"
>
  <div class="max-w-4xl mx-auto text-center">
    <h2 class="text-4xl font-bold text-white mb-4">
      Secure Employee Lifecycle Management
    </h2>
    <p class="text-xl text-amber-100 mb-8">
      Enterprise-grade security from day one
    </p>
    <a
      href="/contact"
      class="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-amber-600 bg-white rounded-xl hover:bg-amber-50 transition-all shadow-xl hover:shadow-2xl"
    >
      Get Started
      <ArrowRight class="w-5 h-5" />
    </a>
  </div>
</section>

<!-- Footer -->
<footer class="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 text-gray-400">
  <div class="max-w-7xl mx-auto">
    <div class="grid md:grid-cols-4 gap-8 mb-8">
      <div>
        <div class="mb-4">
          <Logo size="sm" variant="light" />
        </div>
        <p class="text-sm">Your Trusted Partner for Employee Transitions</p>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-4">Product</h4>
        <ul class="space-y-2 text-sm">
          <li>
            <a href="/#features" class="hover:text-amber-400 transition-colors"
              >Features</a
            >
          </li>
          <li>
            <a href="/#pricing" class="hover:text-amber-400 transition-colors"
              >Pricing</a
            >
          </li>
          <li>
            <a href="/security" class="hover:text-amber-400 transition-colors"
              >Security</a
            >
          </li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-4">Company</h4>
        <ul class="space-y-2 text-sm">
          <li>
            <a href="/contact" class="hover:text-amber-400 transition-colors"
              >Contact</a
            >
          </li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-4">Legal</h4>
        <ul class="space-y-2 text-sm">
          <li>
            <a href="/privacy" class="hover:text-amber-400 transition-colors"
              >Privacy</a
            >
          </li>
          <li>
            <a href="/terms" class="hover:text-amber-400 transition-colors"
              >Terms</a
            >
          </li>
          <li>
            <a
              href="/privacy#do-not-sell"
              class="hover:text-amber-400 transition-colors"
              >Do Not Sell My Info</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div
      class="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-sm"
    >
      <p>&copy; 2026 Employee Envoy. All rights reserved.</p>
      <div class="flex items-center gap-6 mt-4 sm:mt-0">
        <a href="/privacy" class="hover:text-amber-400 transition-colors"
          >Privacy</a
        >
        <a href="/terms" class="hover:text-amber-400 transition-colors">Terms</a
        >
      </div>
    </div>
  </div>
</footer>
