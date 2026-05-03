export const CustomConsentApple = ({ platform }) => (
  <>
    <Warning>
      <strong>Subject to Bright SDK approval.</strong> Please contact Bright SDK before implementing to get pre-approved.
    </Warning>

    <p>This is what it looks like on the default Bright SDK screen:</p>

    {platform === "ios" && (
      <img
        src="/snippets/image/iOS_Custom_Consent_Screen_1.png"
        alt="Alt text"
        width="400"
      />
    )}

    {platform === "macos" && (
      <img
        src="/snippets/image/iOS_Custom_Consent_Screen_2.png"
        alt="Alt text"
        width="400"
      />
    )}

    <p><strong>Design Requirements</strong></p>

    <p>Your custom consent screen must include the following mandatory elements:</p>

    <p><strong>Mandatory text:</strong></p>

    <pre><code className="language-text">{`"To [Benefit to user], please allow Web Indexing by Bright Data to use your device's free resources and IP address to download public web data from the Internet while you are using the app.
None of your personal information is collected, except your IP address. Bright Data does not track you."`}</code></pre>

    <pre><code className="language-text">{`"Read Bright Data's Privacy Policy and End User License Agreement"`}</code></pre>

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
          <td><a href="https://brightdata.com/">https://brightdata.com/</a></td>
        </tr>
        <tr>
          <td>Privacy Policy</td>
          <td><a href="https://bright-sdk.com/privacy-policy">https://bright-sdk.com/privacy-policy</a></td>
        </tr>
        <tr>
          <td>End User License Agreement</td>
          <td><a href="https://bright-sdk.com/eula">https://bright-sdk.com/eula</a></td>
        </tr>
      </tbody>
    </table>

    <p><strong>Interactive element:</strong></p>
    <p>Tapping "public web data" must open a popup with additional information:</p>

    <img
      src="/snippets/image/iOS_Custom_Consent_Screen_3.png"
      alt="Alt text"
      width="400"
    />

    <p><strong>Translations:</strong></p>
    <p>If you wish to translate your screen, use only the <a href="https://docs.google.com/spreadsheets/d/1G0Y1CY9emvfM9qlGC4o7wM-ypWqHbGo5Jxx8rT7DCVs/edit?gid=0#gid=0">provided official translations</a>. Contact your partnership manager for any missing languages.</p>

    <p><strong>For tvOS:</strong></p>
    <p>Replace links with: <em>"Scan the QR Code to learn more about Bright Data policy and ethical usage".</em></p>
    <p>
      Use your own branded QR code or a <a href="https://media.bright-sdk.com/2023/09/qr-bright-sdk-faq.svg">hosted</a> version pointing to:<br />
      <a href="https://bright-sdk.com/users#learn-more-about-bright-sdk-web-indexing">https://bright-sdk.com/users#learn-more-about-bright-sdk-web-indexing</a>
    </p>

    <p><strong>Examples of possible custom consent screens</strong></p>

    <Columns cols={2}>
      <Column>
        <img
          src="/snippets/image/iOS_Custom_Consent_Screen_4.png"
          alt="Alt text"
          width="300"
        />
      </Column>
      <Column>
        <img
          src="/snippets/image/iOS_Custom_Consent_Screen_5.png"
          alt="Alt text"
          width="300"
        />
      </Column>
    </Columns>

    <p><strong>Integration Code</strong></p>

    <ul>
      <li>Pass <code>skip_consent: true</code> in the SDK initializer to prevent the default consent screen from showing.</li>
      <li>The opt-in button (e.g., "I Agree") should call <code>external_opt_in()</code>.</li>
      <li>The opt-out button (e.g., "I Disagree") should call <code>opt_out()</code>.</li>
      <li>After presenting your custom screen, call <code>consent_shown()</code>.</li>
    </ul>
  </>
);
