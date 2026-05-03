export const UpdateSdkVersion = ({ platform }) => (
  <>
    <p>Download the latest SDK from our website and follow these steps:</p>

    <ol>
      <li>
        <strong>Standard Update Process</strong>
        <ul>
          <li>Replace <code>brd_api.js</code> with the newer version.</li>
          <li>Delete the existing service directory and replace it with the new version.</li>
          {(platform === "webos" || platform === "tizen") && (
            <>
              <li><strong>WebOS:</strong> <a href="https://docs.bright-sdk.com/integration-guides/webos-integration#how-to-update-sdk">see</a>.</li>
              <li><strong>Tizen:</strong> <a href="https://docs.bright-sdk.com/integration-guides/tizen-integration#how-to-update-sdk">see</a>.</li>
            </>
          )}
        </ul>
      </li>
      <li>
        <strong>Hosted Web App Considerations</strong>
        <p>
          Important: if your app is a <a href="https://webostv.developer.lge.com/develop/getting-started/web-app-types">Hosted Web App</a> maintain SDK file version consistency across all components. Since <code>brd_api.js</code> is typically hosted on your web server, ensure backward compatibility with previous app versions before submitting to LG.
        </p>
        <p>Example:</p>
        <ul>
          <li><strong>Current version:</strong> <a href="http://www.mywebsite.com/myapp">www.mywebsite.com/myapp</a> (keep old <code>brd_api.js</code> here).</li>
          <li><strong>Updated version:</strong> <a href="http://www.mywebsite.com/myapp/v2">www.mywebsite.com/myapp/v2</a> (use new <code>brd_api.js</code>).</li>
        </ul>
        <p>This approach allows older app installations to continue functioning while new versions use the updated SDK.</p>
      </li>
    </ol>
  </>
);
