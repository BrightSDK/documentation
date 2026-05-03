export const SubmitIntegrationReview = ({ platform }) => (
  <>
    <ol>
      <li>
        <strong>Pre-Submission Requirements</strong>
        <p>The Bright Data SDK compliance team will verify:</p>
        <ul>
          <li>SDK integration UX and functionality.</li>
          <li>Consent screen implementation.</li>
          <li>Opt-out mechanism.</li>
          <li>User value proposition.</li>
        </ul>
      </li>
      <li>
        <strong>Submission Process</strong>
        <ol>
          <li>
            <strong>Run Self-Check (takes a few minutes)</strong> — Complete the self-check verification to identify potential issues before submission:
            <ul>
              <li>Navigate to the <a href="https://bright-sdk.com/cp/apps">Bright SDK Dashboard</a> and click your appID.</li>
              <li>Scroll down to "Implementation self-check", click "Get started".</li>
              <li>Install the app on the test device and follow the instructions.</li>
              <li>If the self-check passed successfully, submit it for review!</li>
            </ul>
          </li>
          <li>
            <strong>Submit for review via Dashboard</strong>
            <ul>
              <li>Navigate to the <a href="https://bright-sdk.com/cp/apps">Bright SDK Dashboard</a>.</li>
              <li>Select your app ID.</li>
              <li>Click "Submit for Review".</li>
              <li>Complete the compliance checklist to validate adherence to guidelines.</li>
              <li>Upload your package.</li>
            </ul>
          </li>
          <li>
            <strong>Store submission</strong> — You will be notified by email once your app is approved for release. The app status in the dashboard will also be changed to "Approved".
            
            <p>Guides to help you through the store review:</p>
            <ul>
              <li><a href="https://docs.bright-sdk.com/integration-guides/how-to-upload-apps-to-the-lg-store">LG</a></li>
              <li><a href="https://docs.bright-sdk.com/integration-guides/how-to-upload-apps-to-the-samsung-store">Samsung</a></li>
            </ul>
            
            <p>Review Resources:</p>
            <ul>
              <li>Watch our <a href="https://www.youtube.com/watch?v=kQCmca0FHyw">guided tour video</a> for critical submission tips.</li>
              <li>Review our <a href="https://bright-sdk.com/blog/monetization-optimization/ensuring-excellence-bright-sdks-guidelines-for-excellent-apps">quality standards</a> for faster approval.</li>
            </ul>
          </li>
        </ol>
      </li>
    </ol>

    {platform === "ios" && (
      <>
        <p><strong>For iOS/tvOS — How to submit your build:</strong></p>

        <ul>
          <li>Paste a public link in the "Submit for Review" window on the dashboard, OR</li>
          <li>Send via TestFlight to all 4 addresses below (one invite per address):</li>
        </ul>

        <table>
          <thead>
            <tr>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>sdk@brightdata.com</td>
            </tr>
            <tr>
              <td>sdk+1@brightdata.com</td>
            </tr>
            <tr>
              <td>sdk+2@brightdata.com</td>
            </tr>
            <tr>
              <td>sdkcompliance@brightdata.com</td>
            </tr>
          </tbody>
        </table>
      </>
    )}

    <Info>
      We will review each app up to 3 times. 3 rejections or failure to meet minimum quality standards may result in final rejection.
    </Info>
  </>
);
