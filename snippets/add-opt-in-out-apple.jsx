export const OptInOut = ({ platform }) => (
  <>
    <Danger>
      The user must always be able to opt out of Bright SDK after giving their initial consent.
    </Danger>

    <p>Your app must include a settings option allowing users to opt in or out at any time. This is typically placed in a Settings menu.</p>

    <p><strong><u>Requirements:</u></strong></p>
    <ul>
      <li>Add a toggle/switch labeled "Web Indexing" that clearly reflects the current status (opted in or out).</li>
      <li>Below the switch, add text emphasizing the value users receive when opting in. (<a href="#add-opt-in%2Fout-settings-option:~:text=Value%20text%20suggestions">see examples</a>)</li>
      
      <li>Include a "Learn more" link that opens: <a href="https://bright-sdk.com/users#learn-more-about-bright-sdk-web-indexing">https://bright-sdk.com/users#learn-more-about-bright-sdk-web-indexing</a>.</li>
    </ul>
    <Note>
  Every time the user toggles Web Indexing <strong>ON</strong>, the consent screen must reappear — regardless of any previous opt-in.
</Note>

    {platform === "ios" && (
      <>
        <p><strong><u>Implementation:</u></strong></p>
        <ul>
          <li>Use <code>get_choice()</code> to get the current status for the switch/checkbox.</li>
          <li>When the user disables the switch → call <code>opt_out()</code>.</li>
          <li>When the user enables the switch → call <code>show_consent()</code> (the user must actively opt in through the consent screen).</li>
          <li>Use the <code>on_choice_change</code> callback to keep the UI automatically updated.</li>
        </ul>

            <Note>
      There is no way to directly opt in. Only the user can decide. You must show the consent screen — opt-in happens automatically only if the user agrees.
    </Note>

    <p><strong><u>Examples of opted-in and opted-out scenarios:</u></strong></p>

    <Columns cols={2}>
      <Card img="/_mintlify/image/brightdatasdk/images/snippets/opt-in-out-iphone-1.png" style={{ width: "25%", borderRadius: "8px" }}></Card>
      <Card img="/_mintlify/image/brightdatasdk/images/snippets/opt-in-out-iphone-2.png" style={{ width: "25%", borderRadius: "8px" }}></Card>
      <Card img="/_mintlify/image/brightdatasdk/images/snippets/opt-in-out-iphone-3.png" style={{ width: "25%", borderRadius: "8px" }}></Card>
      <Card img="/_mintlify/image/brightdatasdk/images/snippets/opt-in-out-iphone-4.png" style={{ width: "25%", borderRadius: "8px" }}></Card>
    </Columns>

    <p><strong><u>Value text suggestions:</u></strong></p>
    <table>
      <thead>
        <tr><th>State</th><th>Example text</th></tr>
      </thead>
      <tbody>
        <tr><td><code>Opted out</code></td><td>"Enable to see fewer ads"</td></tr>
        <tr><td><code>Opted out</code></td><td>"Enable to get 100 extra coins"</td></tr>
        <tr><td><code>Opted out</code></td><td>"Enable to enjoy premium features"</td></tr>
        <tr><td><code>Opted in</code></td><td>"When enabled you see fewer ads"</td></tr>
        <tr><td><code>Opted in</code></td><td>"When enabled you get 100 extra coins"</td></tr>
      </tbody>
    </table>

    <p><strong><u>Common mistakes to avoid:</u></strong></p>
    <table>
      <thead>
        <tr>
          <th>Issue</th>
          <th>Guidance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Label reads "Bright" or "Bright SDK"</td>
          <td>Label must read "Web Indexing"</td>
        </tr>
        <tr>
          <td>No value text</td>
          <td>Always include text describing what the user gains</td>
        </tr>
        <tr>
          <td>No "Learn more" link</td>
          <td>Required — must link to the URL above</td>
        </tr>
        <tr>
          <td>Switch doesn't reflect current state</td>
          <td>Switch must always show the true current status</td>
        </tr>
      </tbody>
    </table>

    <p><strong><u>You may add pop-up/confirmation dialogs to:</u></strong></p>
    <ul>
      <li><strong>Discourage opt-out:</strong> "If you disable Web Indexing, you will start seeing ads. Do you want to see ads?"</li>
      <li><strong>Confirm opt-out:</strong> "You have successfully disabled Web Indexing. You may enable it again anytime from the settings menu."</li>
    </ul>

    <Info>
      You are responsible for the text and design. These will be reviewed before publishing.
    </Info>

    <p><strong><u>Opt-Out Messages examples:</u></strong></p>
    <Columns cols={2}>
      <Card img="/_mintlify/image/brightdatasdk/images/snippets/opt-in-out-iphone-5.png" style={{ width: "25%", borderRadius: "8px" }}></Card>
      <Card img="/_mintlify/image/brightdatasdk/images/snippets/opt-in-out-iphone-6.png" style={{ width: "25%", borderRadius: "8px" }}></Card>
    </Columns>
      </>
    )}

    {platform === "macos" && (
      <>
        <p><strong><u>Implementation:</u></strong></p>
        <ul><li>Set the initial checkbox state based on the current SDK choice:</li></ul>
        <pre><code>{`bright_sdk_checkbox.state = (sdk?.choice == .peer) ? .on : .off`}</code></pre>
        <ul><li>Add control logic for the checkbox:</li></ul>
        <pre><code>{`@IBOutlet weak var bright_sdk_checkbox: NSButton!

@IBAction func bright_sdk_checkbox_action(_ sender: NSButton) {
    if bright_sdk_checkbox.state == NSControl.StateValue.off {
        bright_sdk_checkbox.state = .off
        sdk?.opt_out()
    } else {
        bright_sdk_checkbox.state = .on
        show_bright_sdk()
    }
}`}</code></pre>

            <Note>
      There is no way to directly opt in. Only the user can decide. You must show the consent screen — opt-in happens automatically only if the user agrees.
    </Note>

    <p><strong><u>Examples of opted-in and opted-out scenarios:</u></strong></p>

    <Columns cols={2}>
      <Card img="/_mintlify/image/brightdatasdk/images/snippets/opt-in-out-windows-1.png" style={{ width: "25%", borderRadius: "8px" }}></Card>
      <Card img="/_mintlify/image/brightdatasdk/images/snippets/opt-in-out-windows-2.png" style={{ width: "25%", borderRadius: "8px" }}></Card>
      <Card img="/_mintlify/image/brightdatasdk/images/snippets/opt-in-out-windows-3.png" style={{ width: "25%", borderRadius: "8px" }}></Card>
      <Card img="/_mintlify/image/brightdatasdk/images/snippets/opt-in-out-windows-4.png" style={{ width: "25%", borderRadius: "8px" }}></Card>
    </Columns>

    <p><strong><u>Value text suggestions:</u></strong></p>
    <table>
      <thead>
        <tr><th>State</th><th>Example text</th></tr>
      </thead>
      <tbody>
        <tr><td><code>Opted out</code></td><td>"Enable to see fewer ads"</td></tr>
        <tr><td><code>Opted out</code></td><td>"Enable to get 100 extra coins"</td></tr>
        <tr><td><code>Opted out</code></td><td>"Enable to enjoy premium features"</td></tr>
        <tr><td><code>Opted in</code></td><td>"When enabled you see fewer ads"</td></tr>
        <tr><td><code>Opted in</code></td><td>"When enabled you get 100 extra coins"</td></tr>
      </tbody>
    </table>
        
    <p><strong><u>Common mistakes to avoid:</u></strong></p>
    <table>
      <thead>
        <tr>
          <th>Issue</th>
          <th>Guidance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Label reads "Bright" or "Bright SDK"</td>
          <td>Label must read "Web Indexing"</td>
        </tr>
        <tr>
          <td>No value text</td>
          <td>Always include text describing what the user gains</td>
        </tr>
        <tr>
          <td>No "Learn more" link</td>
          <td>Required — must link to the URL above</td>
        </tr>
        <tr>
          <td>Switch doesn't reflect current state</td>
          <td>Switch must always show the true current status</td>
        </tr>
      </tbody>
    </table>

    <p><strong><u>You may add pop-up/confirmation dialogs to:</u></strong></p>
    <ul>
      <li><strong>Discourage opt-out:</strong> "If you disable Web Indexing, you will start seeing ads. Do you want to see ads?"</li>
      <li><strong>Confirm opt-out:</strong> "You have successfully disabled Web Indexing. You may enable it again anytime from the settings menu."</li>
    </ul>

    <Info>
      You are responsible for the text and design. These will be reviewed before publishing.
    </Info>

    <p><strong><u>Opt-Out Messages examples:</u></strong></p>
    <Columns cols={2}>
      <Card img="/_mintlify/image/brightdatasdk/images/snippets/opt-in-out-windows-5.png" style={{ width: "25%", borderRadius: "8px" }}></Card>
      <Card img="/_mintlify/image/brightdatasdk/images/snippets/opt-in-out-windows-6.png" style={{ width: "25%", borderRadius: "8px" }}></Card>
    </Columns>
      </>
    )}
  </>
);
