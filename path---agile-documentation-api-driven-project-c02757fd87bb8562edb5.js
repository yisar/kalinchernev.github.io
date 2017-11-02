webpackJsonp([62944401183182],{447:function(e,t){e.exports={data:{markdownRemark:{frontmatter:{title:"Agile documentation for your API-driven project",date:"2017-01-21T22:00:00.000Z",image:"",tags:["APIs","web development","Open APIs","Swagger","nodejs"]},html:'<p><em>Based on <a href="https://www.openapis.org/">Open API standards</a></em></p>\n<blockquote>\n<p>“Documentation is like sex; when it’s good, it’s very, very good, and when it’s bad, it’s better than nothing.” — Dick Brandon</p>\n</blockquote>\n<p>The goal of this article is to inspire improved workflows for building and maintaining documentation for API-driven projects. In the end of the story, you will hopefully try out new approaches of documenting your code. As such, it automatically increases the value of your work through making it more maintainable and re-usable in less time and efforts.</p>\n<h3 id="introduction"><a href="#introduction" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Introduction</h3>\n<p><a href="http://swagger.io/">Swagger</a> is one of the most popular and widely adopted specifications for RESTful APIs. In fact, the specification got off so well that <a href="http://swagger.io/open-source-integrations/">numerous community tools</a> are available. Also, the <a href="https://www.openapis.org/">Open API initiative</a> was born as a result of successful projects that use these tools basing on this specification in one way or another.</p>\n<p>With the <a href="https://www.google.com/trends/explore?q=swagger%20api">raise of popularity</a> in 2016, leading experts started sharing advice on as <a href="https://scotch.io/tutorials/speed-up-your-restful-api-development-in-node-js-with-swagger">speeding the development phase with Swagger</a> and later making a <a href="https://scotch.io/tutorials/document-your-already-existing-apis-with-swagger">good documentation of an existing API</a>, again same spec being involved. These are few examples of well-written tutorials demonstrating benefits of having an API and a good toolchain, and documentation around it. There are <a href="https://egghead.io/courses/build-node-js-apis-with-openapi-spec-swagger">more</a>, of course, and I think this trend will stay solid for the next couple of years. That’s because the Open API specification makes sense just enough to empower developers and business people to have a common language of how an interface should work. It is as a contract of communication and data format between humans and machines.</p>\n<p>In summary, the Swagger specification brings several clear advantages:</p>\n<ul>\n<li>We can <a href="http://editor.swagger.io/#/">write project specification</a> in <code>yaml</code> or \n<code>json</code> formats. The <code>yaml</code> one is probably closer to humans, which is really nice.\n(Yes, there are UI programs for that as well ;)</li>\n<li>We can <a href="http://swagger.io/swagger-codegen/">generate server and client code automatically</a>, because when the specification is solid, the tools are solid too.</li>\n<li>We can also <a href="http://swagger.io/swagger-ui/">generate live documentation</a> based on the same project specification. This is particularly useful and that’s why I’ll expand more on about this subject in this article.</li>\n<li>We can program in many languages and the result of our work will stay alive longer, because it conforms to a server &#x3C;-> client “contract”. Meaning, as long as you can make a swagger specification out of you work, you can move from one technology stack to another.</li>\n</ul>\n<p>Node.js is a popular choice for building the server part of applications, but it’s not the only one. The knowledge you can get from this article is transferable to almost any programming language.</p>\n<hr>\n<h3 id="what-makes-a-good-api-documentation"><a href="#what-makes-a-good-api-documentation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What makes a good API documentation</h3>\n<p>Let’s now expand on the subject of having an effective documentation. There are many ways to document your software (and API), still, there are few major points which you have to cover to make it right. There is a common denominator of what makes one documentation better than another.</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*RV0AOyBUcpJ7vS1TuSx2ag.png" alt="picture telling you to stop the documentation uglyness"></p>\n<h4 id="auto-generation"><a href="#auto-generation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Auto-generation</h4>\n<p>I think that is the most important one. Writing documentation should take the least amount of time and efforts, and should minimize the maintenance.</p>\n<p>You have to find a good way to write the least amount of textual explanations for your API, which yields the highest value of practical guidelines for the user of the documentation.</p>\n<h4 id="include-examples"><a href="#include-examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Include examples</h4>\n<p>I speak from my personal experience here — it’s really pleasing when the documentation does not make me think too much. My advice: include some sample request objects, or some code samples, etc.</p>\n<p>As a consumer or a developer of the API, I want to have a quick-gratification access to something that I use and it just works directly. Rarely I want to open my <a href="https://advancedrestclient.com/">advanced REST client</a> or <a href="https://curl.haxx.se/docs/">curl</a> while reading API documentation because it takes off my attention and is basically forcing me to get out of the page I’m reading in order to have “the real feeling” about how something works.</p>\n<h4 id="portable"><a href="#portable" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Portable</h4>\n<p>That is a feature I consider equally important for an effective piece of documentation. This is when the auto-generated code can be either displayed as a page or an embedded window of information. It also means that the result of your documentation is re-usable.</p>\n<p>If you are a JavaScript developer reading this, you will know that how fascinating the number of possible view frameworks solutions are. One day we have to make a simple page with Bootstrap, then with React.js, Angular.js, Vue.js, etc. No matter the framework or the tool, integrating documentation in an app has to be as easy as an instantiation. (In order to keep the spirit of high productivity and low maintenance costs mentioned in one of the previous points)</p>\n<h4 id="swagger-ui-comes-to-the-rescue"><a href="#swagger-ui-comes-to-the-rescue" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Swagger UI comes to the rescue</h4>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*dt246jpThKkFh7TPUva-9A.png" alt="image of the swagger ui taken as an example"></p>\n<p>Swagger UI is a widely-adopted solution to the problems above. The only drawback being that the markup generated by the tool is not <a href="http://getbem.com/introduction/">BEM</a>-ish or anything like this, thus preventing front-end developers to make really nice themes on top of the solution. (although it’s <a href="http://meostrander.com/swagger-ui-themes/">partially going on</a>)</p>\n<p>When you look at the <a href="http://petstore.swagger.io/#/">demo</a> (or the editor), you will notice that there are similarities in the information presented.</p>\n<p>Each endpoint of the API that is documented contains:</p>\n<ul>\n<li>Short description (the textual explanation we usually over-do)</li>\n<li>Example samples of request bodies, options to change request types, etc.</li>\n<li>Opportunity to try out the request &#x3C;-> response operation</li>\n</ul>\n<p>On top of that, swagger-ui documentation is auto-generated based on a simple <code>yaml</code> or\n<code>json</code> swagger specification file. That is super-nice, because the specification that a business person writes or configures through an UI can serve as both a contract AND live documentation!</p>\n<hr>\n<h3 id="we-can-do-better-than-that"><a href="#we-can-do-better-than-that" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>We can do better than that</h3>\n<p>Yes! Even after following popular tools and tutorials, I felt there is room for improvement. Mainly — writing the documentation itself.</p>\n<p>See, the problem of writing a single specification file and then using tools to generate the documentation is easy until the maintenance comes into play. Imagine that the </p>\n<p>yaml spec is maintained by the same developer or development team that is responsible for the API endpoints of the app server. Surely, there will be back and forth between the specification file and the code files that contain the actual implementation. It takes extra time and efforts to stay focused while jumping between editors and making sure that both resources are well-matched.</p>\n<p>In my opinion, the process of “specification > development > documentation > implementation” can improve. Namely, it is possible to do all them at once.</p>\n<p>How? By writing swagger specification in the documentation blocks of our code and plugging watch tasks in-between! Yes, the specification might still be in ownership of another one, not the developer. But even then — what if can just see live documentation based on the comments we’re placing in our code? Wouldn’t it be a motivating factor to write better in-code documentation? What is more, wouldn’t it be easier for developers to maintain both the code and the documentation of endpoints where the two are just next to each other?</p>\n<p>Look at the following piece of code:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment" spellcheck="true">/**\n * @swagger\n * /login:\n *   post:\n *     description: Login to the application\n *     produces:\n *       - application/json\n *     parameters:\n *       - name: username\n *         description: Username to use for login.\n *         in: formData\n *         required: true\n *         type: string\n *       - name: password\n *         description: User&apos;s password.\n *         in: formData\n *         required: true\n *         type: string\n *     responses:\n *       200:\n *         description: login\n */</span>\napp<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&apos;/login&apos;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token operator">...</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>As you might have already guessed, this is a sample from <a href="https://github.com/Surnet/swagger-jsdoc">swagger-jsdoc</a>which takes the contents of the text after \n<code>@swagger</code> and parses the contents of the <a href="http://usejsdoc.org/">jsdoc</a> documentation into a <a href="http://swagger.io/specification/">swagger specification</a>. This specification can be then visualized, for example, like this:</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*K0swMwFEVHWqtcXnkxf0zg.png" alt="nice swagger picture"></p>\n<p>It’s true that I made the screenshot from the built of the example, not from this tiny sample, but you get the point ;) (Continue reading and you will see much nicer interface of the same info)</p>\n<p>Since I’m looking to improve this workflow even further (and make it more fun for developers to use the tool), I recently suggested a watch task in <code>swagger-jsdoc</code> command line tool that works just like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>$ swagger-jsdoc -d swaggerDefinition.js routes.js routes2.js -w\n</code></pre>\n      </div>\n<p>In this case, after having a generated <code>swagger.json</code> the command line will continue listening for changes in <code>routes.js</code> and <code>routes2.js</code> and then re-generate the specification <code>swagger.json</code> on updates.</p>\n<p>Also recently, the command line tool got a new feature to output <code>yaml</code> if the <code>-o</code> flag is used like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>$ swagger-jsdoc -d swaggerDefinition.js apis.js -o swagger.yaml\n</code></pre>\n      </div>\n<p>In this case, <code>apis.js</code> will be searched for <code>@swagger</code> tags, but the parsed specification will be written to <code>swagger.yaml</code> file.</p>\n<p>Having the <code>swagger.json</code> or <code>swagger.yaml</code> specification at this moment is a nice start. This file is the key re-usable resource that can be integrated with other tools such as <code>swagger-ui</code> which visualize the “soul” of the API in nice UI interfaces.</p>\n<hr>\n<h3 id="improved-api-documentation-workflow"><a href="#improved-api-documentation-workflow" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Improved API documentation workflow</h3>\n<p></p>\n<p>Some time ago, an article about <a href="https://javascriptkicks.com/stories/94009/watching-file-changes-with-npm-scripts">watching files changes with npm scripts got popular</a>. I believe there is a reason why comments are not possible under the original article, but never mind, it got me on the path of researching the <a href="https://nodejs.org/docs/latest/api/fs.html#fs_fs_watch_filename_options_listener">fs.watch()</a> and its behavior. After experimentation I reached to prefer <a href="https://www.npmjs.com/package/chokidar"><code>chokidar</code></a> which is a module improving the <code>fs.watch()</code> interface. In fact, I liked <code>chokidar</code> so much that I took the opportunity to suggest a <a href="https://github.com/Surnet/swagger-jsdoc/releases/tag/v1.9.0">new feature in the CLI tool of</a> <a href="https://github.com/Surnet/swagger-jsdoc/releases/tag/v1.9.0"><code>swagger-jsdoc</code></a> which is, duh, a watch task working with the API files. (Briefly mentioned in the previous chapter)</p>\n<p>The <code>chokidar</code> module is also an integral part of the <a href="https://www.npmjs.com/package/browser-sync"><code>browser-sync</code></a> module which, in turn, an already mature and battle-tested piece of software. It is widely adopted in various products and projects to increase development experience and productivity.</p>\n<p>Having this understanding, I saw another opportunity — making a simple integration between instruments which integrate the <code>chokidar</code> module. I only needed a better understanding of <a href="http://swagger.io/swagger-ui/">Swagger UI</a> which is the “glue”, or the “contract”, between the back-end server side (the API) and the front-end (client) side. I feel it’s comfortable (and smart) that the documentation pages are the first-hand client and consumer of the API. Also, I believe that this consumer should be easy to make and maintain, but still really nice-looking, so that there is something pleasant for our paying clients to see. With <code>browser-sync</code> Swagger UI got a bit more fun to work with.</p>\n<p>In order to demonstrate the idea better in visual and kinesthetic way, I created a <a href="https://github.com/kalinchernev/agile-open-api-docs">supplementary repository</a>. It contains examples of the first approach that came to my mind keeping <a href="https://en.wikipedia.org/wiki/KISS_principle">the KISS principle</a>. Basically, there are few npm scripts that make the system work together.</p>\n<p>First, you can have a look at <a href="https://github.com/kalinchernev/agile-open-api-docs/blob/master/package.json">the</a> <a href="https://github.com/kalinchernev/agile-open-api-docs/blob/master/package.json"><code>package.json</code></a> <a href="https://github.com/kalinchernev/agile-open-api-docs/blob/master/package.json">manifest</a>. Tasks are separated in two main categories: tasks for the server side (the API) and tasks related to the documentation. For the API development part, <code>npm run api</code> fires a server with <code>nodemon</code> and <code>swagger-jsdoc</code> As a result, any changes in the <code>api/</code> folder trigger server restart and re-generation of <code>swagger.json</code> specification which goes to <code>api-docs/</code> folder.</p>\n<p>Secondly, the <code>npm run docs:develop</code> task fires a <code>browser-sync</code> server for the client side serving the <code>api-docs/</code> folder which receives automatically updated <code>swagger.json</code> specification from the previous task. You can run those two tasks in separate terminal sessions or just create another parallel task following the examples of the <code>package.json</code> file with <code>npm-run-all</code>.</p>\n<p>At this stage, you can freely update both the server and client sides of your project having near real-time feedback and results visible in the browser.</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*6bMTxVkYaUEEjyqpeiXBRA.png" alt="Nice interface of the generated documentation"></p>\n<p>You might be wondering — why isn’t this the interface of Swagger UI I am used to seeing around! What happened? Well, I used a <a href="https://github.com/jensoleg/swagger-ui">fork which looks nicer</a>. Here’s an <a href="http://swaggerui.herokuapp.com/?url=http://petstore.swagger.io/v2/swagger.json#!/pet/addPet">online demo</a> which you can play with to get the feeling of what your documentation may look like after you enjoyably use <code>swagger-jsdoc</code> and <code>browser-sync</code> as shown in <a href="https://github.com/kalinchernev/agile-open-api-docs/blob/master/package.json">this repository.</a></p>\n<p>The same workflow is possible with other file extensions such as <code>.php</code> just changing the input parameters and removing the binding to the <code>nodemon</code> server restart task, so that another standalone server is used instead. Here’s an example taken from a recent pull request which was included in <code>swagger-jsdoc</code> to parse swagger documentation to <code>yaml</code> output.</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*W72Xll_3kHjiCtNkb7U3qg.png" alt="swagger-jsdoc with php projects"></p>\n<hr>\n<h3 id="deployment"><a href="#deployment" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Deployment</h3>\n<p>I have intentionally left out the deployment part out of this story, because I believe there are many good options on the market and it really depends on the personal preferences how to manage this part of the process. For example, you can follow the scotch.io tutorial mentioned earlier to place the docs on heroku, or you can also include an npm script which works with <a href="https://github.com/tschaub/gh-pages"><code>gh-pages</code></a> to deploy the assets directly to your repository, etc. The main thing is that the <code>api-docs</code> folder is already built and ready to be deployed as-is.</p>\n<p>Myself, I plan to experiment with <a href="https://cloudplatform.googleblog.com/2016/09/manage-your-APIs-with-Google-Cloud-Endpoints.html">Google Endpoints</a> in near future although it’s a new service. That’s because it supports the <a href="https://cloud.google.com/endpoints/docs/open-api-spec">Open API specification</a> and provides flexible options on deployment for both the API and the documentation on reasonable terms. An interesting point to notice is that the service guidelines show deployment only of the swagger/openapi specification file which can be generated by the <code>swagger-jsdoc</code> This is a good example of re-using single specification for multiple purposes.</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*QHvYcf7gyUyIwNlBo-jHTQ.png" alt="swagger to open api specification transition"></p>\n<hr>\n<h3 id="conclusions"><a href="#conclusions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Conclusions</h3>\n<p>Writing this article and sharing some code around it, I’m integrating tools that solve problems which have already been under the radar of the <a href="https://medium.com/@apievangelist">API Evangelist</a> such as <a href="https://apievangelist.com/2015/02/02/we-need-better-api-documentation-and-ui-deployment-options/">the need of better API documentation and UI deployment</a> which was later followed up by findings about <a href="https://apievangelist.com/2015/06/27/the-responsive-swagger-driven-version-of-slate-api-documentation-i-was-looking-for/">improved Swagger UI design solution</a>. Few months ago, there was also a <a href="https://apievangelist.com/2016/09/16/learning-from-the-success-of-swagger-ui/">reflection article about the success of Swagger UI</a>.</p>\n<p>I hope that this article has inspired you to consider some new ways to improve your documentation workflows for your API project. I know that the idea of automated documentation generation with swagger tools is not new. Rather, I aim to introduce some new ideas on solving the problems which have been around on topic for a while with the tools available today to improve productivity.</p>\n<p>The tools shown in <a href="https://github.com/kalinchernev/agile-open-api-docs">the repository</a> are free and vendor-neutral and the documentation build can be deployed to any place which serves you best. So, I encourage you to further experiment with the code and adapt it to work best for your specific needs.</p>\n<p><em>If you think this article was helpful, then consider making a comment, a share or a ❤</em></p>'}},pathContext:{slug:"agile-documentation-api-driven-project"}}}});
//# sourceMappingURL=path---agile-documentation-api-driven-project-c02757fd87bb8562edb5.js.map