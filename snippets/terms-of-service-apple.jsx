export const tos = ({ platform }) => (
  <>
    <p><strong>App Store Privacy Settings</strong></p>

    <p>Bright SDK does not collect any personal information except the user's IP address. Bright Data knows that a certain IP <em>exists</em> but not who owns it or any other information.</p>

    {platform === "ios" && (
      <>
        <p>Your existing privacy settings may already cover this (e.g., if you have ads in your app). If not, update your App Store privacy settings to include at minimum what Bright Data collects:</p>

        <img
          src="/snippets/image/apple_update_tos_1.png"
          alt="Alt text"
          width="400"
        />
      </>
    )}

    <p><strong>Update Your FAQ and Terms of Service</strong></p>

    <p>Add the following text to your Terms of Service web page (TOS, EULA, or Privacy Policy):</p>

    <p><em>In return for premium features of '[Your App Name]', you may choose to be a peer on the Bright Data network. By doing so, you agree to have read and accepted the <a href="https://bright-sdk.com/eula">Bright SDK EULA</a> and <a href="https://bright-sdk.com/privacy-policy">Bright Data's Privacy Policy</a>.</em></p>

    <p><em>You may opt out of the Bright Data network by [add clear opt-out instructions].</em></p>

    <p><strong>Requirements</strong></p>

    <ul>
      <li>Include all text and links as provided above.</li>
      <li>Any additional Bright SDK-related content must be shared during the app review process for approval.</li>
    </ul>
  </>
);
