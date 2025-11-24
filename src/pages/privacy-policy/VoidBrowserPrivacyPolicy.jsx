import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const VoidBrowserPrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-dark-100 text-gray-900 dark:text-white">
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Privacy Policy Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-dark-200 rounded-lg p-8 md:p-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Void Browser Privacy Policy
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  1. Introduction
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Welcome to Void Browser. We are committed to protecting 
                  your privacy and ensuring you have a positive, secure browsing experience. Void 
                  Browser is an ultra-lightweight, privacy-focused mobile browser built for Android 
                  devices.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  This Privacy Policy explains how we handle your information when you use Void 
                  Browser. Please read this privacy policy carefully. If you do not agree with 
                  the terms of this privacy policy, please do not use the application.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  2. Our Privacy Commitment
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  <strong>We do not collect, store, or transmit any personal information.</strong> 
                  Void Browser is designed with privacy as a core principle. All data generated 
                  and used by the application is stored exclusively on your device and never 
                  transmitted to our servers or any third-party services for tracking purposes.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We believe that your browsing data belongs to you and should remain on your 
                  device. This means we cannot access your bookmarks, browsing history, downloads, 
                  or any other personal data stored by the app.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  3. Information Stored Locally on Your Device
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Void Browser stores the following data locally on your device using secure local 
                  storage (Hive database):
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li><strong>Bookmarks:</strong> Websites you save for quick access</li>
                  <li><strong>Browsing History:</strong> URLs you visit (stored locally only)</li>
                  <li><strong>Open Tabs:</strong> Your current browsing sessions</li>
                  <li><strong>Downloads:</strong> Information about files you download</li>
                  <li><strong>App Settings:</strong> Your preferences (theme, search engine, ad-block settings, etc.)</li>
                  <li><strong>Cache Data:</strong> Temporary files to improve performance and enable offline browsing</li>
                  <li><strong>Ad-Block Filters:</strong> Filter rules for blocking advertisements</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Important:</strong> All of this data remains on your device and is never 
                  transmitted to us or any third parties. You can delete any or all of this data 
                  at any time through the app settings or by uninstalling the application.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  4. Third-Party Services and APIs
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Void Browser uses third-party APIs to provide discovery features. These services 
                  are used only for fetching content and do not involve transmitting your personal 
                  information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li><strong>News API:</strong> Provides news headlines and articles for the news feed feature. We do not send any personal information to NewsAPI.org.</li>
                  <li><strong>Unsplash API:</strong> Provides images for the discovery panel. No personal data is shared with Unsplash.</li>
                  <li><strong>TheMealDB:</strong> Provides recipe information. This is a public API that does not require or receive personal information.</li>
                  <li><strong>Open-Meteo:</strong> Provides weather forecast data. Only location coordinates (if you grant permission) are sent, and this data is not stored by Open-Meteo or us.</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  When you browse websites using Void Browser, those websites may collect 
                  information according to their own privacy policies. We are not responsible for 
                  the privacy practices of external websites you visit.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  5. Location Data
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Void Browser requests location permission only if you choose to use the weather 
                  feature. Location data is handled as follows:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>Location permission is <strong>optional</strong> and only requested when you access the weather feature</li>
                  <li>If granted, your device's GPS coordinates are sent to Open-Meteo API to fetch weather forecasts</li>
                  <li>Your location is <strong>not stored</strong> on our servers or transmitted to any other service</li>
                  <li>The last known location may be cached locally on your device to avoid repeated GPS requests, but this data never leaves your device</li>
                  <li>You can revoke location permission at any time through your device settings</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>We do not track your location for advertising, analytics, or any other 
                  purpose beyond providing weather forecasts when you request them.</strong>
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  6. Android Permissions
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Void Browser requires the following Android permissions:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li><strong>INTERNET:</strong> Required for web browsing and fetching content from websites. This is essential for the browser to function.</li>
                  <li><strong>ACCESS_FINE_LOCATION:</strong> Optional permission requested only when you use the weather feature. You can deny this permission and still use all other features of the app.</li>
                  <li><strong>WRITE_EXTERNAL_STORAGE:</strong> Required for downloading files to your device. This allows you to save files from the internet to your device's storage.</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  All permissions are used solely for their stated purposes and are not used for 
                  tracking, advertising, or any other purposes beyond the app's core functionality.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  7. Ad-Blocking and Privacy Features
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Void Browser includes built-in ad-blocking using EasyList filters. This feature:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>Blocks advertisements and tracking scripts on websites you visit</li>
                  <li>Is enabled by default to protect your privacy</li>
                  <li>Can be disabled in settings if you prefer</li>
                  <li>Works entirely on your device - no data is sent to us or third parties for ad-blocking</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  The ad-blocking feature helps protect your privacy by preventing tracking scripts 
                  and advertisements from loading, but it does not involve any data collection 
                  or transmission on our part.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  8. Data Security
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Since all data is stored locally on your device:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>Your data is protected by your device's security measures</li>
                  <li>We use secure local storage (Hive database) with encryption support</li>
                  <li>No data is transmitted over the internet except when you explicitly browse websites or use discovery features</li>
                  <li>HTTPS connections are used for all API calls to third-party services</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  However, no method of electronic storage is 100% secure. While we implement 
                  appropriate security measures, we cannot guarantee absolute security of data 
                  stored on your device.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  9. Your Rights and Data Control
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Since all your data is stored locally on your device, you have complete control:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li><strong>Access:</strong> All your data is accessible through the app interface (bookmarks, history, downloads, settings)</li>
                  <li><strong>Delete:</strong> You can delete bookmarks, clear browsing history, remove downloads, and reset app settings at any time</li>
                  <li><strong>Export:</strong> You can manually export bookmarks or other data if needed</li>
                  <li><strong>Uninstall:</strong> Uninstalling the app removes all locally stored data</li>
                  <li><strong>Permissions:</strong> You can revoke any Android permissions at any time through your device settings</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  You are not required to provide any personal information to use Void Browser, 
                  and you can use the app without creating any accounts or profiles.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  10. Children's Privacy
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Void Browser does not knowingly collect personal information from children under 
                  the age of 13. Since we do not collect any personal information from anyone, 
                  this policy applies to all users regardless of age. Parents and guardians 
                  should be aware that children may access websites through the browser, and 
                  those websites may have their own privacy policies and data collection practices.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  11. Changes to This Privacy Policy
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We may update our Privacy Policy from time to time. We will notify you of any 
                  changes by:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>Posting the new Privacy Policy on this page</li>
                  <li>Updating the "Last updated" date at the top of this policy</li>
                  <li>Including a notice in app updates if significant changes are made</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  You are advised to review this Privacy Policy periodically for any changes. 
                  Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  12. Contact Us
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, our privacy practices, or 
                  how we handle your data, please contact us:
                </p>
                <div className="mt-4 p-4 bg-gray-100 dark:bg-dark-300 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Email:</strong> muk3shjena@gmail.com
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    <strong>GitHub:</strong> <a href="https://github.com/mukeshjena/void-browser" className="text-blue-600 dark:text-blue-400 hover:underline">github.com/mukeshjena/void-browser</a>
                  </p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                  We are committed to transparency and will respond to your inquiries promptly.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default VoidBrowserPrivacyPolicy;

