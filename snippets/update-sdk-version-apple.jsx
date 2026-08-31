export const UpdateSDK = ({ platform }) => (
  <>
    <AccordionGroup>
      <Accordion title="Option A - Using the Integration CLI Tool (Recommended)">
        <p>Run the tool with the <code>--update</code> flag. It will automatically fetch and replace <code>brdsdk.xcframework</code> in place without losing your config or consent flow settings:</p>

        <p><strong>iOS:</strong></p>
        <pre><code className="language-bash">{`npx github:BrightSDK/bright-sdk-integration --platform ios --update`}</code></pre>

        <p><strong>tvOS:</strong></p>
        <pre><code className="language-bash">{`npx github:BrightSDK/bright-sdk-integration --platform tvos --update`}</code></pre>
      </Accordion>

      <Accordion title="Option B - Manual">
        <h3>Updating in an Xcode Project</h3>
        <ol>
          <li>Download the latest SDK from the Bright SDK Dashboard and unzip it.</li>
          <li>Replace <code>brdsdk.xcframework</code> in its current location (e.g., <code>&lt;MyProject&gt;/Libraries</code>).</li>
          <li>Clean the build folder: Product → Clean Build Folder in Xcode.</li>
        </ol>
        
        <img src="/_mintlify/image/brightdatasdk/images/snippets/update_SDK_iOS_1.png" alt="Alt text" width="400" />
        <p>If cleaning doesn't help, clear <code>DerivedData</code>...</p>

        {platform === "ios" && (
          <>
            <h3>Updating in a Unity Project</h3>
            <ol>
              <li>Remove the existing <code>brdsdk.unitypackage</code> asset from Unity Editor.</li>
            </ol>
            <img src="/_mintlify/image/brightdatasdk/images/snippets/update_SDK_iOS_2.png" alt="Alt text" width="400" />
            <p>Re-import the new package following <a href="https://docs.bright-sdk.com/integration-guides/ios-tvos#option-b-manual:~:text=Import%20the%20SDK%20Package">Import the SDK Package</a> Step.</p>
          </>
        )}
      </Accordion>
    </AccordionGroup>
  </>
);
