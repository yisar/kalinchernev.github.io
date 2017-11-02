webpackJsonp([0xdb9ce3fb43f9],{468:function(e,t){e.exports={data:{markdownRemark:{frontmatter:{title:"March digest 2017",date:"2017-03-30T22:00:00.000Z",image:"",tags:["Web Development","JavaScript","JAM stack","Medium"]},html:'<p>This one will be on various personal thoughts on Medium, the JAM stack, the OpenAPI specification, and coding katas.</p>\n<h3 id="medium"><a href="#medium" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Medium</h3>\n<p>If you’re a regular reader or writer on Medium, you already know about the <a href="https://medium.com/3minread">latest changes</a>. Together with the new features, a <a href="https://help.medium.com/hc/en-us/articles/115004750267-Medium-Membership-Partner-Program-FAQ">partner program</a> came into play, where companies and vendors will be more motivated to publish content about their products and services.</p>\n<p>Being a small fish without financial interests in blogging (at least here and now), I decided to research new channels of communicating my ideas out of Medium. As a casual happy writer, I really wish Medium best of luck in their search of even more and better ways of monetizing their great platform and continue connecting deep thinkers.</p>\n<p>Medium is aiming to solve problems at large scale for businesses and important individuals in the mission of un-breaking the internet and the publishing again. As a technical blogger, I’m interested in achieving smaller goals:</p>\n<ul>\n<li><strong>I want to share about my wider “deep” thinking working with various technologies and tools</strong>. I am not vendor-interested in this communication channel. I’m more into experimenting with many tools and using only a few, later sharing my findings from hands-on work. For this, I can place my thoughts anywhere I decide to — I lately admire <a href="https://dev.to/">dev.to</a> which feels like “the right place to be” — but the editor is not as easy as in Medium. So yeah, I can just do the markdowns in a static site generator and re-post wherever …</li>\n<li><strong>I want to be part of a community somehow.</strong> Here at Medium, things tend to happen naturally. For example, I post <a href="https://medium.com/@kalin.chernev/the-guide-to-learn-graphql-i-wish-i-found-few-months-go-97f9d9ca6f12">a story about GraphQL</a> which reaches 1.5k visitors, 7 of which come <a href="http://dev-blog.apollodata.com/" title="dev-blog.apollodata.com">dev-blog.apollodata.com</a>. I mean, that’s amazing — If I hadn’t shared my short notes on Medium, no-one using or reading about Apollo would have ever have visited my blog post. For this, I plan on <a href="https://disqus.com/">disqus</a> integration which seems straight-forward and covering this “business requirement”.</li>\n<li><strong>I want my code to look really good, and I want it to be more interactive.</strong> This comes simply from the fact that I write mostly about code, so I want it to look nice. Medium allows effective snippets placement and github gists, yet there are many nice-looking styling options for code parsed out of markdown. Having control over the parsed version of your writing is an advantage in some aspects.</li>\n<li><strong>I want to have statistics.</strong> Medium provides stats on each story and it’s really useful to have a global idea what’s going on. For the same GraphQL article I mentioned above, over 1k of the visits come from flipboard.com. That’s all I know as my application request to have a publication with Google Analytics required a payment I got informed a month after making the application. No Google Analytics on Medium unless you are having business goals. I think I’ll manage to integrate Google Analytics in my new stack without 70 dollars for the infrastructure.</li>\n</ul>\n<p>At the moment, I’ve jotted just a few high-level milestones in the upcoming digital transformation …</p>\n<h3 id="jam-stack"><a href="#jam-stack" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JAM stack</h3>\n<p>As Medium evolves, as my interests into improving the ways of expressing my casual tech thoughts in writing. Researching on some of the nerdiest ways I can make a blog for myself — the JAM stack came into light. The <a href="https://jamstack.org/">JAM stack</a> is an acronym of having JavaScript, APIs and Markup. It’s absolutely revolutionary — I mean — nobody ever though so far in history that the web could handle HTML, CSS and JavaScript in such ways. (That’s ironic) The stack is tightly related to the topic of <a href="https://www.staticgen.com/">static sites generators</a>.</p>\n<ul>\n<li>The <strong>J</strong> will maybe be in React. At this stage, I’ve found a decent <a href="https://www.packtpub.com/web-development/mastering-react">book to follow</a> on the way. At any case, investing into learning React will pay much better for me rather than writing new articles on a platform which can change its business goals tomorrow and just go offline.</li>\n<li>The <strong>A</strong> will be the <a href="https://developer.github.com/v3/">github API</a>. With inspirations from <a href="https://www.netlifycms.org/">netlifycms</a>, a well-known <a href="https://www.netlifycms.org/docs/editorial-workflow/">git flow translates to my upcoming publishing workflow</a>.</li>\n<li>The <strong>M</strong> part of the stack — I didn’t manage to decide upon this yet as the trends are moving too fast.</li>\n</ul>\n<p>So cool this is, google will show you a <a href="https://www.kickstarter.com/projects/846364129/jamstack-the-worlds-first-attachable-guitar-amplif?lang=fr">kickstarter campaign for the jam stack</a> and there is a song to play while working:</p>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 56.25%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe src="https://www.youtube.com/embed/oFRbZJXjWIA?rel=0" frameborder="0" allowfullscreen style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n          </div>\n          </div>\n<h3 id="open-api-specification"><a href="#open-api-specification" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Open API specification</h3>\n<p>In this month, I wrote a story about <a href="https://restful.io/prototyping-your-api-project-with-the-open-api-specification-and-node-js-tools-7cb19f47f72d">prototyping with the OpenAPI specifcation</a>. It’s describing some techniques using the <a href="https://github.com/Rebilly/generator-openapi-repo">generator-openapi</a> — made by the team of <a href="https://apis.guru/">APIs.guru</a> — really nice product to use!</p>\n<p>I’m personally impressed by the community progress made around v3 of the latest spec. A release candidate was published in the beginning of the month, and various software packages literally sprouted in weeks.</p>\n<p>I think there are mainly few links to follow the fast progress:</p>\n<ul>\n<li><a href="http://openapi.toolbox.apievangelist.com/">OpenAPI toolbox</a></li>\n<li><a href="https://github.com/mermade/awesome-openapi3">Unofficial awesome list</a></li>\n<li><a href="https://github.com/OAI/OpenAPI-Specification">The github repository</a></li>\n</ul>\n<p>In the awesome list, there are few tools I hadn’t seen before. They seem to be made in quite a different way than the swagger-ui and swagger-editor, etc. that still keep popular positions in the toolbox.</p>\n<p>Another good news this month for fans of the OpenAPI initiative was the <a href="https://github.com/swagger-api/swagger-editor/releases/tag/v3.0.0">v3 release of the swagger-editor</a> which brought a warmly-welcomed auto-suggest feature:</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*n9qpZymZykXOuG9zxdUryQ.png" alt="Nice autocomplete feature of the swagger editor"></p>\n<h3 id="coding-katas"><a href="#coding-katas" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Coding katas</h3>\n<p>The first competitive learning event (coding battle) from the Hack League team took place.</p>\n<p><img src="https://cdn-images-1.medium.com/max/800/1*aqpQIY4DURgBoYGJTDyIQg.jpeg" alt="An image from the hack event"></p>\n<p>It was my first event since a very long time, so I could see some new people and technologies during the event :)</p>\n<p>As organizers mentioned, the <a href="http://git.hackleague.io/root/cb-2017-03-20">problems of the competition</a> are open after the event and you are encouraged to see them and get encouraged to join the next event :)</p>\n<p>I think (and I feel) that the problems are not the most complex thing you can see as a developer, but they definitely get closer to testing developers’ shape in solving problems fast and with confidence in the small steps.</p>\n<p>As I really suck at making small steps really fast, I’m trying to get into the habit making regular exercise at <a href="https://www.codewars.com">codewars.com</a> with the idea of improving shape through <a href="https://en.wikipedia.org/wiki/Kata">katas</a>. This is not a radically new idea for me, as there are the <a href="http://es6katas.org/">ES6katas</a> teaching TDD as codewards and <a href="https://nodeschool.io/">nodeschool</a> which provides various exercises for developers. (If you really enjoy them, you can give me a hand at the <a href="https://github.com/workshopper/stream-adventure/issues">stream-adventure workshopper</a> and I promise quick reviews and quick contribution gratification)</p>\n<p>I believe in the important of taking care of my coding shape. I think it’s similar to doing sports and exercising or playing musical instruments. The tricky part being that <a href="https://hackhands.com/dont-code-katas/">programmers tend to overthink it sometimes</a> …</p>'}},pathContext:{slug:"march-digest-2017"}}}});
//# sourceMappingURL=path---march-digest-2017-95f4f34be43e2b40f75f.js.map