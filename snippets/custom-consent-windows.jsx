export const CustomConsentWin = ({ platform }) => (
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

    <ul>
      <li><strong>Mandatory Text -</strong> Your screen must include the following text exactly as written:</li>
    </ul>

    <pre><code className="language-markdown">{`To Get [Benefit to user], please allow Web Indexing by [Bright Data] to use your device's free resources and IP address to download public web data from the Internet while you are using the app.
    
None of your personal information is collected, except your IP address. Bright Data does not track you.

Bright Data will only use your IP address for approved business-related [use cases] and never for unauthorized cases.

You may opt out any time by going to settings and switching off "Web Indexing".

Read Bright Data's [Privacy Policy] and [End User License Agreement].`}</code></pre>

    <Note>
      <strong>Important:</strong> "<a href="https://bright-sdk.com/users#learn-more-about-bright-sdk-web-indexing">Learn more</a>", "<a href="https://bright-sdk.com/privacy-policy">Privacy Policy</a>", "<a href="https://bright-sdk.com/eula">EULA (End User Level Agreement)</a>", and "<a href="https://bright-sdk.com/ethical-usage-of-residential-proxies">use cases</a>" should redirect to the relevant links.
    </Note>

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
