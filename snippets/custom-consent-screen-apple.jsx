export const CustomConsentApple = ({ platform }) => (
  <>
    <p>While the standard Bright SDK consent screen is always available, we highly encourage customization to match your app's look & feel, this typically leads to higher conversion rates. There are two customization options:</p>

    <table>
      <thead>
        <tr>
          <th>Option</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Consent Dialog Customization</td>
          <td>Modify the built-in Bright SDK consent screen</td>
        </tr>
        <tr>
          <td>Custom Consent Screen</td>
          <td>Build your own consent UI entirely</td>
        </tr>
      </tbody>
    </table>

    <AccordionGroup>
      {/* OPTION 1: CUSTOM CONSENT SCREEN */}
      <Accordion title="Option 1 - Custom Consent Screen">
        <Warning>
          <strong>Subject to Bright SDK approval.</strong> Please contact Bright SDK before implementing to get pre-approved.
        </Warning>

        {platform === "ios" && (
          <>
            <p>This is what it looks like on the default Bright SDK screen:</p>
            <img
              src="/snippets/image/iOS_Custom_Consent_Screen_1.png"
              alt="Default iOS Screen"
              width="400"
            />
          </>
        )}

        {platform === "macos" && (
          <>
            <p>This is what it looks like on the default Bright SDK screen:</p>
            <img
              src="/snippets/image/iOS_Custom_Consent_Screen_2.png"
              alt="Default MacOS Screen"
              width="400"
            />
          </>
        )}

        <p><strong>Design Requirements</strong></p>
        <p>Your custom consent screen must include the following mandatory elements:</p>

        <p><strong>Mandatory text:</strong></p>

        <pre><code className="language-markdown">{`To Get [Benefit to user], please allow Web Indexing by [Bright Data] to use your device's free resources and IP address to download public web data from the Internet while you are using the app.
        
None of your personal information is collected, except your IP address. Bright Data does not track you.

Bright Data will only use your IP address for approved business-related [use cases] and never for unauthorized cases.

You may opt out any time by going to settings and switching off "Web Indexing".

Read Bright Data's [Privacy Policy] and [End User License Agreement].`}</code></pre>

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
            <tr>
              <td>Use Cases</td>
              <td><a href="https://bright-sdk.com/ethical-usage-of-residential-proxies">https://bright-sdk.com/ethical-usage-of-residential-proxies</a></td>
            </tr>
          </tbody>
        </table>

        <p><strong>Translations:</strong></p>
        <p>If you wish to translate your screen, use only the <a href="https://docs.google.com/spreadsheets/d/1G0Y1CY9emvfM9qlGC4o7wM-ypWqHbGo5Jxx8rT7DCVs/edit?gid=0#gid=0">provided official translations</a>. Contact your partnership manager for any missing languages.</p>

        <p><strong>For tvOS:</strong></p>
        <p>Replace links with: <em>"Scan the QR Code to learn more about Bright Data policy and ethical usage".</em></p>
        <p>
          Use your own branded QR code or a <a href="https://media.bright-sdk.com/2023/09/qr-bright-sdk-faq.svg">hosted</a> version pointing to:<br />
          <a href="https://bright-sdk.com/users#learn-more-about-bright-sdk-web-indexing">https://bright-sdk.com/users#learn-more-about-bright-sdk-web-indexing</a>
        </p>

        <p><strong>Examples of possible custom consent screens:</strong></p>

        <Columns cols={2}>
          <Column>
            <img
              src="/snippets/image/iOS_Custom_Consent_Screen_4.png"
              alt="Custom Consent Example 1"
              width="300"
            />
          </Column>
          <Column>
            <img
              src="/snippets/image/iOS_Custom_Consent_Screen_5.png"
              alt="Custom Consent Example 2"
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

        <p>All customization parameters are available for Xcode-level integration. A subset is available for Unity Editor-level integration via <code>BrdsdkBridge.cs</code>.</p>
        <p>You can customize the consent dialog by passing additional parameters during SDK initialization.</p>

        <p><strong>Flow of Showing the Consent Screen</strong></p>
        <ol>
          <li>Call <code>brd_api.authorizeDevice()</code> - status must be <code>.authorized</code> to proceed</li>
          <li>Present your custom consent screen</li>
          <li>Call <code>brd_api.consent_shown()</code> after the screen is presented to register its display</li>
          <li>Call <code>external_opt_in()</code> on agree, <code>opt_out()</code> on disagree</li>
        </ol>
      </Accordion>

      {/* OPTION 2: CONSENT DIALOG CUSTOMIZATION */}
      <Accordion title="Option 2 - Consent Dialog Customization">
        <p>All customization parameters are available for Xcode-level integration. A subset is available for Unity Editor-level integration via <code>BrdsdkBridge.cs</code>.</p>
        <p>You can customize the consent dialog by passing additional parameters during SDK initialization. The following subsections cover all available customization options.</p>

        <AccordionGroup>
          <Accordion title="Background Images">
            <p>You can set background images for portrait and landscape orientations. Supported scale modes:</p>
            <ul>
              <li><code>ScaleToFill</code> - stretches to fill, may change aspect ratio</li>
              <li><code>ScaleAspectFit</code> - fits within bounds, transparent areas remain</li>
              <li><code>ScaleAspectFill</code> - fills bounds, some content may be clipped</li>
            </ul>
            <p>Landscape image is optional - portrait will be used as fallback.</p>

            <p><strong>Unity:</strong></p>
            <pre><code className="language-csharp">{`ConsentBackgroundImage backgroundImage = new ConsentBackgroundImage();
// By xcasset name (add the image to xcassets in Xcode after export):
backgroundImage.portraitImage = "portrait";
// Or by file path:
backgroundImage.landscapeImage = Path.Combine(Application.dataPath, "Raw/landscape.jpg");
backgroundImage.scaleMode = ConsentBackgroundImage.ScaleMode.ScaleAspectFill;

BrdsdkBridge.init("To support this app", "I Agree", "I disagree",
    "opt-out instructions", appicon, choiceChanged, skip_consent,
    language, colors, backgroundImage, optIn, optOut);`}</code></pre>

            <p><strong>Swift:</strong></p>
            <pre><code className="language-swift">{`let background = ConsentBackgroundImage(portraitName: "portrait", landscapeName: "landscape")

try brd_api(background_image: background, skip_consent: true, campaign: nil) { choice in
    let choice = Choice(rawValue: choice) ?? .none
    self.choice = choice
}`}</code></pre>

            <p><strong>Objective-C:</strong></p>
            <pre><code className="language-objectivec">{`ConsentBackgroundImage *background = [[ConsentBackgroundImage alloc]
    initWithPortraitName:@"portrait"
           landscapeName:@"landscape"
               scaleMode:UIViewContentModeScaleAspectFill
                      in:NSBundle.mainBundle];

(void)[[brd_api alloc] initWithBenefit:NULL agree_btn:NULL disagree_btn:NULL
    opt_out_instructions:@"<OPT-OUT INSTRUCTIONS>"
    appicon:[UIImage imageNamed:@"<YOUR APP ICON NAME>"]
    cwd:NULL sys_app_id:NULL language:NULL colors:NULL
    background_image:background opt_in_info:NULL opt_out_info:NULL
    fonts:NULL skip_consent:YES campaign:NULL error:&error
    on_choice_change:^(NSInteger choice) {
        ViewController *vc = (ViewController *)[application getKeyWindow].rootViewController;
        vc.choice = choice;
    }];`}</code></pre>
          </Accordion>

          <Accordion title="Action Button Images (Opt-In / Opt-Out)">
            <p>Customize the opt-in and opt-out button appearance. For each button you can set:</p>
            <ul>
              <li>A background image (overrides background color if set)</li>
              <li>A text image (overrides button text if set)</li>
              <li>A background color</li>
              <li>A text color</li>
            </ul>

            <p><strong>Unity:</strong></p>
            <pre><code className="language-csharp">{`ConsentActionInfo optIn = new ConsentActionInfo(
    null, null,
    unchecked((Int32)0xffdb8e5a),
    unchecked((Int32)0xff36271d)
);
ConsentActionInfo optOut = new ConsentActionInfo(
    Path.Combine(Application.streamingAssetsPath, "opt_out_bg.png"),
    Path.Combine(Application.streamingAssetsPath, "opt_out_text.png"),
    null, null
);

BrdsdkBridge.init("To support this app", "I Agree", "I disagree",
    "opt-out instructions", appicon, choiceChanged, skip_consent,
    language, colors, backgroundImage, optIn, optOut);`}</code></pre>

            <p><strong>Swift:</strong></p>
            <pre><code className="language-swift">{`let optIn = ConsentActionInfo(backgroundName: "opt_in_bg", textName: "opt_in_text")
let optOut = ConsentActionInfo(backgroundName: "opt_out_bg", textName: "opt_out_text")

try brd_api(opt_in_info: optIn, opt_out_info: optOut, skip_consent: true, campaign: nil) { choice in
    let choice = Choice(rawValue: choice) ?? .none
    self.choice = choice
}`}</code></pre>

            <p><strong>Objective-C:</strong></p>
            <pre><code className="language-objectivec">{`ConsentActionInfo *optIn = [[ConsentActionInfo alloc]
    initWithBackgroundName:@"opt_in_bg" textName:@"opt_in_text" in:NSBundle.mainBundle];
ConsentActionInfo *optOut = [[ConsentActionInfo alloc]
    initWithBackgroundName:@"opt_out_bg" textName:@"opt_out_text" in:NSBundle.mainBundle];`}</code></pre>
          </Accordion>

          <Accordion title="Consent Icon">
            <ul>
              <li><strong>Native SDK:</strong> Pass a <code>UIImage</code> via the <code>appicon</code> parameter in the <code>brd_api</code> initializer.</li>
              <li><strong>Unity:</strong> Pass an image path or its <code>xcassets</code> name via the <code>appicon</code> parameter in <code>BrdsdkBridge.init()</code>.</li>
            </ul>
          </Accordion>

          <Accordion title="Colors">
            <p>Use <code>ColorSettings</code> (Swift/ObjC) or <code>ConsentColors</code> (Unity) to customize consent screen element colors.</p>

            <p><strong>Unity:</strong></p>
            <pre><code className="language-csharp">{`ConsentColors colors = new ConsentColors();
colors.backgroundColor       = unchecked((Int32)0xffEFF0E9);
colors.titleColor            = unchecked((Int32)0xff741313);
colors.consentMessageColor   = unchecked((Int32)0xff50C7C7);
colors.consentLinksColor     = unchecked((Int32)0xff506BC7);
colors.privacyColor          = unchecked((Int32)0xff658582);
colors.privacyLinksColor     = unchecked((Int32)0xff656785);
colors.iconsForegroundColor  = unchecked((Int32)0xff344d70);
colors.iconsBackgroundColor  = unchecked((Int32)0xffe7effa);

BrdsdkBridge.init("To support this app", "I Agree", "I disagree",
    "opt-out instructions", appicon, choiceChanged, skip_consent,
    language, colors, backgroundImage, optIn, optOut);`}</code></pre>

            <p><strong>Swift/Objective-C:</strong> Use the <code>ColorSettings</code> class — see API Documentation for full property list.</p>
          </Accordion>

          <Accordion title="Fonts">
            <p>Use <code>ConsentFontsInfo</code> to override default fonts. You can set fonts for:</p>
            <ul>
              <li>Title text</li>
              <li>Main text</li>
              <li>Under-icons text</li>
              <li>License text</li>
              <li>Buttons text</li>
            </ul>

            <Warning>
              <strong>Warning:</strong> The SDK has limitations for font sizes.
            </Warning>

            <p><strong>Unity:</strong></p>
            <pre><code className="language-csharp">{`ConsentFontsInfo fonts = new ConsentFontsInfo();
string fontPath = Path.Combine(Application.streamingAssetsPath, "CroissantOne-Regular.ttf");
string registeredFontName = "BebasNeue-Regular"; // must be listed in Info.plist

fonts.titleText   = new ConsentFontsInfo.ConsentFont(fontPath, 20);
fonts.mainText    = new ConsentFontsInfo.ConsentFont(fontPath, 16);
fonts.licenseText = new ConsentFontsInfo.ConsentFont(registeredFontName, 14);
fonts.buttonsText = new ConsentFontsInfo.ConsentFont(fontPath, 16);

BrdsdkBridge.init("To support this app", "I Agree", "I disagree",
    "opt-out instructions", appicon, choiceChanged, skip_consent,
    language, colors, backgroundImage, optIn, optOut, fonts);`}</code></pre>

            <p><strong>Swift/Objective-C:</strong> Use the <code>ConsentFontsInfo</code> class — see API Documentation for full constructor and method list.</p>
          </Accordion>
        </AccordionGroup>
      </Accordion>
    </AccordionGroup>
  </>
);

