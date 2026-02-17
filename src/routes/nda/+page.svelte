<script lang="ts">
  import Logo from "$lib/components/Logo.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
  <title>Beta Tester NDA - Employee Envoy</title>
  <meta
    name="description"
    content="Non-Disclosure Agreement for Employee Envoy beta testers and early access participants."
  />

  <!-- Canonical URL -->
  <link rel="canonical" href="https://employeeenvoy.com/nda" />

  <!-- Open Graph -->
  <meta property="og:title" content="Beta Tester NDA - Employee Envoy" />
  <meta
    property="og:description"
    content="Non-Disclosure Agreement for beta testers."
  />
  <meta property="og:url" content="https://employeeenvoy.com/nda" />
  <meta property="og:image" content="https://employeeenvoy.com/og-image.png" />

  <!-- Twitter Card -->
  <meta name="twitter:title" content="Beta Tester NDA - Employee Envoy" />
  <meta
    name="twitter:description"
    content="Non-Disclosure Agreement for beta testers."
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
        Beta Tester Non-Disclosure Agreement
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
        class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8"
      >
        <p class="text-blue-800 dark:text-blue-200 text-sm m-0">
          <strong>BETA PROGRAM AGREEMENT:</strong> This Non-Disclosure Agreement
          ("NDA" or "Agreement") governs your participation in the Employee Envoy
          Beta Program. By accepting this Agreement, you become a Beta Tester and
          agree to keep all information about the beta software confidential.
        </p>
      </div>

      <h2>NON-DISCLOSURE AGREEMENT</h2>

      <p>
        This Non-Disclosure Agreement ("Agreement") is entered into as of the
        date of acceptance ("Effective Date") by and between:
      </p>

      <p>
        <strong>DISCLOSING PARTY:</strong><br />
        Employee Envoy<br />
        California, United States<br />
        ("Company")
      </p>

      <p>
        <strong>RECEIVING PARTY:</strong><br />
        The individual or organization accepting this Agreement<br />
        ("Beta Tester" or "Recipient")
      </p>

      <p>
        Company and Beta Tester may each be referred to as a "Party" and
        collectively as the "Parties."
      </p>

      <hr class="my-6" />

      <h2>RECITALS</h2>
      <p>
        <strong>WHEREAS,</strong> Company has developed proprietary software known
        as "Employee Envoy" for employee lifecycle management;
      </p>
      <p>
        <strong>WHEREAS,</strong> Company desires to provide Beta Tester with early
        access to pre-release versions of the software for testing and evaluation
        purposes;
      </p>
      <p>
        <strong>WHEREAS,</strong> Beta Tester desires to participate in Company's
        beta testing program and provide feedback on the software;
      </p>
      <p>
        <strong>WHEREAS,</strong> Company will disclose certain Confidential Information
        to Beta Tester in connection with the beta testing program;
      </p>
      <p>
        <strong>NOW, THEREFORE,</strong> in consideration of the mutual covenants
        and agreements set forth herein, and for other good and valuable consideration,
        the receipt and sufficiency of which are hereby acknowledged, the Parties
        agree as follows:
      </p>

      <hr class="my-6" />

      <h2>1. DEFINITIONS</h2>

      <h3>1.1 "Confidential Information"</h3>
      <p>
        "Confidential Information" means any and all non-public information
        disclosed by Company to Beta Tester, whether orally, in writing,
        electronically, or through access to the software, including but not
        limited to:
      </p>
      <ul>
        <li>
          (a) The beta software itself, including all features, functionality,
          and user interfaces;
        </li>
        <li>
          (b) Technical architecture, algorithms, source code, and system
          designs;
        </li>
        <li>(c) Product roadmaps, future features, and development plans;</li>
        <li>
          (d) Pricing strategies, business plans, and marketing information;
        </li>
        <li>(e) Performance data, metrics, and benchmark results;</li>
        <li>(f) Known bugs, defects, issues, and limitations;</li>
        <li>
          (g) API specifications, integration details, and technical
          documentation;
        </li>
        <li>(h) Security implementations and encryption methodologies;</li>
        <li>(i) Customer lists, user data structures, and database schemas;</li>
        <li>
          (j) Any information designated as "confidential," "proprietary," or
          similar; and
        </li>
        <li>
          (k) Any other information that a reasonable person would understand to
          be confidential given the nature of the information and circumstances
          of disclosure.
        </li>
      </ul>

      <h3>1.2 "Beta Software"</h3>
      <p>
        "Beta Software" means any pre-release, beta, alpha, preview, or early
        access version of the Employee Envoy software, including the web
        application, desktop application, APIs, and related services.
      </p>

      <h3>1.3 "Feedback"</h3>
      <p>
        "Feedback" means any suggestions, ideas, enhancement requests,
        recommendations, bug reports, or other input provided by Beta Tester
        regarding the Beta Software.
      </p>

      <h2>2. CONFIDENTIALITY OBLIGATIONS</h2>

      <h3>2.1 Non-Disclosure</h3>
      <p>Beta Tester agrees to:</p>
      <ul>
        <li>
          (a) Hold and maintain all Confidential Information in strict
          confidence;
        </li>
        <li>
          (b) Not disclose, publish, or otherwise reveal any Confidential
          Information to any third party;
        </li>
        <li>
          (c) Not use Confidential Information for any purpose other than
          evaluating and providing feedback on the Beta Software;
        </li>
        <li>
          (d) Protect Confidential Information using the same degree of care
          used to protect their own confidential information, but in no event
          less than reasonable care.
        </li>
      </ul>

      <h3>2.2 Specific Prohibitions</h3>
      <p>
        Without limiting the generality of Section 2.1, Beta Tester specifically
        agrees NOT to:
      </p>
      <ul>
        <li>
          (a) Post screenshots, videos, or recordings of the Beta Software on
          social media, websites, or any public forum;
        </li>
        <li>
          (b) Discuss features, functionality, or appearance of the Beta
          Software with any third party;
        </li>
        <li>
          (c) Share login credentials or access with unauthorized persons;
        </li>
        <li>
          (d) Provide demonstrations of the Beta Software to any third party;
        </li>
        <li>
          (e) Disclose performance metrics, benchmarks, or comparison data;
        </li>
        <li>(f) Discuss known bugs, issues, or limitations publicly;</li>
        <li>
          (g) Disclose or discuss Confidential Information with competitors of
          Company;
        </li>
        <li>
          (h) Use Confidential Information to develop or enhance a competing
          product or service;
        </li>
        <li>
          (i) Reverse engineer, decompile, disassemble, or attempt to derive
          source code;
        </li>
        <li>
          (j) Copy, reproduce, or replicate any features, designs, or
          functionality.
        </li>
      </ul>

      <h3>2.3 Permitted Disclosures</h3>
      <p>
        Notwithstanding the above, Beta Tester may disclose Confidential
        Information:
      </p>
      <ul>
        <li>
          (a) To employees or contractors of Beta Tester who have a need to know
          for purposes of evaluating the Beta Software, provided such persons
          are bound by confidentiality obligations at least as protective as
          those in this Agreement;
        </li>
        <li>(b) With the prior written consent of Company;</li>
        <li>
          (c) To the extent required by law, regulation, or valid court order,
          provided that Beta Tester gives Company prompt written notice of such
          requirement (where legally permitted) and cooperates with Company's
          efforts to obtain a protective order.
        </li>
      </ul>

      <h3>2.4 Exclusions</h3>
      <p>Confidential Information does not include information that:</p>
      <ul>
        <li>
          (a) Was in the public domain at the time of disclosure or becomes
          publicly available through no fault of Beta Tester;
        </li>
        <li>
          (b) Was known to Beta Tester prior to disclosure, as evidenced by
          written records;
        </li>
        <li>
          (c) Is independently developed by Beta Tester without use of
          Confidential Information; or
        </li>
        <li>
          (d) Is rightfully obtained from a third party without restriction on
          disclosure.
        </li>
      </ul>

      <h2>3. INTELLECTUAL PROPERTY</h2>

      <h3>3.1 Ownership of Beta Software</h3>
      <p>
        Company retains all right, title, and interest in and to the Beta
        Software, including all intellectual property rights therein. This
        Agreement does not grant Beta Tester any ownership rights, license
        rights, or other rights in the Beta Software except as expressly set
        forth herein.
      </p>

      <h3>3.2 Assignment of Feedback</h3>
      <p>
        Beta Tester hereby irrevocably assigns to Company all right, title, and
        interest in and to any Feedback provided by Beta Tester. Company shall
        have the unrestricted right to use, modify, incorporate, distribute, and
        commercialize such Feedback without any obligation to Beta Tester,
        including without compensation, attribution, or accounting.
      </p>

      <h3>3.3 No Implied Rights</h3>
      <p>
        Nothing in this Agreement shall be construed as granting Beta Tester any
        rights to patents, copyrights, trade secrets, trademarks, or any other
        intellectual property rights of Company, whether by implication,
        estoppel, or otherwise.
      </p>

      <h2>4. BETA PROGRAM TERMS</h2>

      <h3>4.1 No Warranty</h3>
      <p>
        THE BETA SOFTWARE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
        WARRANTY OF ANY KIND. COMPANY EXPRESSLY DISCLAIMS ALL WARRANTIES,
        EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
        NON-INFRINGEMENT.
      </p>

      <h3>4.2 Beta Nature</h3>
      <p>Beta Tester acknowledges and agrees that:</p>
      <ul>
        <li>
          (a) The Beta Software is in development and may contain bugs, errors,
          and defects;
        </li>
        <li>
          (b) Features may be incomplete, inaccurate, or subject to change;
        </li>
        <li>(c) The Beta Software may not perform as expected or intended;</li>
        <li>(d) Use of the Beta Software is at Beta Tester's sole risk;</li>
        <li>
          (e) Company is not obligated to release a commercial version of the
          software;
        </li>
        <li>
          (f) The commercial version may differ materially from the Beta
          Software.
        </li>
      </ul>

      <h3>4.3 Data and Continuity</h3>
      <p>Beta Tester acknowledges that:</p>
      <ul>
        <li>
          (a) Data entered into the Beta Software may be lost, corrupted, or
          deleted;
        </li>
        <li>
          (b) Company may reset, migrate, or delete data at any time without
          notice;
        </li>
        <li>
          (c) There is no guarantee of data migration to any future version;
        </li>
        <li>
          (d) Beta Tester is responsible for maintaining their own backups;
        </li>
        <li>(e) Access to the Beta Software may be terminated at any time.</li>
      </ul>

      <h3>4.4 No Service Level Agreement</h3>
      <p>
        The Beta Software is not subject to any service level agreement. Company
        makes no commitments regarding uptime, availability, performance, or
        support response times.
      </p>

      <h3>4.5 No Guaranteed Access</h3>
      <p>Participation in the beta program does not guarantee:</p>
      <ul>
        <li>(a) Access to the final commercial product;</li>
        <li>(b) Any particular pricing or discounts;</li>
        <li>(c) Priority access or early release privileges;</li>
        <li>(d) Continued participation in future beta programs.</li>
      </ul>

      <h2>5. LIMITATION OF LIABILITY</h2>
      <p>
        <strong
          >IN NO EVENT SHALL COMPANY BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
          SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES ARISING OUT OF
          OR IN CONNECTION WITH THIS AGREEMENT OR THE BETA SOFTWARE, INCLUDING
          BUT NOT LIMITED TO LOSS OF DATA, LOSS OF PROFITS, BUSINESS
          INTERRUPTION, OR ANY OTHER COMMERCIAL DAMAGES OR LOSSES, EVEN IF
          COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</strong
        >
      </p>
      <p>
        <strong
          >COMPANY'S TOTAL LIABILITY UNDER THIS AGREEMENT SHALL NOT EXCEED ONE
          HUNDRED DOLLARS ($100).</strong
        >
      </p>

      <h2>6. TERM AND TERMINATION</h2>

      <h3>6.1 Term</h3>
      <p>
        This Agreement shall commence on the Effective Date and continue until
        terminated by either Party.
      </p>

      <h3>6.2 Termination</h3>
      <p>
        Either Party may terminate this Agreement at any time, for any reason,
        with or without cause, by providing written notice to the other Party.
      </p>

      <h3>6.3 Effect of Termination</h3>
      <p>Upon termination:</p>
      <ul>
        <li>
          (a) Beta Tester's access to the Beta Software shall be immediately
          revoked;
        </li>
        <li>(b) Beta Tester shall cease all use of the Beta Software;</li>
        <li>
          (c) Beta Tester shall destroy or return all Confidential Information
          in their possession;
        </li>
        <li>
          (d) Upon request, Beta Tester shall certify in writing that they have
          complied with this section.
        </li>
      </ul>

      <h3>6.4 Survival</h3>
      <p>
        The obligations of confidentiality under this Agreement shall survive
        termination and continue for a period of <strong>three (3) years</strong
        > from the date of disclosure of the Confidential Information, or until such
        information becomes publicly available through no fault of Beta Tester, whichever
        occurs first.
      </p>

      <h2>7. GENERAL PROVISIONS</h2>

      <h3>7.1 Governing Law</h3>
      <p>
        This Agreement shall be governed by and construed in accordance with the
        laws of the State of California, United States, without regard to its
        conflict of law provisions.
      </p>

      <h3>7.2 Dispute Resolution</h3>
      <p>
        Any dispute arising out of or relating to this Agreement shall be
        resolved through binding arbitration in accordance with the rules of the
        American Arbitration Association, conducted in California. Each Party
        shall bear its own costs and attorney fees.
      </p>

      <h3>7.3 Injunctive Relief</h3>
      <p>
        Beta Tester acknowledges that breach of this Agreement may cause
        irreparable harm to Company for which monetary damages would be
        inadequate. Company shall be entitled to seek injunctive relief,
        specific performance, or other equitable relief without the necessity of
        posting bond.
      </p>

      <h3>7.4 Entire Agreement</h3>
      <p>
        This Agreement constitutes the entire agreement between the Parties
        regarding the subject matter hereof and supersedes all prior or
        contemporaneous agreements, understandings, or communications.
      </p>

      <h3>7.5 Amendment</h3>
      <p>
        This Agreement may only be amended in writing signed by both Parties, or
        by Beta Tester's continued participation in the beta program after
        notice of amended terms.
      </p>

      <h3>7.6 Severability</h3>
      <p>
        If any provision of this Agreement is found to be unenforceable, the
        remaining provisions shall continue in full force and effect.
      </p>

      <h3>7.7 Waiver</h3>
      <p>
        Failure to enforce any provision of this Agreement shall not constitute
        a waiver of such provision or the right to enforce it.
      </p>

      <h3>7.8 Assignment</h3>
      <p>
        Beta Tester may not assign this Agreement without Company's prior
        written consent. Company may assign this Agreement without restriction.
      </p>

      <h3>7.9 Notices</h3>
      <p>
        All notices under this Agreement shall be in writing and delivered to
        the addresses provided by the Parties, or by email to the addresses on
        record.
      </p>

      <h3>7.10 No Employment</h3>
      <p>
        Nothing in this Agreement shall create an employment, partnership, joint
        venture, or agency relationship between the Parties.
      </p>

      <hr class="my-8 border-gray-300 dark:border-gray-700" />

      <h2>8. ACCEPTANCE</h2>
      <p>
        By clicking "I Accept," signing below, or accessing the Beta Software,
        Beta Tester acknowledges that they have read, understood, and agree to
        be bound by all terms and conditions of this Agreement.
      </p>

      <div class="bg-gray-100 dark:bg-slate-700 rounded-lg p-6 mt-8">
        <p class="font-bold mb-4">
          SIGNATURE BLOCK (For Physical/DocuSign Execution)
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p class="font-bold">COMPANY:</p>
            <p>Employee Envoy</p>
            <div
              class="mt-4 border-b border-gray-400 dark:border-gray-500 w-48"
            ></div>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Authorized Signature
            </p>
            <div
              class="mt-4 border-b border-gray-400 dark:border-gray-500 w-48"
            ></div>
            <p class="text-sm text-gray-600 dark:text-gray-400">Print Name</p>
            <div
              class="mt-4 border-b border-gray-400 dark:border-gray-500 w-48"
            ></div>
            <p class="text-sm text-gray-600 dark:text-gray-400">Title</p>
            <div
              class="mt-4 border-b border-gray-400 dark:border-gray-500 w-48"
            ></div>
            <p class="text-sm text-gray-600 dark:text-gray-400">Date</p>
          </div>

          <div>
            <p class="font-bold">BETA TESTER:</p>
            <div
              class="mt-4 border-b border-gray-400 dark:border-gray-500 w-48"
            ></div>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Authorized Signature
            </p>
            <div
              class="mt-4 border-b border-gray-400 dark:border-gray-500 w-48"
            ></div>
            <p class="text-sm text-gray-600 dark:text-gray-400">Print Name</p>
            <div
              class="mt-4 border-b border-gray-400 dark:border-gray-500 w-48"
            ></div>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Title (if applicable)
            </p>
            <div
              class="mt-4 border-b border-gray-400 dark:border-gray-500 w-48"
            ></div>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Organization (if applicable)
            </p>
            <div
              class="mt-4 border-b border-gray-400 dark:border-gray-500 w-48"
            ></div>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Email Address
            </p>
            <div
              class="mt-4 border-b border-gray-400 dark:border-gray-500 w-48"
            ></div>
            <p class="text-sm text-gray-600 dark:text-gray-400">Date</p>
          </div>
        </div>
      </div>

      <hr class="my-8 border-gray-300 dark:border-gray-700" />

      <div class="text-sm text-gray-500 dark:text-gray-400">
        <p>
          <strong>Contact Information:</strong><br />
          Email: legal@employeeenvoy.com<br />
          Support: support@employeeenvoy.com<br />
          Website: https://employeeenvoy.com
        </p>
        <p class="mt-4">
          <strong>Related Documents:</strong><br />
          <a href="/terms" class="text-amber-600 dark:text-amber-400"
            >Terms of Service</a
          >
          |
          <a href="/privacy" class="text-amber-600 dark:text-amber-400"
            >Privacy Policy</a
          >
          |
          <a href="/eula" class="text-amber-600 dark:text-amber-400">EULA</a>
        </p>
      </div>
    </div>

  </div>
</div>

<Footer />
