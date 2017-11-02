webpackJsonp([0x6d99eea25417],{471:function(e,t){e.exports={data:{markdownRemark:{frontmatter:{title:"From personal computers to personal assistants",date:"2017-05-08T22:00:00.000Z",image:"/images/bot-assistant.jpg",tags:["Bots","Assistants","Apps"]},html:'<p>The <a href="https://www.fbf8.com/">F8 event</a> took place recently and I managed to watch a video about\n<a href="https://developers.facebook.com/docs/messenger-platform">the messenger platform</a>. Since it was during the Easter holidays, I also had few hours to make a simple chat bot for Facebook. Since then, I touched upon few of the topics around\nthe growing popularity of the so called <a href="http://www.crn.com/slide-shows/components-peripherals/300083432/10-cool-smart-home-assistants-at-ces-2017.htm">home assistants</a>. In this article I\'ll summarize some of the corners stones I found.</p>\n<h3 id="making-a-chat-bot-this-time-on-facebook"><a href="#making-a-chat-bot-this-time-on-facebook" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Making a chat bot, this time on Facebook</h3>\n<p>For me the story began with <a href="/coding-battle-microsoft-innovation-center">a coding event</a>\nat Microsoft almost an year ago when I "met" LUIS for the first time. Later, there was <a href="https://chatbotslife.com/building-a-chat-bot-who-understands-emotions-though-your-selfies-e9fa7cc4b627">the selfie chat bot</a>, which was fun and also easy to make. So, trying the messenger platform was easy and smooth experience. Here\'s a very short story of this journey:</p>\n<ul>\n<li>There\'s quite some tokens to be generated.</li>\n<li>I learned <a href="https://ngrok.com/">ngrok</a> a bit better.</li>\n<li>I found that all this can be much easier with <a href="https://api.ai/">api.ai</a>.</li>\n</ul>\n<p>Even though api.ai saves a lot of time in the setup of a chat bot for many platforms, it\'s still useful to go through the long configuration options in facebook in order to have a good idea about the possibilities.</p>\n<p>A bit of an inconvenience it is that one has to make a page for the bot to live. Probably that will change with time. Follow <a href="https://developers.facebook.com/docs/messenger-platform/guides/quick-start">this guide</a> to see what I talk about.</p>\n<h3 id="technical-implementation-of-chat-bots"><a href="#technical-implementation-of-chat-bots" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Technical implementation of chat bots</h3>\n<p>If you are like me and you have reached this far to have setup 1 or 2 chat bots, a normal question to ask would be - what are the other platforms to build chat bots only with configuration? In the end, if it\'s so easy to make a bot for facebook, then probably there are other services right?</p>\n<p>You can bet:</p>\n<ul>\n<li><a href="https://wit.ai/">wit.ai</a> - owned by Facebook since <a href="https://www.crunchbase.com/organization/wit-ai#/entity">5th January 2015</a></li>\n<li><a href="https://api.ai/">api.ai</a> - owned by Google since <a href="https://www.crunchbase.com/organization/api-ai#/entity">19th September 2016</a> - Google Assistant which is integrated with this was announced in <a href="https://en.wikipedia.org/wiki/Google_Assistant">May 2016</a></li>\n<li><a href="https://www.luis.ai/home/index">LUIS</a> by Microsoft</li>\n<li><a href="https://rasa.ai/">rasa.ai</a> by <a href="https://golastmile.com/">LASTMILE</a></li>\n</ul>\n<p>Can\'t help but putting <a href="https://darvin.ai/">Darvin.ai</a> close to this list as well, as it\'s made in Bulgaria :)</p>\n<p>All these share similar goals and ideas:</p>\n<ul>\n<li>Create a bot that takes input of human speech.</li>\n<li>Apply some NLP (natural language processing) or/and NLU (natural language understanding).</li>\n<li>Extract entities, sentiments, etc. out of the human input of information.</li>\n<li>Return information or call an API webhook to do some action based on the context.</li>\n</ul>\n<p>Depending on your language needs, level of interests in the subjects and needs for privacy, you can go either way. Basically, the "brain" of the <code>.ai</code> is a cloud service communicating with clients via REST APIs, so that the intelligence can be reused in many ways.</p>\n<p>Here\'s an example of using <a href="https://www.slideshare.net/PaulPrae/azure-as-a-chatbot-service-from-purpose-to-production-with-a-cloud-bot-architecture">Microsoft stack</a></p>\n<p></p>\n<blockquote>\n<p>“Over the past decades computers have broadly automated tasks that programmers could describe with clear rules and algorithms. Modern machine learning techniques now allow us to do the same for tasks where describing the precise rules is much harder.” - <a href="https://futurism.com/amazon-ceo-perfectly-explains-ai-just-two-sentences/">Jeff Bezos</a></p>\n</blockquote>\n<h3 id="chat-bots--personal-assistants"><a href="#chat-bots--personal-assistants" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Chat bots => Personal Assistants</h3>\n<p>In a recent <a href="https://www.meetup.com/Brussels-chatbot-Meetup/events/238677762/">chatbot meetup</a> <a href="https://www.meetup.com/Brussels-chatbot-Meetup/members/224607756/">Frédéric Feytons</a> made few points which resonated in me for a while. Here\'s a short summary:</p>\n<ul>\n<li>We are shifting from\nthe Personal Computer era to the Personal Assistant era.</li>\n<li>There are cases where assisting bots really help - Google maps telling us about the traffic in the morning, the <a href="https://chatbotsmagazine.com/5-use-cases-where-building-a-bot-makes-sense-c1bd3aab13db">Pizza bot</a> confirming we want the same as before, etc.  </li>\n<li>Bots will not kill apps (we kill tools nowadays see ...) although the <a href="http://marketingland.com/facebook-messenger-adds-option-chat-bots-avoid-chatting-208255">chat experience can resemble the app experience</a> to an extend.</li>\n<li>It\'s important to manage expectations towards our bots. They have models, but can\'t be super-smart at the moment. It\'s good to have a human interaction as a fallback in case the bot can\'t handle an important conversation out of a predefined script route.</li>\n<li>Facebook chat bots marketplace is still messy as discovering valuable bots (which are not actually people behind their facebook pages) is sometimes hard.</li>\n</ul>\n<p>Although the <a href="https://www.technologyreview.com/s/601441/moores-law-is-dead-now-what/">Moore\'s law is dead</a> (we kill ideas as well as technology stacks and tools nowadays) the big players are in yet another big game of AI which is related to the chat bots being personal assistants - the physical personal assistants! :D</p>\n<h3 id="personal-assistants--"><a href="#personal-assistants--" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Personal assistants => ?</h3>\n<p>Amazon has been doing <a href="http://uk.businessinsider.com/amazon-echo-sales-figures-stats-chart-2016-12?r=US&#x26;IR=T">quite well since the release</a> of the Amazon Echo, which already has several versions. Almost an year ago, Google made a <a href="https://www.cnet.com/news/google-home-vs-amazon-echo/">fast reply with Google Home</a>.</p>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 56.25%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe title="Video about Google Home" src="https://www.youtube.com/embed/2KpLHdAURGo?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n          </div>\n          </div>\n<p>Believe it or not, I realized just recently that Google announced <a href="https://assistant.google.com/">Google Assistant</a> and Google Home together for a reason. For me, the assistant was this dummy chat bot with little sense of humour on Allo, but I never took him seriously, because the time it takes to open the app and start a conversation was taking more than actually doing the thing I wanted to do directly in the apps. Also, there are so many other chat apps on the market that I never even made a try to invite a friend to try Allo with some assistant spice.</p>\n<p>In Europe, it\'s still not straight-forward to buy Google Home device in the same way it would be in the USA, so I was recently browsing for ways to emulate the device, and still have the Google Assistant in the box - it\'s integrated with <a href="https://developers.google.com/actions/">api.ai</a> that I already tried for making the chat bot on Facebook!</p>\n<p>Few days ago, the <a href="https://www.raspberrypi.org/magpi/find-the-magpi-57/">#57 issue of MagPi</a> got published with an interesting toy - a <a href="https://aiyprojects.withgoogle.com/">Google AIY</a> - a do-it-yourself AI similar to Google Home :D\nGoogle say that the assistant will be soon be published as an app for wide range of Android phones, but if you want to play with the actions sooner, and test if the this new wave would work for you or not - the AIY might be a really nice weekend / hack project.</p>\n<p><strong>PS1</strong>: Google I/O is coming really soon, and it\'s quite possible to see another product improving upon Google Home. The idea of trying the Assistant with some custom code/actions/webhooks from api.ai will still be a viable project regardless.</p>\n<p><strong>PS2</strong>: If you prefer to have the shiny device at home, better wait a bit, because Apple <a href="https://www.cnet.com/news/apple-exec-mocks-google-home-and-amazon-echo/">probably has something in mind too</a> for this year ;)</p>\n<p><strong>PS3</strong>: If you are in the telco business, you might want to follow <a href="https://www.bloomberg.com/news/articles/2017-04-20/european-telcos-team-up-to-take-ai-fight-to-google-amazon">the story around the European mobile network operators</a>.</p>'}},pathContext:{slug:"personal-computers-personal-assistants"}}}});
//# sourceMappingURL=path---personal-computers-personal-assistants-88e820bf3b6429271b78.js.map