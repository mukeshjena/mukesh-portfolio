import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const VexFastPrivacyBrowserPrivacyPolicy = () => {
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
              Vex Fast Privacy Browser Privacy Policy
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              Last updated: December 15, 2025
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  1. Introduction
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Welcome to Vex Fast Privacy Browser. We are committed to protecting 
                  your privacy and ensuring you have a positive, secure browsing experience. Vex Fast Privacy 
                  Browser is an ultra-lightweight, privacy-focused mobile browser built for Android 
                  devices.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  This Privacy Policy explains how we handle your information when you use Vex Fast Privacy 
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
                  Vex Fast Privacy Browser is designed with privacy as a core principle. All data generated 
                  and used by the application is stored exclusively on your device and never 
                  transmitted to our servers or any third-party services for tracking purposes.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  We believe that your browsing data belongs to you and should remain on your 
                  device. This means we cannot access your bookmarks, browsing history, downloads, 
                  or any other personal data stored by the app.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  <strong>Data We Do NOT Collect:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>Personal identification information (name, email, phone number, etc.)</li>
                  <li>Device identifiers (advertising IDs, device IDs, etc.)</li>
                  <li>Usage analytics or behavior tracking</li>
                  <li>Crash reports or error logs (unless you explicitly report them)</li>
                  <li>Payment or financial information</li>
                  <li>Contact lists or address books</li>
                  <li>Photos, videos, or other media files (except when you explicitly download them)</li>
                  <li>Biometric data (fingerprints, face data, etc.) - processed only by your device's secure hardware</li>
                  <li>Audio recordings (voice search is processed locally and not stored)</li>
                  <li>Any data for advertising or marketing purposes</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We have no servers, no analytics, no tracking, and no data collection infrastructure. 
                  Your privacy is protected by design.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  3. Information Stored Locally on Your Device
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Vex Fast Privacy Browser stores the following data locally on your device using secure local 
                  storage (Hive database and SharedPreferences):
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li><strong>Bookmarks:</strong> Websites you save for quick access, including URLs and titles</li>
                  <li><strong>Browsing History:</strong> URLs you visit, page titles, and timestamps (stored locally only)</li>
                  <li><strong>Search History:</strong> Search queries you enter in the search bar for quick access</li>
                  <li><strong>Open Tabs:</strong> Your current browsing sessions, including URLs and page states</li>
                  <li><strong>Downloads:</strong> Information about files you download, including file names, URLs, download status, and file paths</li>
                  <li><strong>App Settings:</strong> Your preferences including theme (light/dark mode), search engine selection, ad-block settings, biometric lock preferences, and other customization options</li>
                  <li><strong>Cache Data:</strong> Temporary files, images, and web content cached to improve performance and enable offline browsing</li>
                  <li><strong>Ad-Block Filters:</strong> Filter rules downloaded from EasyList for blocking advertisements and tracking scripts</li>
                  <li><strong>Quick Links:</strong> Frequently visited or pinned websites for quick access</li>
                  <li><strong>Reader Mode Preferences:</strong> Settings for the reader mode feature</li>
                  <li><strong>Last Known Location:</strong> If you use the weather feature, your last known GPS coordinates may be cached locally to avoid repeated location requests. This data never leaves your device.</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  <strong>Biometric Data:</strong> If you enable the biometric app lock feature, 
                  authentication is handled entirely by your device's secure hardware. Vex Fast Privacy Browser 
                  does not store, access, or transmit any biometric data (fingerprints, face data, etc.). 
                  All biometric processing occurs on your device using Android's secure biometric API, 
                  and we have no access to this information.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Important:</strong> All of this data remains on your device and is never 
                  transmitted to us or any third parties. You can delete any or all of this data 
                  at any time through the app settings (clear browsing history, delete bookmarks, 
                  clear cache, etc.) or by uninstalling the application, which removes all locally 
                  stored data.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  4. Third-Party Services and APIs
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Vex Fast Privacy Browser uses third-party APIs to provide discovery features. These services 
                  are used only for fetching content and do not involve transmitting your personal 
                  information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li><strong>GNews API (gnews.io):</strong> Provides news headlines and articles for the news feed feature. We do not send any personal information, device identifiers, or user data to GNews. Only search queries (if you search for news) are sent, and these are not linked to your identity.</li>
                  <li><strong>Unsplash API (unsplash.com):</strong> Provides images for the discovery panel and image search feature. No personal data, device identifiers, or user information is shared with Unsplash. API requests may include search terms if you search for images, but these are not associated with your identity.</li>
                  <li><strong>TheMealDB API (themealdb.com):</strong> Provides recipe information for the recipes discovery feature. This is a public API that does not require authentication or receive personal information. Only recipe search queries may be sent, which are not linked to your identity.</li>
                  <li><strong>Open-Meteo API (open-meteo.com):</strong> Provides weather forecast data. If you grant location permission and use the weather feature, only your device's GPS coordinates are sent to fetch weather data. This location data is not stored by Open-Meteo or by us, and is only used for the specific weather request. No other personal information is transmitted.</li>
                  <li><strong>EasyList Filter Lists:</strong> Vex Fast Privacy Browser downloads ad-blocking filter lists from EasyList (easylist-downloads.adblockplus.org) and related sources. These are publicly available filter rules used to block advertisements and tracking scripts. No personal information is sent when downloading these filter lists.</li>
                  <li><strong>Search Engines:</strong> When you perform a search using Vex Fast Privacy Browser, your search query is sent to your selected search engine (Google, Bing, or DuckDuckGo) according to their privacy policies. We do not modify, intercept, or store your search queries. The search engine you choose will handle your queries according to their own privacy policies.</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  <strong>Important:</strong> We do not share, sell, or transmit your personal information 
                  to any of these third-party services. API requests are made directly from your device 
                  to these services, and we have no control over their data collection practices. We 
                  recommend reviewing the privacy policies of these services if you have concerns.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  When you browse websites using Vex Fast Privacy Browser, those websites may collect 
                  information according to their own privacy policies. We are not responsible for 
                  the privacy practices of external websites you visit. Our ad-blocking feature helps 
                  protect your privacy by blocking many tracking scripts, but websites may still 
                  collect information through other means.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  5. Location Data
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Vex Fast Privacy Browser requests location permission only if you choose to use the weather 
                  feature. Location data is handled as follows:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>Location permission is <strong>optional</strong> and only requested when you access the weather feature</li>
                  <li>If granted, your device's GPS coordinates (latitude and longitude) are sent to Open-Meteo API to fetch weather forecasts for your location</li>
                  <li>Your location is <strong>not stored</strong> on our servers or transmitted to any other service</li>
                  <li>The last known location may be cached locally on your device to avoid repeated GPS requests, but this cached data never leaves your device</li>
                  <li>Location data is only used for the specific weather request you make - we do not continuously track your location</li>
                  <li>You can revoke location permission at any time through your device settings</li>
                  <li>If you deny location permission, you can still manually enter a location for weather forecasts</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>We do not track your location for advertising, analytics, or any other 
                  purpose beyond providing weather forecasts when you request them.</strong> Location 
                  data is only accessed when you explicitly use the weather feature and is not used 
                  for any other purpose.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  6. Android Permissions
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Vex Fast Privacy Browser requires the following Android permissions to provide its features:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li><strong>INTERNET:</strong> Required for web browsing and fetching content from websites. This is essential for the browser to function.</li>
                  <li><strong>ACCESS_NETWORK_STATE:</strong> Used to check network connectivity status. This helps the app inform you when you're offline and optimize network usage.</li>
                  <li><strong>ACCESS_FINE_LOCATION / ACCESS_COARSE_LOCATION:</strong> Optional permissions requested only when you choose to use the weather feature. Location data is used solely to fetch weather forecasts and is not stored or transmitted to any third parties except Open-Meteo API for weather data. You can deny these permissions and still use all other features of the app.</li>
                  <li><strong>WRITE_EXTERNAL_STORAGE / READ_EXTERNAL_STORAGE:</strong> Required for downloading files to your device and opening files from external storage (Android versions below 13). These permissions allow you to save files from the internet to your device's storage and open downloaded files.</li>
                  <li><strong>READ_MEDIA_IMAGES / READ_MEDIA_VIDEO / READ_MEDIA_AUDIO:</strong> Required for opening image, video, and audio files from public storage on Android 13 and above. These permissions are requested at runtime when you attempt to open media files. The app does not access your media files without your explicit action.</li>
                  <li><strong>POST_NOTIFICATIONS:</strong> Required for displaying download progress notifications on Android 13 and above. This allows you to track file downloads in the background.</li>
                  <li><strong>USE_BIOMETRIC / USE_FINGERPRINT:</strong> Optional permissions used for the biometric app lock feature. If you enable fingerprint lock, these permissions allow the app to authenticate using your device's biometric authentication system. Biometric data is processed entirely by your device's secure hardware and is never accessed, stored, or transmitted by Vex Fast Privacy Browser.</li>
                  <li><strong>CAMERA:</strong> Optional permission requested only when you use the QR code scanner feature. The camera is used solely to scan QR codes for quick URL access. No images or video are captured, stored, or transmitted. Camera access is only active when the QR scanner is open.</li>
                  <li><strong>RECORD_AUDIO:</strong> Optional permission requested only when you use the voice search feature. Audio is processed locally on your device using Android's speech-to-text service and is not recorded, stored, or transmitted. Audio processing only occurs when you actively use voice search.</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  All permissions are used solely for their stated purposes and are not used for 
                  tracking, advertising, or any other purposes beyond the app's core functionality. 
                  You can revoke any permission at any time through your device settings, though 
                  some features may become unavailable if the required permissions are not granted.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  7. Ad-Blocking and Privacy Features
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Vex Fast Privacy Browser includes built-in ad-blocking using EasyList filter lists. This feature:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>Blocks advertisements and tracking scripts on websites you visit</li>
                  <li>Uses filter lists from EasyList, EasyPrivacy, Fanboy's lists, and other trusted sources</li>
                  <li>Is enabled by default to protect your privacy</li>
                  <li>Can be disabled in settings if you prefer</li>
                  <li>Works entirely on your device - no data is sent to us or third parties for ad-blocking</li>
                  <li>Filter lists are downloaded periodically to keep blocking rules up-to-date</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  The ad-blocking feature helps protect your privacy by preventing tracking scripts 
                  and advertisements from loading, but it does not involve any data collection 
                  or transmission on our part. Filter lists are publicly available and downloaded 
                  directly from their sources.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Note:</strong> While ad-blocking significantly improves privacy, it cannot 
                  block all tracking methods. Websites may still use other techniques to collect 
                  information. We recommend being cautious about what information you share on websites.
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
                  <li>Your data is protected by your device's security measures, including device encryption if enabled</li>
                  <li>We use secure local storage (Hive database and SharedPreferences) with encryption support</li>
                  <li>No data is transmitted over the internet except when you explicitly browse websites or use discovery features</li>
                  <li>HTTPS connections are used for all API calls to third-party services to ensure encrypted communication</li>
                  <li>Biometric authentication data is processed by your device's secure hardware and is never accessible to the app</li>
                  <li>Voice search audio is processed locally using Android's speech-to-text service and is not stored or transmitted</li>
                  <li>Camera access is only active when the QR scanner is open and no images are stored</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  However, no method of electronic storage is 100% secure. While we implement 
                  appropriate security measures, we cannot guarantee absolute security of data 
                  stored on your device. We recommend keeping your device updated with the latest 
                  security patches and using device-level security features like screen locks and 
                  encryption.
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
                  <li><strong>Access:</strong> All your data is accessible through the app interface (bookmarks, history, search history, downloads, settings)</li>
                  <li><strong>Delete:</strong> You can delete bookmarks, clear browsing history, clear search history, remove downloads, clear cache, and reset app settings at any time through the app's settings menu</li>
                  <li><strong>Export:</strong> You can manually export bookmarks or other data if needed (though export features may vary)</li>
                  <li><strong>Uninstall:</strong> Uninstalling the app removes all locally stored data, including bookmarks, history, downloads, and settings</li>
                  <li><strong>Permissions:</strong> You can revoke any Android permissions at any time through your device settings. Some features may become unavailable if required permissions are revoked</li>
                  <li><strong>Biometric Lock:</strong> You can enable or disable the biometric app lock feature at any time in settings</li>
                  <li><strong>Ad-Blocking:</strong> You can enable or disable ad-blocking at any time in settings</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  You are not required to provide any personal information to use Vex Fast Privacy Browser, 
                  and you can use the app without creating any accounts or profiles. All features 
                  are available without registration or login.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  If you have questions about your data or wish to exercise any of these rights, 
                  please contact us using the information provided in the "Contact Us" section below.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  10. Children's Privacy
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Vex Fast Privacy Browser does not knowingly collect personal information from children under 
                  the age of 13 (or the applicable age in your jurisdiction). Since we do not collect 
                  any personal information from anyone, this policy applies to all users regardless 
                  of age.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  However, parents and guardians should be aware that:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>Children may access websites through the browser, and those websites may have their own privacy policies and data collection practices</li>
                  <li>We recommend supervising children's use of the internet and educating them about online privacy and safety</li>
                  <li>Parents can use device-level parental controls and the app's biometric lock feature to restrict access</li>
                  <li>All data stored by the app (bookmarks, history, etc.) is stored locally on the device and can be cleared at any time</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  If you are a parent or guardian and believe your child has provided us with personal 
                  information, please contact us immediately. We will take steps to address your 
                  concerns, though since we do not collect personal information, this is unlikely 
                  to be an issue.
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

export default VexFastPrivacyBrowserPrivacyPolicy;