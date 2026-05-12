export const UpdateSDK = ({ platform }) => (
  <>
    <h3>Updating in an Xcode Project</h3>
    <ol>
      <li>Replace <code>brdsdk.xcframework</code> in its current location (e.g., <code>&lt;MyProject&gt;/Libraries</code>).</li>
      <li>Clean the build folder: Product → Clean Build Folder in Xcode.</li>
    </ol>
    <img src="/snippets/image/update_SDK_iOS_1.png" alt="Alt text" width="400" />
    <p>If cleaning doesn't help, clear <code>DerivedData</code>...</p>

    {platform === "ios" && (
      <>
        <h3>Updating in a Unity Project</h3>
        <ol>
          <li>Remove the existing <code>brdsdk.unitypackage</code> asset from Unity Editor.</li>
        </ol>
        <img src="/snippets/image/update_SDK_iOS_2.png" alt="Alt text" width="400" />
        <p>Re-import the new package following Step 3.5.1.</p>
      </>
    )}
  </>
);