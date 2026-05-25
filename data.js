// Data structure for the course topics
// We store HTML strings that will be injected and sanitized via DOMPurify

const topicsData = [
    {
        id: 1,
        title: "Introduction to Tailwind CSS",
        content: `
            <div class="prose-custom">
                <h1>Introduction to Tailwind CSS</h1>
                
                <div class="p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg mb-8">
                    <h3 class="text-blue-800 font-bold mt-0 mb-2">🎓 Semester 1 Note: Let's start from the absolute basics!</h3>
                    <p class="text-blue-900 mb-0">If you are completely new to web development, don't worry! We will break down exactly how everything works before we jump into the magic of Tailwind.</p>
                </div>

                <h2>1. The Basics: HTML & CSS</h2>
                <p>Before understanding Tailwind, you must understand the relationship between HTML and CSS:</p>
                <ul>
                    <li><strong>HTML (HyperText Markup Language):</strong> This is the <em>skeleton</em> or <em>structure</em> of your website. It defines what things are (e.g., "This is a button", "This is an image", "This is a paragraph").</li>
                    <li><strong>CSS (Cascading Style Sheets):</strong> This is the <em>paint, clothing, and layout</em>. It makes the skeleton look good (e.g., "Make that button blue", "Make the image round", "Put the paragraph in the center").</li>
                </ul>

                <h2>2. The "Old Way" of Styling (Traditional CSS)</h2>
                <p>Traditionally, you keep your HTML and CSS in separate files. You give your HTML elements a "name" (a class), and then in your CSS file, you call out that name and write styling rules for it.</p>
                
                <div class="demo-box flex-col items-start bg-slate-50 border-slate-200">
                    <h4 class="font-bold mb-2 text-slate-700">Example: Traditional CSS</h4>
                    <p class="text-sm text-slate-500 mb-4">First, you write the HTML structure and invent a class name:</p>
                    <div class="code-wrapper w-full mt-0">
                        <div class="code-header"><span>index.html</span></div>
                        <pre><code class="language-markup">&lt;button class="primary-button"&gt;Click Me!&lt;/button&gt;</code></pre>
                    </div>
                    <p class="text-sm text-slate-500 my-4">Then, you go to a separate CSS file and write the styles:</p>
                    <div class="code-wrapper w-full mt-0">
                        <div class="code-header"><span>styles.css</span></div>
                        <pre><code class="language-css">.primary-button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
}</code></pre>
                    </div>
                </div>

                <p>This works, but as your project grows, you end up with thousands of class names to invent and remember, and your CSS file becomes huge and messy!</p>

                <h2>3. The "Tailwind Way" (Utility-First CSS)</h2>
                <p>Tailwind is a <strong>utility-first CSS framework</strong>. Instead of inventing class names like <code>primary-button</code> and writing separate CSS, Tailwind gives you hundreds of tiny, pre-made "utility" classes. Each class does exactly <em>one thing</em>.</p>
                
                <ul>
                    <li><code>bg-blue-500</code> = Makes the background blue.</li>
                    <li><code>text-white</code> = Makes the text white.</li>
                    <li><code>px-4 py-2</code> = Adds padding (space inside the button).</li>
                    <li><code>rounded</code> = Makes the corners slightly round.</li>
                    <li><code>font-bold</code> = Makes the text bold.</li>
                </ul>

                <p>You just combine these tiny classes directly in your HTML! No need to write any custom CSS or invent class names.</p>

                <div class="demo-box flex-col items-start bg-blue-50 border-blue-200">
                    <h4 class="font-bold mb-2 text-blue-900">Example: Tailwind CSS</h4>
                    <p class="text-sm text-blue-700 mb-4">You build the exact same button entirely inside your HTML:</p>
                    <div class="code-wrapper w-full mt-0">
                        <div class="code-header"><span>index.html</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-markup">&lt;button class="bg-blue-500 text-white px-5 py-2 rounded font-bold"&gt;
  Click Me!
&lt;/button&gt;</code></pre>
                    </div>
                    
                    <div class="mt-4 p-4 border border-blue-200 rounded-lg bg-white w-full">
                        <p class="text-xs uppercase text-slate-400 font-bold mb-2">Live Result</p>
                        <button class="bg-blue-500 text-white px-5 py-2 rounded font-bold hover:bg-blue-600 transition-colors">Click Me!</button>
                    </div>
                </div>

                <h2>Why do Developers Love Tailwind?</h2>
                <ol>
                    <li><strong>It's Incredibly Fast:</strong> You never have to switch back and forth between HTML and CSS files. You stay in your HTML and design on the fly.</li>
                    <li><strong>No More Naming Things:</strong> Naming things is hard. With Tailwind, you don't have to invent names like <code>.sidebar-outer-wrapper-container</code>.</li>
                    <li><strong>It's Responsive by Default:</strong> Making a website look good on phones and laptops is extremely easy with Tailwind (we'll learn this soon!).</li>
                    <li><strong>Consistent Design:</strong> Tailwind uses a strict design system (colors, spacing, sizing), so your website automatically looks professional and cohesive.</li>
                </ol>

                <p>In the next chapters, we will learn exactly how to use all these magical utility classes to build beautiful websites from scratch!</p>
            </div>
        `
    },
    {
        id: 2,
        title: "Utility-First Concept & Philosophy",
        content: `
            <div class="prose-custom">
                <h1>Utility-First Concept & Philosophy</h1>
                <p>The core philosophy of Tailwind CSS is "Utility-First". But what does that mean exactly?</p>

                <h2>What is a Utility Class?</h2>
                <p>A utility class is a single-purpose CSS class that does one specific thing. For example, <code>.text-center</code> only applies <code>text-align: center;</code>. <code>.mt-4</code> only applies <code>margin-top: 1rem;</code>.</p>

                <h2>Component vs Utility Architecture</h2>
                <p>Let's contrast the two primary paradigms in CSS architecture.</p>
                
                <h3>Component (BEM-style) Architecture</h3>
                <p>You abstract styles into "components" based on semantics.</p>
                <div class="code-wrapper">
                    <div class="code-header"><span>CSS</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
                    <pre><code class="language-css">.btn {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-weight: 600;
}
.btn-primary {
  background-color: #3b82f6;
  color: white;
}</code></pre>
                </div>

                <h3>Utility-First Architecture</h3>
                <p>Instead of defining a <code>.btn-primary</code>, you construct the button directly in HTML using atomic classes.</p>
                <div class="code-wrapper">
                    <div class="code-header"><span>HTML</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
                    <pre><code class="language-markup">&lt;button class="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"&gt;
  Submit
&lt;/button&gt;</code></pre>
                </div>
                
                <div class="demo-box mt-4">
                    <button class="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors">
                        Submit
                    </button>
                </div>

                <h2>The "Separation of Concerns" Myth</h2>
                <p>A common critique is that utility-first CSS violates the "separation of concerns" (HTML should be structure, CSS should be style). However, Tailwind argues that separating HTML and CSS doesn't separate concerns; it just separates technologies.</p>
                <p>When you change a CSS file, you almost always have to change the HTML structure anyway. With Tailwind, the structure and style are co-located, making maintenance significantly easier and reducing cognitive load.</p>
            </div>
        `
    },
    {
        id: 3,
        title: "Installation & Setup Guide",
        content: `
            <div class="prose-custom">
                <h1>Installation & Setup Guide</h1>
                <p>There are multiple ways to integrate Tailwind CSS into your project, depending on your build tools.</p>

                <h2>1. Tailwind CLI (Recommended for mostly static sites)</h2>
                <p>The simplest and fastest way to get up and running from scratch is with the Tailwind CLI tool.</p>
                
                <div class="code-wrapper">
                    <div class="code-header"><span>Terminal</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
                    <pre><code class="language-bash">npm install -D tailwindcss
npx tailwindcss init</code></pre>
                </div>

                <p>Configure your template paths in <code>tailwind.config.js</code>:</p>
                <div class="code-wrapper">
                    <div class="code-header"><span>tailwind.config.js</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
                    <pre><code class="language-javascript">/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}</code></pre>
                </div>

                <h2>2. Play CDN (For testing and prototyping)</h2>
                <p>If you just want to try Tailwind without building anything, you can use the CDN. <strong>Note:</strong> This is not recommended for production due to performance implications (it compiles CSS in the browser).</p>
                <div class="code-wrapper">
                    <div class="code-header"><span>HTML</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
                    <pre><code class="language-markup">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;script src="https://cdn.tailwindcss.com"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1 class="text-3xl font-bold underline"&gt;
    Hello world!
  &lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
                </div>

                <h2>3. Framework Guides (Vite, Next.js, React)</h2>
                <p>Tailwind has first-class integrations with all major frameworks. For example, using Vite:</p>
                <div class="code-wrapper">
                    <div class="code-header"><span>Terminal</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
                    <pre><code class="language-bash">npm create vite@latest my-project -- --template vanilla
cd my-project
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p</code></pre>
                </div>
            </div>
        `
    },
    {
        id: 4,
        title: "Configuration & JIT Engine",
        content: `
            <div class="prose-custom">
                <h1>Configuration & JIT Engine</h1>
                <p>Tailwind is designed to be highly customizable. The <code>tailwind.config.js</code> file is the heart of your project's design system.</p>

                <h2>The Theme Object</h2>
                <p>The <code>theme</code> section is where you define your color palette, fonts, type scale, border sizes, breakpoints, and more.</p>
                
                <div class="code-wrapper">
                    <div class="code-header"><span>tailwind.config.js</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
                    <pre><code class="language-javascript">module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        'brand': '#ff0000', // Adds a custom color
      }
    }
  }
}</code></pre>
                </div>
                <p><strong>Crucial Note:</strong> Placing items directly in <code>theme</code> <em>overrides</em> Tailwind's defaults. Placing them in <code>theme.extend</code> <em>adds</em> to the defaults.</p>

                <h2>The Just-In-Time (JIT) Engine</h2>
                <p>Since Tailwind v3, the JIT engine is enabled by default. What does it do?</p>
                <ul>
                    <li><strong>Lightning Fast Build Times:</strong> It generates your CSS on-demand as you author your templates, instead of generating everything upfront.</li>
                    <li><strong>All Variants Enabled:</strong> You can use <code>hover:</code>, <code>focus:</code>, <code>active:</code>, <code>disabled:</code>, and even complex responsive variants on every utility class by default.</li>
                    <li><strong>Arbitrary Values:</strong> Need a highly specific value that isn't in your design system? You can use arbitrary values like <code>top-[117px]</code> or <code>bg-[#bada55]</code>.</li>
                </ul>
                
                <div class="demo-box mt-4">
                    <div class="w-[200px] h-[50px] bg-[#8b5cf6] text-white flex justify-center items-center rounded-[12px] shadow-[0_10px_20px_rgba(139,92,246,0.3)]">
                        Arbitrary Values!
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 5,
        title: "Preflight & CSS Reset System",
        content: `
            <div class="prose-custom">
                <h1>Preflight & CSS Reset System</h1>
                <p>Tailwind injects a set of base styles called <strong>Preflight</strong>. This is built on top of modern-normalize, but it goes a bit further to provide a solid baseline for a utility-first approach.</p>

                <h2>What Preflight Does</h2>
                
                <h3>1. Removes Default Margins</h3>
                <p>Headings, blockquotes, paragraphs, etc., have all their default margins removed. This forces you to explicitly declare spacing, preventing unexpected layouts.</p>
                
                <h3>2. Unstyles Headings</h3>
                <p><code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code> are completely unstyled. They have the same font-size and font-weight as normal text.</p>
                <div class="demo-box">
                    <div>
                        <h1>This is an H1, but it looks like normal text!</h1>
                        <p>Because Preflight removes all default heading styling.</p>
                    </div>
                </div>

                <h3>3. Resets Box-Sizing</h3>
                <p>It globally sets <code>box-sizing: border-box</code>, which makes sizing elements much more intuitive (padding and borders are included in the width).</p>

                <h3>4. Removes List Styles</h3>
                <p>Ordered and unordered lists have their default margins, padding, and bullets/numbers removed.</p>

                <h3>5. Borders are Reset</h3>
                <p>All elements have <code>border-width: 0</code> and <code>border-style: solid</code>. This makes it so that to add a border, you only need to specify <code>border</code> (which defaults to 1px).</p>

                <h2>Disabling Preflight</h2>
                <p>If you are integrating Tailwind into an existing project and Preflight breaks your current styles, you can disable it in the config:</p>
                <div class="code-wrapper">
                    <div class="code-header"><span>tailwind.config.js</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
                    <pre><code class="language-javascript">module.exports = {
  corePlugins: {
    preflight: false,
  }
}</code></pre>
                </div>
            </div>
        `
    },
    {
        id: 6,
        title: "Colors & Color System",
        content: `
            <div class="prose-custom">
                <h1>Colors & Color System</h1>
                <p>Tailwind includes an expertly-crafted default color palette consisting of 22 colors, each with 11 shades (from 50 to 950).</p>

                <h2>Applying Colors</h2>
                <p>Colors are applied using the format <code>{utility}-{color}-{shade}</code>.</p>
                <ul>
                    <li>Text Color: <code>text-blue-500</code></li>
                    <li>Background Color: <code>bg-red-200</code></li>
                    <li>Border Color: <code>border-emerald-600</code></li>
                    <li>Placeholder Color: <code>placeholder-slate-400</code></li>
                </ul>

                <div class="demo-box flex-col gap-4">
                    <div class="p-4 bg-indigo-100 border-l-4 border-indigo-500 text-indigo-700 w-full rounded-r">
                        <strong class="font-bold">Pro Tip:</strong> Use shades 50-100 for backgrounds, 500-600 for primary elements (buttons), and 700-900 for text on light backgrounds.
                    </div>
                </div>

                <h2>Color Opacity</h2>
                <p>You can adjust the opacity of a color using a slash <code>/</code> followed by the opacity value (0-100).</p>
                <div class="code-wrapper">
                    <div class="code-header"><span>HTML</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
                    <pre><code class="language-markup">&lt;button class="bg-blue-500/50 ..."&gt;50% Opacity Background&lt;/button&gt;
&lt;button class="bg-blue-500/20 ..."&gt;20% Opacity Background&lt;/button&gt;</code></pre>
                </div>
                
                <div class="demo-box gap-4">
                    <button class="px-4 py-2 text-white bg-blue-500 rounded font-medium">100%</button>
                    <button class="px-4 py-2 text-white bg-blue-500/50 rounded font-medium">50%</button>
                    <button class="px-4 py-2 text-white bg-blue-500/20 rounded font-medium text-blue-900">20%</button>
                </div>

                <h2>Customizing Colors</h2>
                <p>In <code>tailwind.config.js</code>, you can define your brand colors:</p>
                <div class="code-wrapper">
                    <div class="code-header"><span>tailwind.config.js</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
                    <pre><code class="language-javascript">module.exports = {
  theme: {
    extend: {
      colors: {
        brand: '#00cc99',
        ocean: {
          light: '#67e8f9',
          DEFAULT: '#06b6d4',
          dark: '#0891b2',
        }
      }
    }
  }
}</code></pre>
                </div>
                <p>You can then use <code>bg-ocean</code>, <code>text-ocean-light</code>, etc.</p>
            </div>
        `
    },
    {
        id: 7,
        title: "Spacing System - Margin & Padding",
        content: `
            <div class="prose-custom">
                <h1>Spacing System - Margin & Padding</h1>
                <p>Tailwind's spacing scale is proportional. 1 unit is equal to 0.25rem (which translates to 4px by default). This scale applies to margin, padding, width, height, and more.</p>

                <h2>Padding (p)</h2>
                <ul>
                    <li><code>p-4</code> : Padding on all sides (1rem or 16px)</li>
                    <li><code>px-4</code> : Padding on x-axis (left and right)</li>
                    <li><code>py-4</code> : Padding on y-axis (top and bottom)</li>
                    <li><code>pt-4</code>, <code>pr-4</code>, <code>pb-4</code>, <code>pl-4</code> : Padding on specific sides (top, right, bottom, left)</li>
                </ul>

                <div class="demo-box gap-4 items-end">
                    <div class="bg-indigo-200 p-2"><div class="bg-indigo-500 text-white text-xs px-2 py-1">p-2</div></div>
                    <div class="bg-indigo-200 p-4"><div class="bg-indigo-500 text-white text-xs px-2 py-1">p-4</div></div>
                    <div class="bg-indigo-200 p-8"><div class="bg-indigo-500 text-white text-xs px-2 py-1">p-8</div></div>
                </div>

                <h2>Margin (m)</h2>
                <p>Works exactly the same as padding, but uses <code>m</code> instead of <code>p</code>.</p>
                <ul>
                    <li><code>m-4</code>, <code>mx-4</code>, <code>my-4</code></li>
                    <li><code>mt-4</code>, <code>mr-4</code>, <code>mb-4</code>, <code>ml-4</code></li>
                </ul>

                <h3>Negative Margins</h3>
                <p>To use negative margins, prefix the class with a minus sign <code>-</code>.</p>
                <div class="code-wrapper">
                    <div class="code-header"><span>HTML</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
                    <pre><code class="language-markup">&lt;div class="w-16 h-16 bg-blue-500"&gt;&lt;/div&gt;
&lt;div class="-mt-8 w-16 h-16 bg-red-500 mix-blend-multiply"&gt;&lt;/div&gt;</code></pre>
                </div>

                <h3>Space Between</h3>
                <p>When you have a list of items and want spacing between them, instead of applying margin to every child, apply <code>space-x-{size}</code> or <code>space-y-{size}</code> to the parent wrapper.</p>
                <div class="demo-box">
                    <div class="flex space-x-4">
                        <div class="w-12 h-12 bg-teal-500 rounded-md"></div>
                        <div class="w-12 h-12 bg-teal-500 rounded-md"></div>
                        <div class="w-12 h-12 bg-teal-500 rounded-md"></div>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 8,
        title: "Typography & Text Styling",
        content: `
            <div class="prose-custom">
                <h1>Typography & Text Styling</h1>
                <p>Tailwind provides utilities for controlling every aspect of text styling.</p>

                <h2>Font Family</h2>
                <ul>
                    <li><code>font-sans</code>: Default system sans-serif (Inter, Roboto, Arial, etc.)</li>
                    <li><code>font-serif</code>: Default system serif</li>
                    <li><code>font-mono</code>: Default system monospace</li>
                </ul>

                <h2>Font Size</h2>
                <p>Font size utilities range from <code>text-xs</code> to <code>text-9xl</code>. Crucially, <strong>Tailwind automatically applies a sensible line-height based on the font-size</strong>.</p>
                <div class="demo-box flex-col items-start gap-2">
                    <p class="text-xs">text-xs (0.75rem / 12px)</p>
                    <p class="text-sm">text-sm (0.875rem / 14px)</p>
                    <p class="text-base">text-base (1rem / 16px)</p>
                    <p class="text-xl">text-xl (1.25rem / 20px)</p>
                    <p class="text-3xl font-bold">text-3xl (1.875rem / 30px)</p>
                </div>

                <h2>Font Weight</h2>
                <p>Ranges from <code>font-thin</code> (100) to <code>font-black</code> (900).</p>
                <div class="demo-box gap-4 flex-wrap">
                    <span class="font-light">font-light</span>
                    <span class="font-normal">font-normal</span>
                    <span class="font-medium">font-medium</span>
                    <span class="font-semibold">font-semibold</span>
                    <span class="font-bold">font-bold</span>
                </div>

                <h2>Text Alignment & Transformation</h2>
                <ul>
                    <li><strong>Alignment:</strong> <code>text-left</code>, <code>text-center</code>, <code>text-right</code>, <code>text-justify</code></li>
                    <li><strong>Transform:</strong> <code>uppercase</code>, <code>lowercase</code>, <code>capitalize</code>, <code>normal-case</code></li>
                    <li><strong>Decoration:</strong> <code>underline</code>, <code>line-through</code>, <code>no-underline</code></li>
                </ul>

                <h2>Line Height (Leading) & Tracking</h2>
                <p>If you need to override the default line-height provided by the font-size utility, use <code>leading-{size}</code>. For letter spacing, use <code>tracking-{size}</code>.</p>
                <div class="code-wrapper">
                    <div class="code-header"><span>HTML</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
                    <pre><code class="language-markup">&lt;p class="leading-loose tracking-widest uppercase"&gt;
  Spaced out text
&lt;/p&gt;</code></pre>
                </div>
            </div>
        `
    },
    {
        id: 9,
        title: "Width, Height & Sizing",
        content: `
            <div class="prose-custom">
                <h1>Width, Height & Sizing</h1>
                <p>Tailwind provides comprehensive sizing utilities that work seamlessly with its proportional scale.</p>

                <h2>Width (w)</h2>
                <ul>
                    <li><strong>Fixed sizes:</strong> <code>w-4</code>, <code>w-16</code>, <code>w-64</code> (using the spacing scale).</li>
                    <li><strong>Percentages:</strong> <code>w-1/2</code> (50%), <code>w-1/3</code> (33.3%), <code>w-3/4</code> (75%), <code>w-full</code> (100%).</li>
                    <li><strong>Screen width:</strong> <code>w-screen</code> (100vw).</li>
                </ul>

                <div class="demo-box flex-col gap-2 w-full">
                    <div class="w-1/4 bg-blue-500 text-white text-center py-1 rounded">w-1/4</div>
                    <div class="w-1/2 bg-blue-500 text-white text-center py-1 rounded">w-1/2</div>
                    <div class="w-3/4 bg-blue-500 text-white text-center py-1 rounded">w-3/4</div>
                    <div class="w-full bg-blue-500 text-white text-center py-1 rounded">w-full</div>
                </div>

                <h2>Height (h)</h2>
                <p>Height works exactly like width, just using <code>h</code> instead of <code>w</code>.</p>
                <ul>
                    <li><code>h-32</code> (fixed height based on scale).</li>
                    <li><code>h-full</code> (100% of parent height).</li>
                    <li><code>h-screen</code> (100vh).</li>
                </ul>

                <h2>Min/Max Sizing</h2>
                <p>You can constrain elements using <code>min-w-</code>, <code>max-w-</code>, <code>min-h-</code>, and <code>max-h-</code>.</p>
                <div class="code-wrapper">
                    <div class="code-header"><span>HTML</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
                    <pre><code class="language-markup">&lt;!-- This div will never exceed 32rem (512px) in width --&gt;
&lt;div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow"&gt;
  Content goes here
&lt;/div&gt;</code></pre>
                </div>
            </div>
        `
    },
    {
        id: 10,
        title: "Borders & Border Radius",
        content: `
            <div class="prose-custom">
                <h1>Borders & Border Radius</h1>
                
                <h2>Border Width</h2>
                <p>Use <code>border</code> to add a 1px border. Use <code>border-{width}</code> (0, 2, 4, 8) to specify a thicker border. You can also specify sides: <code>border-t-2</code>, <code>border-b-4</code>.</p>

                <h2>Border Color</h2>
                <p>Use <code>border-{color}</code> to set the color.</p>

                <h2>Border Style</h2>
                <p><code>border-solid</code>, <code>border-dashed</code>, <code>border-dotted</code>, <code>border-double</code>.</p>
                
                <div class="demo-box gap-4 flex-wrap">
                    <div class="w-24 h-24 bg-white border border-slate-300 flex items-center justify-center">border</div>
                    <div class="w-24 h-24 bg-white border-2 border-indigo-500 flex items-center justify-center">border-2</div>
                    <div class="w-24 h-24 bg-white border-4 border-dashed border-emerald-500 flex items-center justify-center text-center">border-4<br>dashed</div>
                </div>

                <h2>Border Radius (Rounded Corners)</h2>
                <p>Use the <code>rounded</code> utilities to add border radius.</p>
                <ul>
                    <li><code>rounded-sm</code> (0.125rem)</li>
                    <li><code>rounded</code> (0.25rem)</li>
                    <li><code>rounded-md</code> (0.375rem)</li>
                    <li><code>rounded-lg</code> (0.5rem)</li>
                    <li><code>rounded-xl</code>, <code>2xl</code>, <code>3xl</code></li>
                    <li><code>rounded-full</code> (Perfect for circles/pills)</li>
                </ul>
                <p>You can also target specific corners: <code>rounded-t-lg</code> (top), <code>rounded-tr-lg</code> (top right).</p>
            </div>
        `
    },
    {
        id: 11,
        title: "Backgrounds & Gradients",
        content: `
            <div class="prose-custom">
                <h1>Backgrounds & Gradients</h1>
                
                <h2>Background Color & Opacity</h2>
                <p>We've already seen <code>bg-blue-500</code>. Remember you can add opacity: <code>bg-blue-500/50</code>.</p>

                <h2>Background Images & Size</h2>
                <p>Use <code>bg-[url(...)]</code> for arbitrary background images. Then use <code>bg-cover</code>, <code>bg-contain</code>, <code>bg-center</code>, <code>bg-no-repeat</code> to control it.</p>

                <h2>Gradients</h2>
                <p>Tailwind makes beautiful gradients incredibly easy. You need three things:</p>
                <ol>
                    <li>Direction: <code>bg-gradient-to-{r,l,t,b,tr,tl,br,bl}</code></li>
                    <li>Starting color: <code>from-{color}</code></li>
                    <li>Ending color: <code>to-{color}</code></li>
                </ol>
                <p>Optionally, you can add a middle color using <code>via-{color}</code>.</p>

                <div class="demo-box gap-4 flex-col md:flex-row">
                    <div class="h-24 w-full md:w-1/3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">from-cyan to-blue</div>
                    <div class="h-24 w-full md:w-1/3 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center text-white font-bold">from-via-to</div>
                </div>
            </div>
        `
    },
    {
        id: 12,
        title: "Shadows & Visual Effects",
        content: `
            <div class="prose-custom">
                <h1>Shadows & Visual Effects</h1>
                
                <div class="p-6 bg-purple-50 border-l-4 border-purple-500 rounded-r-lg mb-8">
                    <h3 class="text-purple-800 font-bold mt-0 mb-2">🎓 Semester 1 Note: Adding Depth to your Webpages</h3>
                    <p class="text-purple-900 mb-0">In the real world, objects cast shadows. In web design, adding a shadow makes an element look like it's floating above the page. This is called "depth" or "elevation" and is crucial for modern, premium designs!</p>
                </div>

                <h2>1. Box Shadows</h2>
                <p>Adding depth is incredibly simple with the <code>shadow</code> utilities. Tailwind provides a perfectly calibrated scale of shadows, from very subtle to very pronounced.</p>
                
                <ul>
                    <li><code>shadow-sm</code>: A very small, subtle shadow (great for borders).</li>
                    <li><code>shadow</code>: A regular shadow (great for cards).</li>
                    <li><code>shadow-md</code>: A medium shadow.</li>
                    <li><code>shadow-lg</code>: A large shadow (great for dropdowns or modals).</li>
                    <li><code>shadow-xl</code>: An extra-large shadow.</li>
                    <li><code>shadow-2xl</code>: The largest shadow.</li>
                    <li><code>shadow-inner</code>: A shadow that goes <em>inside</em> the box!</li>
                </ul>
                
                <div class="demo-box gap-8 flex-wrap bg-slate-100 p-10">
                    <div class="w-32 h-32 bg-white shadow-sm rounded-xl flex items-center justify-center font-bold text-slate-500">shadow-sm</div>
                    <div class="w-32 h-32 bg-white shadow-md rounded-xl flex items-center justify-center font-bold text-slate-600">shadow-md</div>
                    <div class="w-32 h-32 bg-white shadow-lg rounded-xl flex items-center justify-center font-bold text-slate-700">shadow-lg</div>
                    <div class="w-32 h-32 bg-white shadow-2xl rounded-xl flex items-center justify-center font-bold text-slate-900">shadow-2xl</div>
                </div>

                <h2>2. Colored Shadows (The "Glow" Effect)</h2>
                <p>One of Tailwind's coolest features is the ability to easily color your shadows! Just combine a shadow utility with a shadow color utility: <code>shadow-lg shadow-cyan-500/50</code>.</p>
                <p>The <code>/50</code> at the end means "50% opacity", which is important because 100% opacity shadows look unnatural.</p>
                
                <div class="demo-box gap-8 flex-wrap bg-slate-900 p-10">
                    <button class="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/80 transition-shadow font-bold">
                        Blue Glow
                    </button>
                    <button class="px-6 py-3 bg-emerald-500 text-white rounded-lg shadow-lg shadow-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/80 transition-shadow font-bold">
                        Emerald Glow
                    </button>
                    <button class="px-6 py-3 bg-purple-500 text-white rounded-lg shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/80 transition-shadow font-bold">
                        Purple Glow
                    </button>
                </div>

                <h2>3. Opacity (Transparency)</h2>
                <p>Opacity controls how transparent an element is. The scale goes from <code>opacity-0</code> (completely invisible) to <code>opacity-100</code> (completely solid).</p>
                
                <div class="demo-box gap-4 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-slate-200 p-8">
                    <div class="w-24 h-24 bg-brand-500 opacity-25 rounded flex items-center justify-center text-white font-bold">25%</div>
                    <div class="w-24 h-24 bg-brand-500 opacity-50 rounded flex items-center justify-center text-white font-bold">50%</div>
                    <div class="w-24 h-24 bg-brand-500 opacity-75 rounded flex items-center justify-center text-white font-bold">75%</div>
                    <div class="w-24 h-24 bg-brand-500 opacity-100 rounded flex items-center justify-center text-white font-bold">100%</div>
                </div>

                <h2>4. Mix Blend Mode</h2>
                <p>Mix blend mode dictates how an element's colors blend with the colors behind it. Think of it like Photoshop blending layers!</p>
                <p>Utilities include <code>mix-blend-multiply</code>, <code>mix-blend-screen</code>, <code>mix-blend-overlay</code>.</p>
            </div>
        `
    },
    {
        id: 13,
        title: "Display & Positioning",
        content: `
            <div class="prose-custom">
                <h1>Display & Positioning</h1>
                
                <div class="p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg mb-8">
                    <h3 class="text-blue-800 font-bold mt-0 mb-2">🎓 Semester 1 Note: Where do things go?</h3>
                    <p class="text-blue-900 mb-0">By default, HTML elements stack on top of each other like blocks. "Positioning" allows us to break those rules and place elements exactly where we want them—like sticking a header to the top of the screen or putting a notification badge over a profile picture.</p>
                </div>

                <h2>1. Display Property</h2>
                <p>The display property determines how an element behaves in the document flow.</p>
                <ul>
                    <li><code>block</code>: Takes up the full width available (like a <code>&lt;div&gt;</code> or <code>&lt;p&gt;</code>). It forces a line break before and after it.</li>
                    <li><code>inline</code>: Only takes up as much width as necessary (like a <code>&lt;span&gt;</code>). It does not force line breaks. You cannot set width/height on inline elements.</li>
                    <li><code>inline-block</code>: Like inline, but you CAN set width and height!</li>
                    <li><code>hidden</code>: Completely removes the element from the page (sets <code>display: none;</code>).</li>
                </ul>

                <h2>2. Positioning Types</h2>
                <p>Control how an element is positioned relative to the browser or its parent container:</p>
                <ul>
                    <li><code>static</code> (default): The element flows naturally.</li>
                    <li><code>relative</code>: The element flows naturally, but you can move it slightly from its normal spot using top/right/bottom/left. <strong>Most importantly: it acts as a "container" for absolute children.</strong></li>
                    <li><code>absolute</code>: The element is ripped out of the normal flow and placed exactly where you tell it, relative to its closest <code>relative</code> ancestor.</li>
                    <li><code>fixed</code>: The element is locked to the browser window. Even if you scroll, it stays there (like a sticky navbar).</li>
                    <li><code>sticky</code>: It acts like a normal element until you scroll past it, then it "sticks" to the screen!</li>
                </ul>

                <h2>3. Top / Right / Bottom / Left</h2>
                <p>Once you make an element <code>absolute</code>, <code>fixed</code>, or <code>sticky</code>, you move it using the placement utilities:</p>
                <ul>
                    <li><code>top-0</code>, <code>top-4</code>, <code>top-1/2</code></li>
                    <li><code>right-0</code>, <code>bottom-0</code>, <code>left-0</code></li>
                    <li><code>inset-0</code>: A shortcut that sets top, right, bottom, and left all to 0 at the same time!</li>
                </ul>
                
                <div class="demo-box flex-col items-center bg-slate-100 p-10 h-64">
                    <h4 class="font-bold mb-4">Example: Notification Badge (Absolute Positioning)</h4>
                    
                    <div class="relative">
                        <!-- The Parent (Relative) -->
                        <div class="w-16 h-16 bg-slate-300 rounded-xl flex items-center justify-center shadow-inner">
                            <svg class="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                        </div>
                        
                        <!-- The Badge (Absolute) -->
                        <div class="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full border-2 border-slate-100 text-white text-xs flex items-center justify-center font-bold shadow-sm">
                            3
                        </div>
                    </div>
                    
                </div>
                
                <div class="code-wrapper w-full mt-4">
                    <div class="code-header"><span>HTML</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
                    <pre><code class="language-markup">&lt;!-- Notice the parent is 'relative', and the child is 'absolute' with '-top-2' and '-right-2' --&gt;
&lt;div class="relative"&gt;
  &lt;div class="w-16 h-16 bg-slate-300 rounded-xl"&gt;&lt;/div&gt;
  &lt;div class="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full"&gt;3&lt;/div&gt;
&lt;/div&gt;</code></pre>
                </div>
            </div>
        `
    },
    {
        id: 14,
        title: "Flexbox Layout System",
        content: `
            <div class="prose-custom">
                <h1>Flexbox Layout System</h1>
                
                <div class="p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg mb-8">
                    <h3 class="text-yellow-800 font-bold mt-0 mb-2">🎓 Semester 1 Note: The Ultimate Layout Tool</h3>
                    <p class="text-yellow-900 mb-0">Before Flexbox, aligning elements side-by-side or centering them vertically was a nightmare in CSS. Flexbox changed everything. It allows you to align, distribute, and space items in a 1-dimensional row or column effortlessly!</p>
                </div>

                <h2>1. Creating a Flex Container</h2>
                <p>To use flexbox, you simply apply <code>flex</code> to the parent container. Instantly, all direct children will line up in a row!</p>

                <h2>2. Flex Direction (Row vs Column)</h2>
                <ul>
                    <li><code>flex-row</code>: Children line up left to right (this is the default).</li>
                    <li><code>flex-col</code>: Children stack top to bottom.</li>
                </ul>

                <h2>3. Justify Content (Main Axis Alignment)</h2>
                <p>If your flex direction is a row, "justify" controls the horizontal alignment.</p>
                <ul>
                    <li><code>justify-start</code>: Pack items to the left.</li>
                    <li><code>justify-center</code>: Center items horizontally.</li>
                    <li><code>justify-end</code>: Pack items to the right.</li>
                    <li><code>justify-between</code>: Push the first item to the far left, the last to the far right, and space out the rest evenly. (Extremely common for Navbars!)</li>
                    <li><code>justify-around</code> / <code>justify-evenly</code>: Put equal space around items.</li>
                </ul>

                <h2>4. Align Items (Cross Axis Alignment)</h2>
                <p>If your flex direction is a row, "align" controls the vertical alignment.</p>
                <ul>
                    <li><code>items-start</code>: Align to the top.</li>
                    <li><code>items-center</code>: Align perfectly in the vertical center! (Goodbye CSS centering nightmares!)</li>
                    <li><code>items-end</code>: Align to the bottom.</li>
                    <li><code>items-stretch</code>: Stretch to fill the height.</li>
                </ul>

                <h2>5. The Magical "Gap"</h2>
                <p>Instead of adding margins to every child, use <code>gap-{size}</code> on the parent to automatically put space <em>between</em> the items!</p>

                <div class="demo-box flex-col items-start bg-slate-50 w-full p-6">
                    <h4 class="font-bold mb-2">Example: A perfect Navbar layout</h4>
                    <p class="text-sm text-slate-500 mb-4">Using <code>flex</code>, <code>justify-between</code>, and <code>items-center</code>.</p>
                    
                    <div class="w-full bg-slate-800 text-white rounded-xl p-4 flex justify-between items-center shadow-lg">
                        <!-- Logo side -->
                        <div class="font-bold text-xl text-brand-400">MyLogo</div>
                        
                        <!-- Links side (with gap) -->
                        <div class="flex gap-6 text-sm font-medium">
                            <a href="#" class="hover:text-brand-400">Home</a>
                            <a href="#" class="hover:text-brand-400">About</a>
                            <a href="#" class="hover:text-brand-400">Contact</a>
                        </div>
                    </div>
                </div>

                <div class="code-wrapper w-full mt-4">
                    <div class="code-header"><span>HTML</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
                    <pre><code class="language-markup">&lt;!-- The Parent Container --&gt;
&lt;div class="flex justify-between items-center bg-slate-800 p-4"&gt;
  &lt;div class="font-bold text-brand-400"&gt;MyLogo&lt;/div&gt;
  
  &lt;!-- A nested flex container for the links --&gt;
  &lt;div class="flex gap-6"&gt;
    &lt;a href="#"&gt;Home&lt;/a&gt;
    &lt;a href="#"&gt;About&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
                </div>
            </div>
        `
    },
    {
        id: 15,
        title: "CSS Grid Layout System",
        content: `
            <div class="prose-custom">
                <h1>CSS Grid Layout System</h1>
                
                <div class="p-6 bg-teal-50 border-l-4 border-teal-500 rounded-r-lg mb-8">
                    <h3 class="text-teal-800 font-bold mt-0 mb-2">🎓 Semester 1 Note: Flexbox vs Grid</h3>
                    <p class="text-teal-900 mb-0">If Flexbox is for 1-dimensional layouts (a single row OR a single column), Grid is for <strong>2-dimensional layouts</strong> (rows AND columns at the same time). Use Grid when you want to build complex photo galleries, dashboards, or perfectly aligned card grids!</p>
                </div>

                <h2>1. Creating a Grid</h2>
                <p>Apply the <code>grid</code> class to the parent container.</p>

                <h2>2. Defining Columns</h2>
                <p>You tell the grid how many columns it should have using <code>grid-cols-{n}</code> (from 1 to 12).</p>
                <ul>
                    <li><code>grid-cols-1</code>: One column (useful for mobile).</li>
                    <li><code>grid-cols-2</code>: Two equal columns.</li>
                    <li><code>grid-cols-3</code>: Three equal columns.</li>
                    <li><code>grid-cols-12</code>: A 12-column grid system.</li>
                </ul>

                <h2>3. Spanning Columns and Rows</h2>
                <p>By default, each child takes up exactly 1 "cell" in the grid. However, you can make a child span across multiple columns using <code>col-span-{n}</code>!</p>
                <ul>
                    <li><code>col-span-2</code>: Makes an item twice as wide.</li>
                    <li><code>col-span-full</code>: Makes an item span the entire width of the grid.</li>
                    <li><code>row-span-2</code>: Makes an item twice as tall!</li>
                </ul>

                <div class="demo-box w-full bg-slate-100 p-8">
                    <div class="w-full">
                        <h4 class="font-bold mb-4 text-center">Bento Box / Dashboard Layout Example</h4>
                        <div class="grid grid-cols-4 grid-rows-3 gap-4 w-full h-[400px]">
                            <!-- Main Feature (Spans 2 cols, 2 rows) -->
                            <div class="bg-indigo-500 text-white rounded-2xl col-span-2 row-span-2 p-6 flex flex-col justify-end shadow-lg">
                                <span class="font-bold text-2xl">Main Feature</span>
                                <span class="text-indigo-200">col-span-2 row-span-2</span>
                            </div>
                            
                            <!-- Top Right 1 -->
                            <div class="bg-emerald-500 text-white rounded-2xl p-4 flex flex-col justify-center items-center shadow-lg">
                                <span class="font-bold">Metric 1</span>
                            </div>
                            
                            <!-- Top Right 2 -->
                            <div class="bg-amber-500 text-white rounded-2xl p-4 flex flex-col justify-center items-center shadow-lg">
                                <span class="font-bold">Metric 2</span>
                            </div>
                            
                            <!-- Middle Right (Spans 2 cols) -->
                            <div class="bg-rose-500 text-white rounded-2xl col-span-2 p-4 flex flex-col justify-center items-center shadow-lg">
                                <span class="font-bold">Wide Banner</span>
                                <span class="text-rose-200 text-sm">col-span-2</span>
                            </div>
                            
                            <!-- Bottom Row (Spans full) -->
                            <div class="bg-blue-600 text-white rounded-2xl col-span-4 p-4 flex items-center justify-center shadow-lg">
                                <span class="font-bold">Bottom Dashboard Chart (col-span-4)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="code-wrapper w-full mt-4">
                    <div class="code-header"><span>HTML</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
                    <pre><code class="language-markup">&lt;div class="grid grid-cols-4 gap-4"&gt;
  &lt;div class="col-span-2 row-span-2 bg-indigo-500"&gt;Main&lt;/div&gt;
  &lt;div class="bg-emerald-500"&gt;Metric 1&lt;/div&gt;
  &lt;div class="bg-amber-500"&gt;Metric 2&lt;/div&gt;
  &lt;div class="col-span-2 bg-rose-500"&gt;Wide Banner&lt;/div&gt;
  &lt;div class="col-span-4 bg-blue-600"&gt;Bottom Chart&lt;/div&gt;
&lt;/div&gt;</code></pre>
                </div>
            </div>
        `
    },
    {
        id: 16,
        title: "Container & Layout Patterns",
        content: `
            <div class="prose-custom">
                <h1>Container & Layout Patterns</h1>
                
                <h2>The Container Utility</h2>
                <p>When you visit a modern website (like GitHub or Twitter) on a massive ultra-wide monitor, the website doesn't stretch infinitely. It stays constrained in the middle of the screen. This is what the <code>container</code> class does!</p>
                <p>The <code>container</code> class sets the <code>max-width</code> of an element to match the <code>min-width</code> of the current breakpoint. However, it does <strong>not</strong> center itself automatically. You must add <code>mx-auto</code> (margin x-axis auto) to center it.</p>
                
                <div class="code-wrapper">
                    <div class="code-header"><span>HTML</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
                    <pre><code class="language-markup">&lt;div class="container mx-auto px-4"&gt;
  &lt;!-- Content is constrained and beautifully centered on large screens --&gt;
&lt;/div&gt;</code></pre>
                </div>

                <h2>Common Layout Patterns</h2>
                
                <h3>Holy Grail Layout</h3>
                <p>The most famous layout in web design consists of a Header, a Main content area flanked by two sidebars, and a Footer. Using Flexbox, this is incredibly simple.</p>
                
                <div class="demo-box w-full">
                    <div class="w-full flex flex-col h-[300px] border-4 border-slate-300 rounded-xl overflow-hidden font-bold text-sm text-center">
                        <header class="h-12 bg-slate-800 text-white flex items-center justify-center">Header (h-12)</header>
                        
                        <div class="flex-1 flex">
                            <aside class="w-1/4 bg-blue-200 flex items-center justify-center border-r-2 border-white">Left Sidebar (w-1/4)</aside>
                            <main class="flex-1 bg-blue-50 flex items-center justify-center">Main Content (flex-1)</main>
                            <aside class="w-1/4 bg-blue-200 flex items-center justify-center border-l-2 border-white">Right Sidebar (w-1/4)</aside>
                        </div>
                        
                        <footer class="h-12 bg-slate-800 text-white flex items-center justify-center">Footer (h-12)</footer>
                    </div>
                </div>

                <div class="code-wrapper">
                    <div class="code-header"><span>HTML</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
                    <pre><code class="language-markup">&lt;!-- flex-col creates a vertical column --&gt;
&lt;div class="min-h-screen flex flex-col"&gt;
  &lt;header class="h-16 bg-slate-800 text-white"&gt;Header&lt;/header&gt;
  
  &lt;!-- flex-1 makes this middle section take up all remaining height --&gt;
  &lt;div class="flex-1 flex"&gt;
    &lt;aside class="w-64 bg-slate-200"&gt;Left Sidebar&lt;/aside&gt;
    &lt;main class="flex-1 bg-white p-6"&gt;Main Content&lt;/main&gt;
    &lt;aside class="w-64 bg-slate-200"&gt;Right Sidebar&lt;/aside&gt;
  &lt;/div&gt;
  
  &lt;footer class="h-16 bg-slate-800 text-white"&gt;Footer&lt;/footer&gt;
&lt;/div&gt;</code></pre>
                </div>
            </div>
        `
    },
    {
        id: 17,
        title: "Responsive Design & Breakpoints",
        content: `
            <div class="prose-custom">
                <h1>Responsive Design & Breakpoints</h1>
                
                <div class="p-6 bg-rose-50 border-l-4 border-rose-500 rounded-r-lg mb-8">
                    <h3 class="text-rose-800 font-bold mt-0 mb-2">🎓 Semester 1 Note: Making it look good on phones!</h3>
                    <p class="text-rose-900 mb-0">Today, over 60% of web traffic comes from mobile phones. If you design a website that only looks good on a laptop, you have failed as a web developer. Tailwind makes responsive design so easy you'll feel like you're cheating.</p>
                </div>

                <h2>The Breakpoints (Screen Sizes)</h2>
                <p>Tailwind gives you special prefixes that represent different screen sizes.</p>
                <div class="grid grid-cols-2 gap-4 my-4 font-mono text-sm">
                    <div class="bg-slate-100 p-3 rounded"><code>sm:</code> 640px (Large Phones)</div>
                    <div class="bg-slate-100 p-3 rounded"><code>md:</code> 768px (Tablets)</div>
                    <div class="bg-slate-100 p-3 rounded"><code>lg:</code> 1024px (Laptops)</div>
                    <div class="bg-slate-100 p-3 rounded"><code>xl:</code> 1280px (Desktops)</div>
                </div>

                <h2>Mobile-First Approach (CRITICAL)</h2>
                <p>Tailwind uses a "Mobile-First" system. This means <strong>unprefixed utilities apply to mobile phones by default</strong>. When you add a prefix like <code>md:</code>, you are saying "Apply this style <em>only on tablets and larger screens</em>."</p>
                
                <div class="demo-box flex-col w-full text-center p-8 bg-slate-50">
                    <div class="w-full bg-slate-800 text-white p-4 rounded-lg mb-6 font-bold shadow-lg flex items-center justify-center gap-2">
                        <svg class="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg>
                        RESIZE YOUR BROWSER WINDOW TO SEE THE MAGIC!
                    </div>
                    
                    <p class="text-sm text-slate-500 mb-4 text-left">On mobile, this is a 1-column layout (stacked). On tablets (<code>md:</code>), it becomes 2 columns. On laptops (<code>lg:</code>), it becomes 3 columns.</p>
                    
                    <!-- Responsive Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                        <div class="bg-brand-500 text-white p-6 rounded-xl shadow-lg">
                            <span class="font-bold text-xl block mb-2">Card 1</span>
                            Always visible
                        </div>
                        <div class="bg-brand-500 text-white p-6 rounded-xl shadow-lg">
                            <span class="font-bold text-xl block mb-2">Card 2</span>
                            Always visible
                        </div>
                        <div class="bg-rose-500 text-white p-6 rounded-xl shadow-lg md:col-span-2 lg:col-span-1 border-4 border-rose-300">
                            <span class="font-bold text-xl block mb-2">Card 3</span>
                            On tablet, I stretch across 2 columns! On laptop, I take 1 column.
                        </div>
                    </div>
                </div>

                <div class="code-wrapper w-full mt-4">
                    <div class="code-header"><span>HTML</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
                    <pre><code class="language-markup">&lt;!-- By default it's 1 column (grid-cols-1).
     At 'md' screen size, change to 2 columns (md:grid-cols-2).
     At 'lg' screen size, change to 3 columns (lg:grid-cols-3). --&gt;
&lt;div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"&gt;
  &lt;div class="bg-brand-500"&gt;Card 1&lt;/div&gt;
  &lt;div class="bg-brand-500"&gt;Card 2&lt;/div&gt;
  
  &lt;!-- This card has special responsive rules too! --&gt;
  &lt;div class="md:col-span-2 lg:col-span-1"&gt;Card 3&lt;/div&gt;
&lt;/div&gt;</code></pre>
                </div>
                
                <h2>Hiding Elements on Mobile</h2>
                <p>Want a sidebar that only appears on desktops? It's simple:</p>
                <div class="code-wrapper">
                    <pre><code class="language-markup">&lt;!-- 'hidden' hides it everywhere. 'lg:block' makes it visible only on large screens --&gt;
&lt;aside class="hidden lg:block w-64 bg-slate-800"&gt;Sidebar&lt;/aside&gt;</code></pre>
                </div>
            </div>
        `
    },
    {
        id: 18,
        title: "Hover, Focus & Interactive States",
        content: `
            <div class="prose-custom">
                <h1>Hover, Focus & Interactive States</h1>
                
                <div class="p-6 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg mb-8">
                    <h3 class="text-amber-800 font-bold mt-0 mb-2">🎓 Semester 1 Note: Making Elements Feel Alive</h3>
                    <p class="text-amber-900 mb-0">When a user puts their mouse over a button, it should react! This tells the user "Yes, you can click me." Tailwind uses state modifiers like <code>hover:</code> to make this incredibly easy.</p>
                </div>

                <h2>1. Hover State (Mouse Over)</h2>
                <p>Simply add <code>hover:</code> before any utility class. It will only apply that class when the user hovers over the element.</p>
                
                <div class="demo-box flex-col w-full bg-slate-50 p-8">
                    <button class="bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-xl font-bold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        Hover Over Me!
                    </button>
                    <p class="text-sm text-slate-500 mt-4">Notice how the background color darkens, the shadow gets bigger, and the button moves up slightly!</p>
                </div>

                <div class="code-wrapper w-full mt-4">
                    <div class="code-header"><span>HTML</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
                    <pre><code class="language-markup">&lt;!-- bg-brand-500 is the default. hover:bg-brand-600 applies on hover --&gt;
&lt;button class="bg-brand-500 hover:bg-brand-600 hover:-translate-y-1 hover:shadow-xl transition-all"&gt;
  Hover Over Me!
&lt;/button&gt;</code></pre>
                </div>

                <h2>2. Focus State (Clicking/Tabbing)</h2>
                <p>The <code>focus:</code> state is triggered when an element is selected by the user (either by clicking on an input field, or using the Tab key to navigate). This is <strong>crucial for accessibility</strong> so visually impaired users know where they are on the page!</p>

                <div class="demo-box flex-col w-full items-start p-8 bg-slate-100">
                    <label class="font-bold text-slate-700 mb-2">Email Address</label>
                    <!-- Focus Ring Example -->
                    <input type="text" placeholder="Enter your email" class="w-full max-w-md px-4 py-3 rounded-lg border-2 border-slate-300 outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/20 transition-all">
                </div>

                <div class="code-wrapper w-full mt-4">
                    <div class="code-header"><span>HTML</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
                    <pre><code class="language-markup">&lt;!-- outline-none removes the ugly default browser outline --&gt;
&lt;!-- focus:border-brand-500 makes the border blue when clicked --&gt;
&lt;!-- focus:ring-4 adds a glowing ring around the input --&gt;
&lt;input class="border-2 outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/20"&gt;</code></pre>
                </div>

                <h2>3. Active State (While Clicking)</h2>
                <p>The <code>active:</code> state applies exactly while the user is holding down the mouse button. It's great for making buttons look like they are physically being pressed down.</p>
                
                <div class="demo-box p-8">
                    <button class="bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 active:scale-95 text-white px-8 py-4 rounded-xl font-bold shadow-lg transition-all">
                        Click & Hold Me!
                    </button>
                </div>
            </div>
        `
    },
    {
        id: 19,
        title: "Group & Peer Variants",
        content: `
            <div class="prose-custom">
                <h1>Group & Peer Variants</h1>
                
                <div class="p-6 bg-indigo-50 border-l-4 border-indigo-500 rounded-r-lg mb-8">
                    <h3 class="text-indigo-800 font-bold mt-0 mb-2">🎓 Semester 1 Note: Controlling elements based on OTHER elements</h3>
                    <p class="text-indigo-900 mb-0">Sometimes you want to hover over a "Card" container, but you want a "Button" inside that card to change color. How do you do that without writing custom CSS? Tailwind uses <code>group</code> and <code>peer</code> for this!</p>
                </div>

                <h2>1. The Group Variant (Parent -> Child)</h2>
                <p>When you want to style an element based on the state of its <em>parent</em>, you add the <code>group</code> class to the parent. Then, you use <code>group-hover:</code> on the child!</p>

                <div class="demo-box w-full p-8 bg-slate-50">
                    <!-- The Parent has the 'group' class -->
                    <div class="group border border-slate-200 bg-white hover:bg-brand-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all cursor-pointer w-full max-w-sm mx-auto text-center">
                        <h4 class="font-bold text-xl mb-2 text-slate-800 group-hover:text-brand-600 transition-colors">Pricing Plan</h4>
                        <p class="text-slate-500 mb-6">Hover anywhere on this card!</p>
                        
                        <!-- The Child responds to 'group-hover:' -->
                        <button class="bg-slate-200 text-slate-600 group-hover:bg-brand-500 group-hover:text-white px-6 py-2 rounded-lg font-bold transition-colors">
                            Select Plan
                        </button>
                    </div>
                </div>

                <div class="code-wrapper w-full mt-4">
                    <div class="code-header"><span>HTML</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
                    <pre><code class="language-markup">&lt;!-- 1. Add 'group' to the parent container --&gt;
&lt;div class="group p-6 bg-white hover:bg-brand-50"&gt;
  
  &lt;!-- 2. Use 'group-hover:' on the children! --&gt;
  &lt;h4 class="group-hover:text-brand-600"&gt;Pricing Plan&lt;/h4&gt;
  &lt;button class="bg-slate-200 group-hover:bg-brand-500"&gt;Select Plan&lt;/button&gt;

&lt;/div&gt;</code></pre>
                </div>

                <h2>2. The Peer Variant (Sibling -> Sibling)</h2>
                <p>When you want to style an element based on the state of its <em>sibling</em> (an element sitting right next to it), you add the <code>peer</code> class to the first element, and use <code>peer-hover:</code> or <code>peer-checked:</code> on the second element.</p>
                <p>This is commonly used for custom checkboxes and floating form labels.</p>

                <div class="demo-box w-full p-8 bg-slate-100 flex-col items-center">
                    <div class="flex items-center gap-4">
                        <!-- The Input is the 'peer' -->
                        <input id="terms" type="checkbox" class="peer w-6 h-6 accent-brand-500 cursor-pointer">
                        
                        <!-- The Label responds to the peer being checked -->
                        <label for="terms" class="text-slate-500 peer-checked:text-brand-600 peer-checked:font-bold transition-all cursor-pointer">
                            I agree to the terms and conditions
                        </label>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 20,
        title: "Dark Mode Implementation",
        content: `
            <div class="prose-custom">
                <h1>Dark Mode Implementation</h1>
                
                <p>Adding Dark Mode to a website used to take days of writing duplicate CSS files. With Tailwind, it takes seconds.</p>

                <h2>How to use Dark Mode</h2>
                <p>Simply prefix any class with <code>dark:</code>. That class will ONLY apply when the website is in dark mode.</p>
                
                <ul>
                    <li><code>bg-white dark:bg-slate-900</code> = White background in light mode, dark slate background in dark mode.</li>
                    <li><code>text-slate-800 dark:text-white</code> = Dark text in light mode, white text in dark mode.</li>
                </ul>

                <div class="demo-box flex-col w-full p-8 bg-slate-200 dark:bg-slate-800 transition-colors">
                    <div class="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl w-full max-w-md mx-auto transition-colors border border-slate-100 dark:border-slate-700">
                        <h4 class="text-2xl font-bold text-slate-900 dark:text-white transition-colors mb-2">Dark Mode Card</h4>
                        <p class="text-slate-500 dark:text-slate-400 transition-colors">Toggle the Dark Mode button in the header of this webpage to see this card automatically change its colors!</p>
                    </div>
                </div>

                <div class="code-wrapper w-full mt-4">
                    <div class="code-header"><span>HTML</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
                    <pre><code class="language-markup">&lt;div class="bg-white dark:bg-slate-900 rounded-2xl p-8"&gt;
  &lt;h4 class="text-slate-900 dark:text-white"&gt;Dark Mode Card&lt;/h4&gt;
  &lt;p class="text-slate-500 dark:text-slate-400"&gt;Description text&lt;/p&gt;
&lt;/div&gt;</code></pre>
                </div>

                <h2>Configuring Dark Mode</h2>
                <p>In your <code>tailwind.config.js</code> file, you configure how dark mode is activated.</p>
                <ul>
                    <li><strong>Media Strategy (Default):</strong> Tailwind automatically reads the user's Operating System preference (macOS/Windows settings).</li>
                    <li><strong>Class Strategy:</strong> You manually add a <code>class="dark"</code> to the <code>&lt;html&gt;</code> tag using JavaScript (which is what this course website is doing so you can toggle it with a button!).</li>
                </ul>
                
                <div class="code-wrapper">
                    <pre><code class="language-javascript">module.exports = {
  // Use the class strategy to enable manual toggles
  darkMode: 'class', 
  // ...
}</code></pre>
                </div>
            </div>
        `
    },
    {
        id: 21,
        title: "Transitions & Animations",
        content: `
            <div class="prose-custom">
                <h1>Transitions & Animations</h1>
                
                <div class="p-6 bg-pink-50 border-l-4 border-pink-500 rounded-r-lg mb-8">
                    <h3 class="text-pink-800 font-bold mt-0 mb-2">🎓 Semester 1 Note: The difference</h3>
                    <p class="text-pink-900 mb-0"><strong>Transitions</strong> occur when an element changes from State A to State B (e.g. changing color when hovered). <strong>Animations</strong> play automatically on a loop (e.g. a loading spinner).</p>
                </div>

                <h2>1. Transitions</h2>
                <p>To make a hover effect smooth instead of instant, you use transitions. You need three things:</p>
                <ol>
                    <li><code>transition-all</code> (or <code>transition-colors</code>): Tells the browser to animate changes.</li>
                    <li><code>duration-{ms}</code>: How long it takes (e.g., <code>duration-300</code> means 300 milliseconds).</li>
                    <li><code>ease-{type}</code>: The timing curve (e.g., <code>ease-in-out</code>).</li>
                </ol>

                <div class="demo-box w-full gap-8 p-10 bg-slate-50 flex-col md:flex-row">
                    <!-- Instant change -->
                    <div class="text-center">
                        <button class="bg-slate-300 hover:bg-brand-500 hover:text-white px-6 py-3 rounded font-bold">
                            Instant (No Transition)
                        </button>
                    </div>
                    
                    <!-- Smooth transition -->
                    <div class="text-center">
                        <button class="bg-slate-300 hover:bg-brand-500 hover:text-white px-6 py-3 rounded font-bold transition-all duration-500 ease-in-out">
                            Smooth (500ms)
                        </button>
                    </div>
                </div>

                <h2>2. Animations (Keyframes)</h2>
                <p>Tailwind comes with four built-in, infinitely looping animations:</p>
                <ul>
                    <li><code>animate-spin</code>: Great for loading icons.</li>
                    <li><code>animate-ping</code>: Great for notification dots.</li>
                    <li><code>animate-pulse</code>: Great for skeleton loading screens.</li>
                    <li><code>animate-bounce</code>: Great for "scroll down" arrows.</li>
                </ul>

                <div class="demo-box w-full justify-around p-10 bg-slate-800 text-white flex-wrap gap-8">
                    <div class="flex flex-col items-center gap-4">
                        <!-- Spin -->
                        <svg class="animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span class="text-sm font-mono">animate-spin</span>
                    </div>
                    
                    <div class="flex flex-col items-center gap-4">
                        <!-- Ping -->
                        <span class="flex h-4 w-4 relative">
                          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                          <span class="relative inline-flex rounded-full h-4 w-4 bg-rose-500"></span>
                        </span>
                        <span class="text-sm font-mono">animate-ping</span>
                    </div>
                    
                    <div class="flex flex-col items-center gap-4">
                        <!-- Pulse -->
                        <div class="animate-pulse h-8 w-24 bg-slate-500 rounded"></div>
                        <span class="text-sm font-mono">animate-pulse</span>
                    </div>

                    <div class="flex flex-col items-center gap-4">
                        <!-- Bounce -->
                        <svg class="animate-bounce w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                        <span class="text-sm font-mono">animate-bounce</span>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: 22,
        title: "Transforms & 3D Effects",
        content: `
            <div class="prose-custom">
                <h1>Transforms & 3D Effects</h1>
                
                <p>CSS Transforms allow you to scale, rotate, translate (move), and skew elements.</p>

                <h2>1. Scale (Grow / Shrink)</h2>
                <p>Use <code>scale-{amount}</code>. <code>scale-100</code> is normal size. <code>scale-110</code> is 10% larger. <code>scale-90</code> is 10% smaller.</p>

                <h2>2. Rotate</h2>
                <p>Use <code>rotate-{degrees}</code>. (e.g., <code>rotate-45</code>, <code>rotate-90</code>, <code>rotate-180</code>).</p>

                <h2>3. Translate (Move X/Y)</h2>
                <p>Use <code>translate-x-{amount}</code> or <code>translate-y-{amount}</code>. You can use negative numbers like <code>-translate-y-4</code> to move things up.</p>

                <div class="demo-box w-full gap-8 p-12 bg-slate-100 flex-wrap">
                    
                    <div class="flex flex-col items-center gap-4">
                        <div class="w-24 h-24 bg-brand-500 rounded-lg hover:scale-125 transition-transform duration-300 shadow-lg cursor-pointer"></div>
                        <span class="font-mono text-sm">hover:scale-125</span>
                    </div>

                    <div class="flex flex-col items-center gap-4">
                        <div class="w-24 h-24 bg-rose-500 rounded-lg hover:rotate-45 transition-transform duration-300 shadow-lg cursor-pointer"></div>
                        <span class="font-mono text-sm">hover:rotate-45</span>
                    </div>

                    <div class="flex flex-col items-center gap-4">
                        <div class="w-24 h-24 bg-amber-500 rounded-lg hover:-translate-y-6 hover:translate-x-4 transition-transform duration-300 shadow-lg cursor-pointer"></div>
                        <span class="font-mono text-sm text-center">hover:-translate-y-6<br>hover:translate-x-4</span>
                    </div>

                </div>

                <p><strong>Note:</strong> In traditional CSS, you had to write <code>transform: translateX(10px) rotate(45deg);</code> all in one string, which was annoying. Tailwind composes transforms automatically under the hood!</p>
            </div>
        `
    },
    {
        id: 23,
        title: "Filters & Backdrop Effects",
        content: `
            <div class="prose-custom">
                <h1>Filters & Backdrop Effects</h1>
                
                <div class="p-6 bg-cyan-50 border-l-4 border-cyan-500 rounded-r-lg mb-8">
                    <h3 class="text-cyan-800 font-bold mt-0 mb-2">🎓 Semester 1 Note: Photoshop in the Browser!</h3>
                    <p class="text-cyan-900 mb-0">CSS Filters allow you to apply graphical effects like blurring, color shifting, or greyscale directly in the browser without editing the image in Photoshop!</p>
                </div>

                <h2>1. Filters (Applies to the element itself)</h2>
                <ul>
                    <li><code>blur-sm</code>, <code>blur-md</code>: Blurs the element.</li>
                    <li><code>grayscale</code>: Turns the element black and white.</li>
                    <li><code>invert</code>: Inverts the colors.</li>
                    <li><code>sepia</code>: Applies a vintage yellow-brown tone.</li>
                </ul>

                <div class="demo-box w-full gap-4 p-8 bg-slate-800 flex-wrap justify-around">
                    <div class="flex flex-col items-center gap-2">
                        <img src="https://images.unsplash.com/photo-1506744626753-1fa44df31c78?auto=format&fit=crop&w=200&h=200&q=80" class="w-32 h-32 rounded-xl object-cover">
                        <span class="text-white font-mono text-xs">Normal</span>
                    </div>
                    <div class="flex flex-col items-center gap-2">
                        <img src="https://images.unsplash.com/photo-1506744626753-1fa44df31c78?auto=format&fit=crop&w=200&h=200&q=80" class="w-32 h-32 rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
                        <span class="text-white font-mono text-xs">grayscale (Hover me)</span>
                    </div>
                    <div class="flex flex-col items-center gap-2">
                        <img src="https://images.unsplash.com/photo-1506744626753-1fa44df31c78?auto=format&fit=crop&w=200&h=200&q=80" class="w-32 h-32 rounded-xl object-cover blur-sm">
                        <span class="text-white font-mono text-xs">blur-sm</span>
                    </div>
                </div>

                <h2>2. Backdrop Filters (The "Glassmorphism" Effect)</h2>
                <p>Backdrop filters are different. They don't blur the element itself; they blur the <strong>background behind the element</strong>. This is how you create beautiful frosted glass ("Glassmorphism") interfaces!</p>
                
                <p>To use it, you need <code>backdrop-blur-{size}</code> combined with a semi-transparent background color (<code>bg-white/30</code>).</p>

                <div class="demo-box w-full p-12 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center">
                    
                    <!-- Frosted Glass Card -->
                    <div class="w-full max-w-sm mx-auto p-8 bg-white/20 backdrop-blur-md border border-white/40 rounded-2xl shadow-2xl">
                        <h4 class="text-white font-bold text-2xl mb-2 drop-shadow-md">Glassmorphism</h4>
                        <p class="text-white/90 font-medium">This beautiful frosted glass effect is created using backdrop-blur-md.</p>
                        <button class="mt-6 w-full bg-white/30 hover:bg-white/40 text-white font-bold py-3 rounded-xl backdrop-blur-sm transition-all border border-white/50">
                            Explore
                        </button>
                    </div>

                </div>

                <div class="code-wrapper w-full mt-4">
                    <div class="code-header"><span>HTML</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
                    <pre><code class="language-markup">&lt;!-- 1. Semi-transparent background: bg-white/20 --&gt;
&lt;!-- 2. The blur effect: backdrop-blur-md --&gt;
&lt;!-- 3. A subtle white border to catch the light: border border-white/40 --&gt;
&lt;div class="bg-white/20 backdrop-blur-md border border-white/40 rounded-2xl p-8"&gt;
  ...
&lt;/div&gt;</code></pre>
                </div>
            </div>
        `
    },
    {
        id: 24,
        title: "Arbitrary Values & Custom Utilities",
        content: `
            <div class="prose-custom">
                <h1>Arbitrary Values & Custom Utilities</h1>
                
                <div class="p-6 bg-slate-800 border-l-4 border-slate-500 rounded-r-lg mb-8 text-white">
                    <h3 class="text-white font-bold mt-0 mb-2">🎓 Semester 1 Note: Breaking out of the scale</h3>
                    <p class="text-slate-300 mb-0">Tailwind gives you a predefined design system (like w-4, w-8). But what if you need an exact, pixel-perfect value that doesn't exist in Tailwind? (Like exactly 117px). That's where Arbitrary Values come in!</p>
                </div>

                <h2>1. The Square Bracket Notation <code>[]</code></h2>
                <p>If you need a highly specific value, you don't need to write custom CSS or edit the Tailwind config file. Just put the exact value inside square brackets!</p>

                <ul>
                    <li><code>w-[117px]</code>: Width is exactly 117 pixels.</li>
                    <li><code>bg-[#bada55]</code>: Background color is exactly hex #bada55.</li>
                    <li><code>top-[15%]</code>: Absolute positioning 15% from the top.</li>
                    <li><code>grid-cols-[200px_minmax(900px,_1fr)_100px]</code>: Complex CSS grid definitions!</li>
                </ul>

                <div class="demo-box w-full gap-4 p-10 bg-slate-100 flex-col md:flex-row">
                    <div class="h-[73px] w-[219px] bg-[#8b5cf6] text-white flex items-center justify-center font-bold rounded-[11px] shadow-[0_10px_30px_-5px_rgba(139,92,246,0.5)]">
                        Exactly 219px wide!
                    </div>
                </div>

                <div class="code-wrapper w-full mt-4">
                    <div class="code-header"><span>HTML</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
                    <pre><code class="language-markup">&lt;!-- Crazy specific arbitrary values --&gt;
&lt;div class="h-[73px] w-[219px] bg-[#8b5cf6] rounded-[11px] shadow-[0_10px_30px_-5px_rgba(139,92,246,0.5)]"&gt;
  ...
&lt;/div&gt;</code></pre>
                </div>

                <h2>2. Arbitrary Properties</h2>
                <p>What if you need a CSS property that Tailwind doesn't have a class for at all? For example, <code>clip-path</code>?</p>
                <p>You can write the full CSS property and value inside square brackets!</p>
                
                <div class="code-wrapper w-full mt-4">
                    <div class="code-header"><span>HTML</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
                    <pre><code class="language-markup">&lt;div class="[clip-path:circle(50%_at_50%_50%)] bg-blue-500 w-32 h-32"&gt;&lt;/div&gt;</code></pre>
                </div>

                <div class="demo-box w-full p-10 bg-slate-100">
                    <div class="[clip-path:polygon(50%_0%,_0%_100%,_100%_100%)] bg-brand-500 w-32 h-32"></div>
                </div>

                <h2>Conclusion</h2>
                <p>You have now reached the end of the Tailwind CSS Masterclass! You are now equipped with the knowledge to build beautiful, responsive, and maintainable user interfaces at lightning speed. Go build something amazing!</p>
            </div>
        `
    }
];
