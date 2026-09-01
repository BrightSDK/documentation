export const CustomConsentWin = ({ platform }) => (
  <>
    <Warning>
      <strong>Subject to Bright SDK approval</strong>, you can create and use your own consent screen with Bright SDK. Please follow the following guidelines.
    </Warning>

    <p>This is what it looks like on the default Bright SDK screen:</p>

    <img
      src="/_mintlify/image/brightdatasdk/images/snippets/default_consent_screen.png"
      alt="Alt text"
      width="400"
    />

    <p><strong>Design Requirements:</strong></p>

    <p>Your custom consent screen must comply with the following requirements:</p>

    <ul>
      <li><strong>Mandatory Text -</strong> Your screen must include the following text exactly as written:</li>
    </ul>

    <pre><code className="language-markdown">{`To [Benefit to user], please allow Web Indexing by Bright Data to use your device's free resources and IP address to download public web data from the Internet. 

Bright Data values your trust and takes every measure possible to protect your privacy and personal data. Bright Data does not track you.

Bright Data understands the security matters at stake in sharing your IP address and monitors all of its network traffic to ensure your safety. 

Bright Data will only use your IP address for approved business-related use cases and never for unauthorized cases. 

None of your personal information is accessed or collected except your IP address.`}</code></pre>

    <ul>
      <li><strong>Additional Required Text:</strong></li>
    </ul>

    <pre><code className="language-markdown">{`Learn more about web indexing by Bright Data

Learn more about Bright Data’s Privacy Policy

Bright Data runs in the background even after closing the application.

Updates will be automatically downloaded by your device from time to time and will be subject to the EULA (End User Level Agreement)`}</code></pre>

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
          <td>Web Indexing</td>
          <td><a href="https://bright-sdk.com/users#learn-more-about-bright-sdk-web-indexing">https://bright-sdk.com/users#learn-more-about-bright-sdk-web-indexing</a></td>
        </tr>
        <tr>
          <td>Bright Data</td>
          <td><a href="https://brightdata.com/">https://brightdata.com/</a></td>
        </tr>
        <tr>
          <td>Privacy Policy</td>
          <td><a href="https://bright-sdk.com/privacy-policy">https://bright-sdk.com/privacy-policy</a></td>
        </tr>
        <tr>
          <td>EULA (End User Level Agreement)</td>
          <td><a href="https://bright-sdk.com/eula">https://bright-sdk.com/eula</a></td>
        </tr>
        <tr>
          <td>Use Cases</td>
          <td><a href="https://bright-sdk.com/ethical-usage-of-residential-proxies">https://bright-sdk.com/ethical-usage-of-residential-proxies</a></td>
        </tr>
      </tbody>
    </table>

    <p><strong>Integration Code:</strong></p>

    {platform === "win" && (
      <>
        <ol>
          <li><strong>Skip Default Consent Screen - </strong>Pass <code>SkipConsent = true</code> in the SDK's initialization method to prevent showing the default consent screen.</li>
          <li><strong>Track Consent Screen Display - </strong>When your external consent screen is displayed, call <code>NotifyShowConsent()</code> method.</li>
          <li><strong>Handle User Response</strong>
            <ul>
              <li>The opt-in button (e.g. "<em>I Agree</em>”) should call <code>ExternalOptIn()</code> method.</li>
              <li>The opt-out button (e.g. "<em>I Disagree</em>”) should call <code>OptOut()</code> method.</li>
            </ul>
          </li>
        </ol>

        <p>Example Custom Screens:</p>

        <img
          src="/_mintlify/image/brightdatasdk/images/snippets/custom-consent-windows-3.png"
          alt="Alt text"
          width="400"
        />
        <br />
        <img
          src="/_mintlify/image/brightdatasdk/images/snippets/custom-consent-windows-4.png"
          alt="Alt text"
          width="400"
        />
      </>
    )}

    {platform === "macos" && (
      <>
        <ul>
          <li>Pass <code>skip_consent: true</code> (or equivalent) in the SDK initializer to prevent the default consent screen from showing.</li>
          <li>The opt-in button (e.g., "I Agree") should call <code>external_opt_in()</code>.</li>
          <li>The opt-out button (e.g., "I Disagree") should call <code>opt_out()</code>.</li>
          <li>After presenting your custom screen, call <code>consent_shown()</code>.</li>
        </ul>
      </>
    )}
  </>
);
