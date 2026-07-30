export const CustomConsent = ({ platform }) => (
  <>
    <Warning>
      <strong>Subject to Bright SDK approval.</strong> Please contact Bright SDK before implementing to get pre-approved.
    </Warning>

    <h3>Design Requirements</h3>
    <p>Your custom consent screen must include the following mandatory elements:</p>

    <p><strong>Mandatory text:</strong></p>
    <pre><code className="language-text">{`"{benefit}, please allow web indexing by Bright Data to occasionally use your device’s free resources and IP address to download public web data from the Internet. 

Bright Data values your trust and takes every measure possible to protect your privacy and personal data. 

Bright Data understands the security matters at stake in sharing your IP address and monitors all of its network traffic to ensure your safety. 

Bright Data will only use your IP address for approved business-related use cases and never for unauthorized cases. 

None of your personal information is accessed or collected except your IP address."`}</code></pre>

    <p><strong>Required links:</strong></p>
    <table>
      <thead>
        <tr>
          <th>Text</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bright Data</td>
          <td><a href="https://www.brightdata.com">https://www.brightdata.com</a></td>
        </tr>
        <tr>
          <td>Privacy Policy</td>
          <td><a href="https://bright-sdk.com/privacy-policy">https://bright-sdk.com/privacy-policy</a></td>
        </tr>
        <tr>
          <td>End User License Agreement</td>
          <td><a href="https://bright-sdk.com/EULA">https://bright-sdk.com/EULA</a></td>
        </tr>
        <tr>
          <td>Use Cases</td>
          <td><a href="https://bright-sdk.com/ethical-usage-of-residential-proxies">https://bright-sdk.com/ethical-usage-of-residential-proxies</a></td>
        </tr>
      </tbody>
    </table>

    <p><strong>For Android TV:</strong></p>
    <p>Replace links with:</p>
    
    <pre><code className="language-text">{`Scan the QR Code to learn more about Bright Data policy and ethical usage`}</code></pre>

    <p>Use your own branded QR code or a hosted version pointing to: <a href="https://bright-sdk.com/users#learn-more-about-bright-sdk-web-indexing">https://bright-sdk.com/users#learn-more-about-bright-sdk-web-indexing</a></p>

    <p><strong>Translations:</strong></p>
    <ul>
      <li>If you wish to translate your screen, use only the provided official translations. Contact your partnership manager for any missing languages.</li>
    </ul>

    {platform === "android" && (
      <>
        <h3>Integration Code</h3>
        
        <p><strong>Skip the default consent screen:</strong></p>
        <pre><code>{`Settings settings = new Settings(context);
settings.setSkipConsent(true);`}</code></pre>

        <p><strong>When showing your custom screen, notify the SDK:</strong></p>
        <pre><code>{`BrightApi.reportConsentShown(context);`}</code></pre>

        <p><strong>Opt-in button (e.g., "I Agree"):</strong></p>
        <pre><code>{`BrightApi.externalOptIn(context);`}</code></pre>

        <p><strong>Opt-out button (e.g., "I Disagree"):</strong></p>
        <pre><code>{`BrightApi.optOut(context);`}</code></pre>

        <p><strong>If the user pressed back without making a choice:</strong><br/>
        (Only call this if you allow closing via the back button)</p>
        <pre><code>{`BrightApi.reportConsentBackPress(context);`}</code></pre>

        <Warning>
          If you disable closing the consent screen via the back button, do <strong>not</strong> call <code>reportConsentBackPress</code>.
        </Warning>
      </>
    )}

    {platform === "unity" && (
      <>
        <h3>Integration Code</h3>

        <p><strong>Skip the default consent screen:</strong></p>
        <pre><code>{`// Create a Settings object
AndroidJavaObject settings = new AndroidJavaObject("com.android.eapx.Settings", currentActivity);
// Prevent consent screen from showing automatically
settings.Call("setSkipConsent", true);`}</code></pre>

        <p><strong>When showing your custom screen, notify the SDK:</strong></p>
        <pre><code>{`brightApi.CallStatic("reportConsentShown", currentActivity);`}</code></pre>

        <p><strong>Opt-in button (e.g., "I Agree"):</strong></p>
        <pre><code>{`brightApi.CallStatic("externalOptIn", currentActivity);`}</code></pre>

        <p><strong>Opt-out button (e.g., "I Disagree"):</strong></p>
        <pre><code>{`brightApi.CallStatic("optOut", currentActivity);`}</code></pre>

        <p><strong>If the user pressed back without making a choice:</strong><br/>
        (Only call this if you allow closing via the back button)</p>
        <pre><code>{`brightApi.CallStatic("reportConsentBackPress", currentActivity);`}</code></pre>

        <Warning>
          If you disable closing the consent screen via the back button, do <strong>not</strong> call <code>reportConsentBackPress</code>.
        </Warning>
      </>
    )}

    <p>See below some examples of possible custom consent screens:</p>

    <img src="/snippets/image/android_unity_consent_2.png" alt="Popup example" width="400" />

    <img src="/snippets/image/android_unity_consent_3.png" alt="Popup example" width="400" />

    <img src="/snippets/image/android_unity_consent_4.png" alt="Popup example" width="400" />

    <img src="/snippets/image/android_unity_consent_5.png" alt="Popup example" width="400" />
  </>
);
