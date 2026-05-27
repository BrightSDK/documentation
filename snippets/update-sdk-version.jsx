export const UpdateSdkVersion = ({ platform }) => (
  <>
    <p>
      When a new version of Bright SDK is released, use the <code>bright-sdk-integration</code> CLI tool to update your SDK files automatically.
    </p>
    <p>
      The tool will download the latest SDK, replace the existing files in your app, and keep your <code>brd_sdk.config.json</code> up to date - without touching your app code.
    </p>

    <Note>
      Make sure to save or commit any uncommitted changes before running the update.
    </Note>

    <AccordionGroup>
      <Accordion title="Option A - Using the Integration Tool (Recommended)">
        <p>
          If you already have a <code>brd_sdk.config.json</code> in your project (generated during the initial integration), run:
        </p>
        <pre><code>bright-sdk-integration /path/to/your/app/brd_sdk.config.json</code></pre>

        <p>Or navigate to your project directory and run non-interactively:</p>
        <pre><code>npm run update</code></pre>

        <p>Or interactively (prompts for any missing values):</p>
        <pre><code>npm run update:interactive</code></pre>

        <p><strong>The tool will:</strong></p>
        <ul>
          <li>Download the latest SDK zip from <code>cdn.bright-sdk.com/static/</code></li>
          <li>Replace <code>brd_api.js</code> and <code>brd_api.helper.js</code> in {platform === 'tizen' ? <code>app/js/</code> : 'your app directory'}</li>
          <li>Replace the <code>service/</code> directory</li>
          <li>Update the version recorded in <code>brd_sdk.config.json</code></li>
        </ul>

        <p>
          <strong>If you don't have a config file yet</strong>, run the tool in interactive mode, and it will generate one for future updates:
        </p>
        <pre><code>{`npx github:BrightSDK/bright-sdk-integration --platform ${platform || 'webos'}`}</code></pre>

        <p>To reset and remove all SDK files and restore a clean state:</p>
        <pre><code>npm run reset</code></pre>
      </Accordion>

      <Accordion title="Option B - Manual Update">
        <p>If you prefer to update manually:</p>

        {platform !== 'tizen' ? (
          <ol>
            <li><strong>Download</strong> the latest Bright SDK zip from the <a href="https://bright-sdk.com/cp/apps">Bright SDK Dashboard</a>.</li>
            <li>
              <strong>Unzip</strong> and replace the following files in your project:
              <ul>
                <li><code>brd_api.js</code> &rarr; copy to your app JS directory</li>
                <li><code>service/</code> &rarr; replace the entire service directory</li>
              </ul>
            </li>
            <li>
              <strong>Update the package.json:</strong> open <code>package.json</code> and set a correct <code>name</code> attribute. Preserve the <code>.brd_sdk</code> postfix at the end. Leave the rest of the attributes untouched in this file.
            </li>
            <li>
              <strong>Update the services.json:</strong> open <code>services.json</code> and set a correct <code>id</code>, <code>services[0].id</code>, and <code>services[0].name</code> attributes. Preserve the <code>.brd_sdk</code> postfix at the end. Leave the rest of the attributes untouched in this file.
            </li>
          </ol>
        ) : (
          <ol>
            <li><strong>Download</strong> the latest Bright SDK zip from the <a href="https://bright-sdk.com/cp/apps">Bright SDK Dashboard</a>.</li>
            <li>Replace <code>brd_api.js</code> with the newer version.</li>
            <li>Delete the <code>service</code> directory and replace it with the newer version.</li>
            <li><strong>Copy Service Folder:</strong> copy <code>sdk/service</code> folder to your project.</li>
            <li>
              <strong>Add Service to config.xml:</strong> Add the following to your <code>config.xml</code>:
              <pre><code>{`...
<tizen:privilege name='http://tizen.org/privilege/alarm'/>
<tizen:service id="brdsample0.Service">
  <tizen:content src="service/service.js"/>
  <tizen:name>WebUIService</tizen:name>
  <tizen:description>WebUIService</tizen:description>
  <tizen:metadata key="meta-key" value="meta-value"/>
  <tizen:category name="http://tizen.org/category/service"/>
</tizen:service>
...`}</code></pre>
              <Note><strong>Important:</strong> Replace <code>brdsample0</code> with your package ID.</Note>
            </li>
          </ol>
        )}
      </Accordion>
    </AccordionGroup>

    {platform === "webos" && (
      <>
        <br />
        <h3>Hosted Web App Considerations</h3>
        <p>
          Important: if your app is a <a href="https://webostv.developer.lge.com/develop/getting-started/web-app-types" target="_blank">Hosted Web App</a> maintain SDK file version consistency across all components.
        </p>
        <p>
          Since <code>brd_api.js</code> is typically hosted on your web server, ensure backward compatibility with previous app versions before submitting to LG.
        </p>
        <p>Example:</p>
        <ul>
          <li><strong>Current version:</strong> <code>www.mywebsite.com/myapp</code> (keep old <code>brd_api.js</code> here).</li>
          <li><strong>Updated version:</strong> <code>www.mywebsite.com/myapp/v2</code> (use new <code>brd_api.js</code>).</li>
        </ul>
        <p>This approach allows older app installations to continue functioning while new versions use the updated SDK.</p>
      </>
    )}
  </>
);
