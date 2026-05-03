export const CustomConsentWindows = ({ platform }) => (
  <>
    <Warning>
      <strong>Subject to Bright SDK approval</strong>, you can create and use your own consent screen with Bright SDK. Please follow the following guidelines.
    </Warning>

    <p>This is what it looks like on the default Bright SDK screen:</p>

    <img
      src="/snippets/image/default_consent_screen.png"
      alt="Alt text"
      width="400"
    />

    <p><strong>Design Requirements:</strong></p>

    <p>Your custom consent screen must comply with the following requirements:</p>

    <ol>
      <li><strong>Mandatory Text -</strong> Your screen must include the following text exactly as written:</li>
    </ol>

    <pre><code className="language-markdown">{`" To [Benefit to user], please allow Web Indexing by Bright Data to use your device's free resources and IP address to download public web data from the Internet.

Bright Data values your trust and takes every measure possible to protect your privacy and personal data.

Bright Data understands the security matters at stake in sharing your IP address and monitors all of its network traffic to ensure your safety.

Bright Data will only use your IP address for approved business-related use cases and never for unauthorized cases.

None of your personal information is accessed or collected except your IP address."`}</code></pre>

    <ol start="2">
      <li><strong>Additional Required Text</strong></li>
    </ol>

    <pre><code className="language-markdown">{`"Learn more about web indexing by Bright Data
Learn more about Bright Data’s Privacy Policy
Bright Data runs in the background even after closing the application.
Updates will be automatically downloaded by your device from time to time and will be subject to the EULA (End User Level Agreement)"`}</code></pre>

    <ol start="3">
      <li><strong>Interactive Popups -</strong> Clicking on "<em>will only use</em>" → Opens popup:</li>
    </ol>

    <pre><code className="language-markdown">{`"Your IP address WILL be used for cases such as: 
Support academic research 
Help brands track sites selling fake products 
Collect public web data like product prices and reviews 
Aggregate travel information like flights and hotel prices "`}</code></pre>

    <p>Example:</p>

    <img
      src="/snippets/image/custom-consent-windows-1.png"
      alt="Alt text"
      width="400"
    />

    <p>Clicking on "never" → Opens popup:</p>

    <pre><code className="language-markdown">{`"Your IP address will NEVER be misused: 

Never to steal, encrypt, or delete sensitive data 
Never to alter or hijack core computing functions 
Never to monitor users' computer activity 
Never to access illegal sites (dark web, porn, etc.) 
Never to perform DDOS attacks "`}</code></pre>

    <p>Example:</p>

    <img
      src="/snippets/image/custom-consent-windows-2.png"
      alt="Alt text"
      width="400"
    />

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
          src="/snippets/image/custom-consent-windows-3.png"
          alt="Alt text"
          width="400"
        />
        <br />
        <img
          src="/snippets/image/custom-consent-windows-4.png"
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
