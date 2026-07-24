import React from 'react';

const BhagavadGitaOdiaPrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-8 md:p-16 lg:p-24 font-sans leading-relaxed">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white border-b pb-4 border-gray-200 dark:border-gray-700">
          Privacy Policy for Bhagavad Gita Odia
        </h1>
        
        <p className="text-sm text-gray-500 dark:text-gray-400">
          <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <p>
          Mukesh Jena built the <strong>Bhagavad Gita Odia</strong> app as a Free app. This SERVICE is provided by Mukesh Jena at no cost and is intended for use as is.
        </p>

        <p>
          This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8">
          Information Collection and Use
        </h2>
        
        <p>
          The <strong>Bhagavad Gita Odia</strong> application operates completely offline and is designed to respect your privacy. <strong>We do not collect, store, transmit, or share any personal information or user data.</strong> 
        </p>
        
        <p>
          Because the app functions offline, it does not connect to the internet to upload your reading progress, bookmarks, or any personal details to our servers. All data related to your usage of the app remains locally on your device.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8">
          Log Data
        </h2>
        <p>
          Since the app is fully offline and does not communicate with external servers, we do not collect any Log Data (such as your device Internet Protocol ("IP") address, device name, operating system version, or the time and date of your use of the Service).
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8">
          Cookies
        </h2>
        <p>
          This Service does not use "cookies" explicitly.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8">
          Service Providers
        </h2>
        <p>
          We do not employ third-party companies and individuals since the app operates independently on your device without the need for external services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8">
          Children's Privacy
        </h2>
        <p>
          These Services do not address anyone under the age of 13 specifically, but the content (religious text) is safe for all ages. We do not knowingly collect personally identifiable information from children under 13, as we do not collect personal information from any user.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8">
          Changes to This Privacy Policy
        </h2>
        <p>
          I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page.
        </p>

        <p>This policy is effective as of {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.</p>

        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8">
          Contact Us
        </h2>
        <p>
          If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at mukeshjena@example.com (please update with your real email).
        </p>
      </div>
    </div>
  );
};

export default BhagavadGitaOdiaPrivacyPolicy;
