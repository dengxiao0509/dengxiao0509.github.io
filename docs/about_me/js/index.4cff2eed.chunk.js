(this["webpackJsonpmy-site"] = this["webpackJsonpmy-site"] || []).push([["index"],{

/***/ "./src/articles/tech sync recursive ^\\.\\/.*\\.md$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./oauth.md": "./src/articles/tech/oauth.md",
	"./program_languages_features.md": "./src/articles/tech/program_languages_features.md"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/articles/tech sync recursive ^\\.\\/.*\\.md$";

/***/ }),

/***/ "./src/articles/tech/content.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "content", function() { return content; });
var content = [{
  category: '前端',
  articles: [{
    link: '/tech/oauth',
    title: '开放平台 - Getting Started with OAuth 2.0 学习总结',
    abstract: '本文是OAuth 2.0的学习总结，主要是对Ryan Boyd的书《Getting Started with OAuth 2.0》重点内容进行翻译，并加上了自己的一些理解和总结。',
    img: 'img/number1.png',
    showInIndex: true
  }, {
    link: '/tech/program_languages_features',
    title: '从JS的三个特性谈计算机语言发展',
    abstract: 'JavaScript 语言是一门“面向对象”、“函数式编程”的“动态”语言。本文就基于这三个特性出发，介绍了语言发展的历程，希望帮助读者对不同的计算机语言有更系统的认识。',
    img: 'img/number2.png',
    showInIndex: true
  }]
}];

/***/ }),

/***/ "./src/articles/tech/oauth.md":
/***/ (function(module, exports) {

module.exports = "<h1 id=\"开放平台---getting-started-with-oauth-20-学习总结\">开放平台 - Getting Started with OAuth 2.0 学习总结</h1>\n<blockquote>\n<p>本文是OAuth 2.0的学习总结，主要是对Ryan Boyd的书《Getting Started with OAuth 2.0》重点内容进行翻译，并加上了自己的一些理解和总结。</p>\n</blockquote>\n<h2 id=\"背景及介绍\">背景及介绍</h2>\n<h3 id=\"oauth如何诞生\">OAuth如何诞生</h3>\n<p>最开始Google发布Google Calender的API时，它提供给开发者访问和管理用户谷歌日历的能力。然而，达到这个目的的唯一方式就是：用户提供他的谷歌账户用户名和密码，然后应用通过谷歌私有的ClientLogin协议（proprietary protocol）去获取和操作用户在谷歌的数据。不过这样的方式下，各种应用就会向用户索要他们的谷歌账户信息,以获取其数据。Flickr就是这样一个应用。后来Flickr被Yahoo！买了，就在Google收购Blogger的几年后。Yahoo！asking for谷歌用户密码的想法把双方都吓到了，于是就促使新的私有协议发展，来解决这个问题。使用用户名密码授权还有诸多问题，比如第三方应用拿到过多权限可能导致安全问题，或者用户如果改了密码，第三方就没权拿数据了。</p>\n<p>后来出现了新的协议，比如Google的AuthSub和Yahoo！的BBAuth，这种协议使得应用可以将用户重定向到数据提供者的授权页面，用户在这个页面下登录和授权，然后应用就可以拿到一个token，通过这个token去获取用户数据。</p>\n<p>这解决了部分安全问题，毕竟不是直接将用户信息提供给第三方应用。不过，这样的开发成本很高。开发者如果在应用中包含了多种主流的API，就需要分别去学习各种API的授权协议。特别是一个创业公司，觉得不划算，又不愿意自己搞一套，于是大家商量商量，一致同意搞一套标准出来。这么一来，既降低了各种API的接入成本，又保证了安全性！</p>\n<h3 id=\"几个重要概念\">几个重要概念</h3>\n<ul>\n<li>Authentication - 认证</li>\n</ul>\n<p>认证是为了确认你就是你所宣称的那个人。账号是你宣称的人，密码是证明你就是那个人。</p>\n<ul>\n<li>Federated Authentication - 联合认证</li>\n</ul>\n<p>大多数应用都有他们自己的账户体系，不过也有一些应用是依赖别的认证系统去识别用户的身份，这就叫做联合认证。在Web世界中，应用通常信任OpenID的提供商（比如Google和Yahoo！），让他们来进行用户身份验证。OpenID也是用于联合认证的最常用的web开放协议。</p>\n<ul>\n<li>Authorization - 授权</li>\n</ul>\n<p>授权是用来验证用户是否有权限去执行某个操作，比如读取某个文档或者access某个email账户。通常认证是在授权之前进行，以便确认用户身份正确。一般的做法是，web应用首先需要你登录来验证你的身份，然后给你一个每个操作对应的access control的列表，以确保你只调用你被允许使用的数据和服务。 \n* Delegated Authorization - 委托授权</p>\n<p>委托授权是指你允许第三方代表你去执行一些操作。比如你把钥匙给泊车小哥，让他帮你停车，并且不能干别的。OAuth类似，就是用户允许第三方应用代表他去执行一些用户允许的操作。</p>\n<ul>\n<li><p>Roles - 一些OAuth协议流程中的重要角色</p>\n<ul>\n<li>Resource server\n拥有用户资源的服务，一般是API的提供商。</li>\n<li>Resource owner\n应用的用户，有权管理他们在resource server上资源的使用权限。</li>\n<li>Client\n第三方应用，在获得resource owner允许的情况下可以代表他执行一些操作。</li>\n<li>Authorization server\n授权服务获取resource owner的同意并且传递access token给client以允许其获取resource server上的资源。</li>\n</ul>\n</li>\n</ul>\n<h3 id=\"关于signatures的争议\">关于signatures的争议</h3>\n<p>2007年OAuth 1.0刚出来时，要求每次API调用都要带上cryptographic signatures（加密签名），以便确保client的身份和权限。然而加密对于一般的开发者来说比较麻烦，这大大限制了OAuth的发展。后来，随着SSL/TLS的发展，API调用的安全性增强，signature也就不再那么必要了，取而代之的是bearer tokens的使用，这个token就代表了授权相关的信息。要不要取消这个签名一直存在争议，工程师们总是需要在安全性和易用性性之间平衡。取消了加密签名后，规范建议在实现OAuth 2.0，调用任何API或使用库时，我们都需要确保正确地进行了SSL/TLS证书链有效性验证，既要验证server返回的证书上的hostname跟请求的url是否一致，也要确保自己server所用证书授权的安全性。</p>\n<p>此外，如果API提供商支持或者要求加密，你可以参考MAC Access Authentication。简单来说就是每次authorization server都会返回一个access_token作为MAC key，然后client用它对http请求进行加密。</p>\n<h3 id=\"开发者及应用注册\">开发者及应用注册</h3>\n<p>尽管协议可以实现自动注册，大部分网站还是要求开发者在他们的开发者平台填一些信息后再注册。应用注册成功之后，会获得一个client id和一个client secret，后者在将authorization code转换为access token或者刷新access token时有用。</p>\n<h3 id=\"client-profiles-access-tokens和authorization-flows\">Client Profiles, Access Tokens和Authorization Flows</h3>\n<p>OAuth 1.0主要是针对传统的client-server web app设计的，对于其他场景（移动app，桌面app，浏览器插件等）的支持并不好。2.0 就在这方面做了改善。</p>\n<h4 id=\"client-profiles\">Client Profiles</h4>\n<p>2.0定义了许多重要的client profiles：</p>\n<ul>\n<li>Server-side web app</li>\n</ul>\n<p>在web server上运行的OAuth client，通过服务器端编程语言调用APIs。用户无权访问OAuth client secret或者任何access token。</p>\n<ul>\n<li>Client-side app running in a web browser</li>\n</ul>\n<p>在客户端运行的程序，比如js代码写的app或者浏览器插件，用户可以看到这类app的代码和API请求。这种情况下OAuth crendentials会被看做是不保密的，所以API提供商一般不会对这种client下发secret。</p>\n<ul>\n<li>Native application</li>\n</ul>\n<p>与上一类相似，也不会被发secret。</p>\n<h4 id=\"access-tokens\">Access Tokens</h4>\n<p>大多数基于OAuth 2.0的API都只需要bearer tokens来验证请求者身份。bearer tokens是一种access token，只需要有token值就可以访问私密的资源，而不需要其他加密key啥的了。</p>\n<p>获取到Access Token之后，将其加到API请求中去的方式有几种：1. 放到header里；2. 放到query string里；3. 放到form-encoded 的 body中。放头部的好处在于，header很少出现在代理服务器和访问日志的log中，且几乎不会被cache。放query利于debug，并且在client-side flow中有用。</p>\n<h4 id=\"authorization-flows\">Authorization Flows</h4>\n<p>任何类型的client都需要通过一个授权协议的流程来获取访问用户资源的权限。OAuth 2.0 协议定义了四种主要的“grant types”以及一种扩展机制。</p>\n<ul>\n<li>Authorization code</li>\n</ul>\n<p>这种授权模式非常适合server-side的应用。当用户同意授权之后，授权服务会验证用户是否处于active session，如果是，用户会被重定向回应用，并在url的query string中带有authorization code。然后client用这个code加上client secrte和client id去换access token，这是服务器之间的通信，对于用户不可见。同时使用refresh tokens的话，可保持long-lived access to an API。</p>\n<ul>\n<li>browser-based client-side applications的隐式授权</li>\n</ul>\n<p>这种授权方式是最简单的，也是对于客户端应用的优化。用户同意授权后，access token会以hash参数的形式返回，不需要中间层的authorization code，同样无法生成refresh token。</p>\n<ul>\n<li>通过用户的密码授权</li>\n</ul>\n<p>也就是说应用需要使用用户的账户名和密码去换authentication code。这只是在高度被信任的app上应用，比如API提供商自己开发的应用。应用不需要存储密码，只需要存储第一次授权后获取到的code，且用户不需要通过修改密码来取消授权。这种方式还是比传统的账户名密码认证要安全的。</p>\n<ul>\n<li>Client credentials</li>\n</ul>\n<p>Client credentials允许client获取用于访问client自己所有的资源的access token，或者当授权过程已经被一个授权服务器完成时。这种授权方式适用于应用需要以自己而不是用户身份来调用某些API时，比如存储服务和数据库。</p>\n<p>接下来我们就详细介绍这几种流程。</p>\n<h2 id=\"server-side-web-application-flow\">Server-Side Web Application Flow</h2>\n<p>又叫<strong>Authorization code flow</strong>。正如上面所说，由于access token从来没有在浏览器端传递过，而只是通过传递中间层的authentication code，所以保密性较好。然而，一些使用这种模式的应用会在本地保存一个refresh token，以便在难以与用户浏览器交互获取新access token时“离线”获取用户数据。这会造成安全隐患，尽管可以实现同时获取多个用户数据。</p>\n<p>授权流程图如下：\n<!-- ![](../../styles/img/oauth1.png) --></p>\n<h3 id=\"授权步骤\">授权步骤</h3>\n<h4 id=\"step-1-告诉用户你要干嘛并请求授权\">Step 1 告诉用户你要干嘛并请求授权</h4>\n<p>在这一步中，我们需要告诉用户接下来他们会被定向到授权页面。用户点击“去授权”后，会跳转到API提供商的OAuth授权页面或者在popup弹窗中展示。在这个页面，API供应商会展示出用户希望授权给第三方应用的权限列表，点击“确认授权”后会带着authorization code跳转会第三方应用。当然，用户需要登录了API提供商的服务，否则会先进入登录流程。一般API服务商的授权页面link都可在文档中找到，比如SPA Marketing API官网的就是https://developers.e.qq.com/oauth/authorize。</p>\n<h5 id=\"query-参数\">Query 参数</h5>\n<p>link中需要附上一些参数：</p>\n<ul>\n<li>client_id</li>\n</ul>\n<p>应用注册时得到的id。</p>\n<ul>\n<li>redirect_uri</li>\n</ul>\n<p>用户同意授权后跳转回的页面。通常也是在创建应用是注册的。</p>\n<ul>\n<li>scope</li>\n</ul>\n<p>第三方应用请求访问的数据。通常这是一个以空格分隔的字符串。有效的scope值应当在API文档中找到。比如MKT API中就分为了广告投放、账户管理、数据洞察、用户行为上报、人群管理等几个类。 </p>\n<ul>\n<li>response_type</li>\n</ul>\n<p>使用&#39;code&#39;值，用来表示用户同意授权后一个授权码会被返回。</p>\n<ul>\n<li>state</li>\n</ul>\n<p>一个你的第三方应用唯一的值，这个值在每次请求中都应当是一个随机字符串，不能泄露出去。这是用来防止CSRF攻击的。</p>\n<p>什么情况下会发生CSRF攻击呢？举个栗子。</p>\n<ol>\n<li>erra在第三方应用ilovedog.com上登录了，然后点击了绑定我的微信账号的授权链接；</li>\n<li>erra被重定向到微信的授权页面xxx.weixin.com/auth，在这个页面erra完成了微信登录；</li>\n<li>登录完成后，erra访问的页面又跳转回ilovedog.com，并且带上了授权码：ilovedog.com/code=erracode</li>\n<li>突然，erra在这里停住了，没有继续往下走，并且把第3步中的url发给了selina；</li>\n<li>selina也登录了ilovedog.com，并且点击了ilovedog.com/code=erracode，此时ilovedog.com服务会拿代表erra身份的erracode去换access token，这么一来，selina在ilovedog.com上就绑定了erra的微信。如果她通过微信分享ilovedog.com中的照片到朋友圈，就会发到erra的微信朋友圈中了。或者，如果是授权微信登录，erra就可以用自己的微信登录selina的ilovedog网了。</li>\n</ol>\n<p>很可怕是不是，所以state参数还是很有必要的。</p>\n<h5 id=\"错误处理\">错误处理</h5>\n<p>当query参数中有的值无效时，比如client_id或者redirect_uri，authentication server应当给出错误提示，并且不要重定向回client。当用户或者authentication server拒绝授权时，应当重定向回第三方应用，并带上error参数指明错误类型，比如access_denied。除此之外，还可以附上更详细的错误信息，例如error_description或者error_uri指向一个详细说明错误原因的页面。</p>\n<p>其他OAuth 2.0 标准中规定的错误类型：</p>\n<ul>\n<li><strong>invalid_request</strong>: 缺少参数、含不支持的参数、参数格式不对</li>\n<li><strong>unauthorized_client</strong>: client没有使用这种方式获取授权码的权限</li>\n<li><strong>unsupported_response_type</strong>: authentication server不支持通过这种方式获取授权码</li>\n<li><strong>invalid_scope</strong>: scope值无效、缺少或格式不对</li>\n<li><strong>server_error</strong>: 授权服务器出现错误</li>\n<li><strong>temporarily_unavailable</strong>: 授权服务器暂时不可以用</li>\n</ul>\n<h4 id=\"step-2-用authentication-code换access-token\">Step 2 用authentication code换access token</h4>\n<p>如果没有错误发生，在用户授权后，会被重定向到redirect_uri并带上code和state两个参数。接下来，如果state检查ok，第三方应用需要用这个code区换access token。</p>\n<p>在不借助第三方库的情况下，第三方应用需要向授权服务器发一个POST请求，并带上参数code、redirect_uri、grant_type（字符串&quot;authorization_code&quot;, 代表要用code换access token）。此外，这个POST请求是需要进行身份认证的，认证方式有两种，一种是把client_id和client_secret分别作为username和password放到authorization header中；另一种是作为字段添加到POST请求参数中。</p>\n<p>如果身份验证和参数检查都成功，就会返回一个JSON格式的response，并带有参数：</p>\n<p>-<strong>access_token</strong>: 可用来调用API的token\n-<strong>token_type</strong>: 通常为“bearer”\n-<strong>expires_in</strong>: access token的剩余有效时间，秒为单位\n-<strong>refresh_token</strong>: 一个当access token过期后可以用来重新获取的token。一般在server侧与用户身份信息对应存储，就避免每次access_token过期后都需要用户重新授权。</p>\n<p>access_token有效时间短，一方面降低了黑客拿到明文token后操作用户数据的风险，另一方面有利于在用户取消授权后，快速废弃第三方应用的代理操作权限。</p>\n<h4 id=\"step-3-调用api\">Step 3 调用API</h4>\n<p>得到access_token之后，我们只需要将他放入请求中，就可以调用API了。最好是按上述说的，放在Authorization header中。</p>\n<h5 id=\"错误处理-1\">错误处理</h5>\n<p>遇到调用错误，例如token过期、授权失效时，会得到一个HTTP 4XX的错误。规范规定返回头中应有WWW-Authenticate字段，指明失败的原因。当然有些API供应商会返回JSON格式的错误信息数据。</p>\n<h4 id=\"step4-更新access_token\">Step4 更新access_token</h4>\n<p>为了提高应有性能，最好同时存储access_token和expire_in两个值。在调用API之前，先检查access_token是否过期。更新需要发一个POST请求，带上grant_type（值为‘refresh_token’）和refresh_token两个值。成功后，不仅会返回新的access_token，也会有新的refresh_token。</p>\n<p>对于一些“online”的应用，他们并不想获取refresh_token，而是当access_token过期时又开始一个authorization flow，不过只要user之前授权过，这次就不需要user同意，会自动将其重定向回应用并获取授权码。</p>\n<h4 id=\"解除授权\">解除授权</h4>\n<p>大部分API供应商都允许user手动解除授权，不过这种情况下应用通常不会得到通知，只有在下次调用是出错才知道。Facebook会在user解除授权时，向应用发一个POST请求。</p>\n<p>此外，一些授权服务同样支持通过程序解除授权。当应用不想管了一些无用的权限时，比如用户卸载了应用，就可以通过发请求到授权服务器使token失效。这是在OAuth 2.0规范的扩展草案中提出的。</p>\n<h2 id=\"client-side-web-application-flow\">Client-Side Web Application Flow</h2>\n<p>客户端的web应用授权过程比较简单，当用户同意授权时，会直接返回access token，而不像服务端的应用授权一样需要一个授权码。</p>\n<h3 id=\"适用场景\">适用场景</h3>\n<ul>\n<li>只需要对数据暂时的访问权限</li>\n<li>用户会定期登录API Provider</li>\n<li>OAuth client在浏览器运行（通过JS,Flash等编写的）</li>\n<li>浏览器是非常值得信任的，几乎不担心access会被泄露</li>\n</ul>\n<!-- ![](../../styles/img/oauth2.png) -->\n<h3 id=\"授权步骤-1\">授权步骤</h3>\n<h4 id=\"step-1-告诉用户你要干嘛并请求授权-1\">Step 1 告诉用户你要干嘛并请求授权</h4>\n<p>这一步与服务端应用授权类似，同样需要在请求授权url时带上client_id, redirect_uri, response_type(&#39;token&#39;), state, scope参数。错误处理也类似，不重复了。</p>\n<h4 id=\"step-2-从url中获取access-token\">Step 2 从URL中获取access token</h4>\n<p>当用户同意授权后，会被重定向会第三方应用，并以hash值的形式带上acees token，比如ilovedogs.com#access_token=shdjue678dysugfjhsw&amp;token_type=Bearer&amp;expires_in=3600。这样一来应用就可以直接取到access_token啦。</p>\n<h4 id=\"step-3-调用api-1\">Step 3 调用API</h4>\n<p>有了access_token之后，就可以愉快地调用被授权的API了。不过因为是从客户端发起请求，涉及到跨域的问题，可以用JSONP解决。</p>\n<h4 id=\"step4-更新access-token\">Step4 更新access token</h4>\n<p>这种隐式授权方式的限制是，不提供refresh token。所以每次access token过期后，都需要重新走一遍流程。这也使得安全性有所提高。不过有些API供应商比如Google允许当用户授权过一次时，之后可以跳过请求用户授权的步骤而自动授权。如此一来，就可以在需要更新access token时，在一个隐藏的iframe中进行，提升用户体验。有一种还没写入规范的“immediate”mode，就允许这么做，并且在用户被定向到授权页面时立即将其重定向回应用，同时打印出自动授权失败的错误。</p>\n<h3 id=\"解除授权-1\">解除授权</h3>\n<p>与服务端应用授权类似。</p>\n<h2 id=\"resource-owner-password-flow\">Resource Owner Password Flow</h2>\n<!-- ![](../../styles/img/oauth3.png) -->\n<p>这种方式是用用户的账号和密码去换取access token，因此安全性与之前两种方式相比较低，需要第三方应用是完全可信任的。</p>\n<h3 id=\"适用场景-1\">适用场景</h3>\n<p>这种模式一般只使用与第三方应用是API供应商官方出品的情况下。同时为了避免被钓鱼，开发者和IT管理者需要明确告诉用户如何分辨是否是真正的官方应用。</p>\n<p>虽然安全性不高，但这种方式相较于直接用账号、密码作为身份信息去调用API要好。一是应用只需要使用一次账号、密码信息去换access token，因此没必要保存、二是用户不需通过改密码的方式解除授权，更方便。</p>\n<h3 id=\"授权步骤-2\">授权步骤</h3>\n<h4 id=\"step-1-请求用户的账号信息\">Step 1 请求用户的账号信息</h4>\n<p>第一步就是请求用户输入账号和密码。通常，当用户是从一个不受信任的网络登录时，应用还会要求用户输入一个security token，就像登录网银时需要输入的令牌，以验证登陆者的身份。</p>\n<h4 id=\"step-2-交换access-token\">Step 2 交换access token</h4>\n<p>这一步与用授权码交换access token很类似，只需要发一个POST请求，并提供账号信息和client_id即可。需要提供的参数：</p>\n<ul>\n<li>grant_type: 使用值&#39;password&#39;</li>\n<li>scope（可选）</li>\n<li>client_id（可选）</li>\n<li>client_secret（可选）</li>\n<li>username: 用户在API供应商的账号</li>\n<li>password: 用户在API供应商的密码，可能需要与security token串联作为值</li>\n</ul>\n<p>如果授权成功，会返回access_token。</p>\n<h4 id=\"step-3-调用api-2\">Step 3 调用API</h4>\n<p>与其他模式类似。</p>\n<h4 id=\"step4-更新access-token-1\">Step4 更新access token</h4>\n<p>规范建议API提供商提供一种更新短有效期的access token的机制，这样可以避免应用存储用户的账户信息，这也是与传统验证相比的优势。</p>\n<h2 id=\"client-credentials-flow\">Client Credentials Flow</h2>\n<p>这种模式下，client只需要提供自己的client账户信息，就可以换取access token，而不需要用户的授权。比如在client自己拥有这些数据（例如调用API提供商的云存储服务），或者用户已经通过常规认证流程之外的方式授权过的情况下。甚至都不需要发任何token，只需要看请求API的client是否有权限就行。</p>\n<p>这种模式下，需要保证client的账户信息高度保密。client即可以通过在POST请求中添加账户信息来进行身份验证，也可通过公钥、私钥或者SSL/TLS的方式在authorization server进行身份验证。\n<!-- ![](../../styles/img/oauth4.png) --></p>\n<h3 id=\"授权步骤-3\">授权步骤</h3>\n<p>与其他步骤类似，只是第一步中需要传递grant_type（值为&quot;client_credentials&quot;）、client_id、client_secret作为参数换取access token。同时，这种模式下的access token通常是长期有效的，且不提供refresh token。</p>\n<h2 id=\"移动应用的授权\">移动应用的授权</h2>\n<p>移动应用分为两种，一种是基于HTML5和其他web技术的移动应用，另一种是原生的移动应用。前者可以使用一般的web授权方式，后者就需要额外的方式了。</p>\n<h3 id=\"适用场景-2\">适用场景</h3>\n<p>当移动应用有后台服务器时，我们可以用任何一种典型的web应用授权方式。如果需要长期授权，就用服务端应用授权方式；如果只需要短期授权或者一次性授权，就用客户端授权方式。</p>\n<p>如果第三方应用没有后台服务器，我们就需要使用native app flow了。这种授权方式与服务端应用授权和客户端应用授权类似，不过有两个限制条件：一是没有web服务器用来接收redirect_uri跳转，另一个是需要保证client_secret的保密性。</p>\n<p>根据应用平台和API提供商规定，我们可以使用类似my-mobile-app://oauth/callback这样的url作为redirect_uri的值。然而，这样的自定义uri通常很难保证唯一性，就可能造成跳到别的app里了。另一种可能是API提供商根本就不允许用这种自定义url作为回调。</p>\n<p>在native app flow中，redirect_uri会是一个特殊的值，用来将用户定向到authorization server的一个web页面。在这个页面上，用户可以获得authorization code或者access token，再通过粘贴复制的方式输入到移动应用中，或者移动应用通过程序获取window title或者body中对应的值。</p>\n<h3 id=\"丑陋的web浏览器\">丑陋的web浏览器</h3>\n<p>阻碍原生应用接入OAuth授权的一个原因是，通常需要在应用中嵌入WebView或者调用手机系统的浏览器。</p>\n<p>使用嵌入的WebView是一个比较常见的做法，因为不需要进行上下文切换，且应用可以对浏览器有较高的控制权，比如从其中取cookie或window的title。劣势是WebView通常不显示“可信任”网站标识，也不显示url，用户容易被钓鱼；并且WebView的cookie和history是独立的，这意味着用户每次授权都需要重新登录API提供商的账户。</p>\n<p>使用系统自带的浏览器也有好有坏，好处是用户通常不需要重新登录API提供者账户，且安全性更高；坏处是用户在浏览器认证完成后需要通过my-mobile-app://oauth/callback这样的链接跳转回应用，如上所述，有可能跳到别的别有用心的应用里；并且系统浏览器的历史记录是不受应用控制的，在使用隐式授权方式时容易泄露token，特别是移动设备容易丢失和被盗的情况下。</p>\n<p>一些API提供商提供了对于原生应用授权的友好支持，比如Facebook就提供了安卓和iOS的SDK用于用户授权。在安卓系统中，可以调用Facebook.authorize()来呼起授权请求，用户同意后，再调用Facebook.getAccessToken()获取调用对应API的access token。</p>\n<h2 id=\"openid-connect认证\">OpenID Connect认证</h2>\n<h3 id=\"背景\">背景</h3>\n<p>几乎所有应用都会要求用户创建一个账户用于登录。然而注册过程通常比较繁琐，用户又经常会用同一个密码注册不同账户，账户安全容易受到威胁。OpenID就是为了实现用一个身份登录不同的应用。使用OpenID时，用户和应用都是信任身份提供者的（比如Google、Facebook），允许他们存储用户资料并代表应用验证用户身份。这种机制不仅免除了应用自建一套账户体系的麻烦，还方便了用户登录和使用各种应用。</p>\n<h3 id=\"openid-connect\">OpenID Connect</h3>\n<p>OpenID Connect是OpenID的下一代，它包含了以下两个考虑：\n1. 允许访问用户身份信息与允许访问用户数据类似，开发者不需要针对这两种场景使用不同的协议；\n2. 规范应当与是模块化的 —— 兼容上一个OpenID版本，包括automated discovery, associations等特性。</p>\n<h2 id=\"id-token\">ID Token</h2>\n<p>ID Token代表一个已经被授权的用户信息，在授权流程中用来查询用户资料或者其他用户数据。这个ID是一个JSON Web Token，通常代表被签名或/和加密过的用户身份信息。相比与通过加密方式验证其有效性，将其作为一个非直接的key传送给Check ID服务来解释更符合OAuth 2.0的特性，也是其相比与之前的版本的优势所在。</p>\n<h2 id=\"安全问题\">安全问题</h2>\n<p>虽然认证流程与OAuth的授权流程类似，但其所面临的安全问题却是不同的，比如说重放攻击（Replay attacks）：</p>\n<ul>\n<li>攻击者拿到用户的登录一个站点的保密信息后，重新登录相同的站点；</li>\n<li>别有用心的开发者拿到用户信息后，假装用户身份登录另一个应用。</li>\n</ul>\n<p>针对第一种攻击，OAuth 2.0 要求使用SSL/TLS阻止消息泄露。针对第二种攻击，需要OpenID Connect提供一种特别的解决方法，就是使用Check ID endpoint。该终端用来验证OAuth provider提供的用户身份信息给了正确的应用。</p>\n<p>如果应用使用的是服务端应用授权方式，那么浏览器只会收到一个auth code，然后再由服务器去换access token和identity token。因为需要提供相应的client id和secret，自然可以避免使用发给另外一个app的authorization code的问题。</p>\n<p>如果应用使用的是客户端授权方式，那么access token和identity token就会直接发给浏览器。通常浏览器会将其发回后端服务器以验证这个登录用户的身份，这种情况下，服务器就必须通过解密ID Token或者请求Check ID endpoint的方式来验证了此身份信息是否发给正确应用了。这叫做“verifying the audience” of the token。</p>\n<h2 id=\"获取用户授权\">获取用户授权</h2>\n<p>通过OpenID Connect认证用户的过程与用OAuth 2.0 获取任何API授权的过程几乎一致。既可以使用服务端方式，也可以使用客户端方式。不论使用哪种方式，应用都会将用户定向到Auth提供商的授权页面，并带上如下参数：</p>\n<ul>\n<li>client_id</li>\n<li>redirect_uri</li>\n<li>scope：基础的OpenID Connect请求是“openid”，如果需要别的信息需指明，如email、address等</li>\n<li>response_type：使用值&#39;id_token&#39;表示需要Auth服务返回一个id_token，此外需同时提供“token”或“code”</li>\n<li>nonce：一个随机字符串，用来防止重放和CSRF攻击，在ID token请求返回中也会原样返回</li>\n</ul>\n<p>用户同意授权后，会被重定向到redirect_uri，同时返回access token（用于请求UserInfo Endpoint获取用户资料）和id_token（用于请求Check ID Endpoint获取用户身份信息）。</p>\n<h2 id=\"check-id-endpoint\">Check ID Endpoint</h2>\n<p>Check ID Endpoint是用来验证id_token的有效性，以确保它是给某一个应用使用的，同时用于client开始一个已认证身份的session。正如上面所说，当使用客户端授权时这个验证是十分必要的，避免重放攻击。如果没有错误，会返回参数：</p>\n<ul>\n<li>iss：user_id有效的域名</li>\n<li>user_id：代表iss域名下已认证的用户的身份的值</li>\n<li>aud：需要验证这个值是否和获取id_token的请求中所用的client_id相同</li>\n<li>expires_in：有效时间</li>\n<li>nonce：同样需要验证是否和获取id_token的请求中所用的值相同</li>\n</ul>\n<h2 id=\"userinfo-endpoint\">UserInfo Endpoint</h2>\n<p>Check ID Endpoint只会返回一个user_id，如果需要更多用户信息，就需要请求UserIndo Endpoint了。UserInfo Endpoint是一个标准的OAuth-授权 REST API。与别的API调用一样，可以将access token放在Authorization Header中。请求成功后，会以JSON格式返回用户的资料。</p>\n";

/***/ }),

/***/ "./src/articles/tech/program_languages_features.md":
/***/ (function(module, exports) {

module.exports = "<h1 id=\"从js的三个特性谈计算机语言发展\">从JS的三个特性谈计算机语言发展</h1>\n<blockquote>\n<p>JavaScript 语言是一门“面向对象”、“函数式编程”的“动态”语言。本文就基于这三个特性出发，介绍了语言发展的历程，希望帮助读者对不同的计算机语言有更系统的认识。</p>\n</blockquote>\n<h3 id=\"语言发展\">语言发展</h3>\n<p>计算机程序设计语言，经历了机器语言、汇编语言、高级语言三个过程。</p>\n<h4 id=\"机器语言\">机器语言</h4>\n<p>机器语言是指一台计算机全部的指令集合。二进制是计算机语言的基础，也是机器唯一能理解并执行的语言。其程序就是一个个二进制文件。由于不同计算机的指令系统通常不同，所以需要针对不同型号的计算机编写不同的程序，工作量非常大，且极难调试。但是这种语言运行效率最高。</p>\n<h4 id=\"汇编语言\">汇编语言</h4>\n<p>汇编语言将一个特定指令的二进制串比如加法用简洁的人能读懂的形式表示，如“ADD”。但计算机是不懂的，需要通过汇编程序将其编译成机器语言再执行。汇编语言仍与硬件强关联，移植性差，但效率仍然很高。</p>\n<h4 id=\"高级语言\">高级语言</h4>\n<p>早期计算机发展时，人们意识到应该设计一种接近于数学语言或人类语言，同时又不依赖机器硬件的语言，编出的程序能在所有机器上通用。高级语言源代码通常需要被编译／解释之后才能运行。</p>\n<p>第一个高级语言是 Fortran。之后，高级语言经历了从早期语言到结构化程序设计语言，从面向过程到非面向过程的发展。</p>\n<h5 id=\"结构化程序语言\">结构化程序语言</h5>\n<p>结构化程序语言诞生的背景是软件生产缺乏科学规范的系统规划与测试、评估标准，即系统不可靠。人们意识到，应该像处理工程一样处理软件研制全过程，且程序设计应该易于保证正确性，便于验证，70年第一个结构化程序设计语言——Pascal便出现了。</p>\n<h5 id=\"非面向过程语言\">非面向过程语言</h5>\n<p>80年代初期开始，在软件设计思想上，又出现了面向对象的程序设计。在此之前，所有高级语言几乎都是面向过程的，程序流水线般执行。这于人们习惯的，针对功能处理事务不相符，应当是面向具体的应用功能，也就是对象来编程。如同集成电路一样，制造一些通用的、封装的功能模块，且无须关注其实现细节，只关注接口，需要时就调用。</p>\n<p>除了<strong>面向对象</strong>，<strong>函数式</strong>编程也是一种非面向过程的编程思想。我们将在下文中介绍函数式编程。</p>\n<p>发展的下一个阶段是，你只需要告诉程序你要干什么，程序就能自动生成算法、自动处理，这就是非面向过程编程。</p>\n<h5 id=\"脚本语言\">脚本语言</h5>\n<p>传统的高级语言源代码，需要经历“编写-编译-链接-运行（edit-compile-link-run）”过程才能被执行，而脚本语言，或称动态语言，是为了缩短传统过程而创建的计算机编程语言。</p>\n<p>通常来讲，<strong>脚本语言</strong>是<strong>解释</strong>运行而非编译，由解释器根据定义好的规则“解释”代码语句，并做出相应的反应。它不象c\\c++等可以编译成二进制代码,以可执行文件的形式存在，脚本语言不需要编译，可以直接用，由解释器来负责解释。与传统编译语言的区别主要在于，脚本语言是运行时才解释的。</p>\n<h2 id=\"几种语言特性\">几种语言特性</h2>\n<h3 id=\"编译型、解释型语言\">编译型、解释型语言</h3>\n<p><strong>编译型</strong>语言是指，一段程序源代码需要先编译成机器可执行的机器指令（二进制）后，再由机器运行。例如C、C++。关键在于一次性翻译，并且会生成目标代码（机器可执行代码）。</p>\n<p><strong>解释型</strong>语言是指，程序源代码不是直接翻译成机器指令，而是先翻译成中间代码，再由解释器对中间代码进行运行时的解释，之后用一个执行环境读入并执行解释后的代码。例如JavaScript、PHP。其关键在于每句每句地解释并执行，如果有循环体，比如10次，那么语句就要被解释执行10次，整个过程不会产生目标代码。</p>\n<p>编译型代码是一次性将代码编译成机器可执行的二进制文件，以后再运行就不需要翻译了，效率比较高。但是针对不同的“机器”，可以执行的指令类型不尽一致，所以跨平台能力较弱。</p>\n<p>解释型代码每次运行时都需要重新“解释”成机器可执行的代码，效率会低些，但是其跨平台能力更强（当然需要安装解释器）。</p>\n<p><strong>扩展</strong>\n当然在一些语言中，这两种特性会同时存在，例如 JVM（java 虚拟机）的 JIT（Just in time）机制。</p>\n<p>JVM 有两种执行方式：解释执行和编译执行。</p>\n<p>解释执行是将字节码(.class文件)在运行时解释，生成机器码运行。编译执行则是不加筛选的将全部代码进行编译机器码，不论其执行频率是否有编译价值。通常，JVM 会采取混合模式，即 JIT，它会将热点代码（如循环体内代码）翻译成机器码缓存，其他代码则采用运行时解释的方式，来提高程序执行效率。</p>\n<p><strong>JavaScript</strong>解析引擎就是能够“读懂”JS代码，并准确给出运行结果的一段程序。比如浏览器的console就是一个解释引擎。但是现在也比较难界定js的解析引擎究竟是解析器还是编译器，比如 Google 的 V8 引擎为了提高JS运行的性能，会在执行前先将源码编译成机器码，再由机器执行。这里的分类就比较不明确了，V8 引擎在运行时解释，这一点符合解释器的特性，将所有代码翻译成机器语言，这又符合编译器的特性。</p>\n<h3 id=\"动态、静态类型语言\">动态、静态类型语言</h3>\n<p><strong>静态类型语言</strong>是指数据类型的检查是在运行前（如编译阶段）进行的。例如C++。</p>\n<p><strong>动态类型语言</strong>是指数据类型的检查是在运行时做的。用动态类型语言编程时，不用给变量指定数据类型，该语言会在你第一次赋值给变量时，在内部记录数据类型。例如JS。</p>\n<h3 id=\"动态语言、静态语言\">动态语言、静态语言</h3>\n<p>通常来讲，动态语言就是指脚本语言，比如 JavaScript。那么，它的动态性体现在哪里呢？总结来说，就是在运行时可以改变其结构。</p>\n<p>动态是指在语言陈述时无法确定，必须在计算机执行时才能确定程序结果的特性。JS 可以随意改变对象的属性（增加、删除属性），可以通过eval函数改变当前作用域下变量的值，可以通过bind、apply改变上下文即this的值，这些在静态语言例如C++中都是没有的，C++的类结构一旦定义好了就不能随意改变，通常this的指向也是固定的。</p>\n<h3 id=\"函数式编程\">函数式编程</h3>\n<p>面向对象编程，是将数据进行封装；函数式编程，可以看做是对过程的封装。其中一个重要的运用，是纯函数，即输入一定时，输出也一定的无副作用的函数。将函数看作和普通类型一样，可以对它赋值、存储、作为参数传递甚至作为返回值返回，这种思想是函数式编程中最重要的宗旨之一。</p>\n<p>函数式编程的特点：</p>\n<ol>\n<li><p>函数定义：函数要有输入、输出；</p>\n</li>\n<li><p>无副作用：使用纯函数，同时纯函数中不应有“变量”的概念，同样不存在“赋值”一说，只能使用“常量”；</p>\n</li>\n<li><p>高阶函数：即函数为一等公民，与普通变量一致；</p>\n</li>\n<li><p>柯里化：函数式编程中，可以将包含了多个参数的函数转换为一个参数的函数，通过多次调用来实现目的。示例如下：</p>\n<pre><code>function add = (x,y) =&gt; x + y;\nconst sum = add(1,2) // 3\n\n// 可以转换成\nfunction add = x =&gt; {\n    return y =&gt; x + y;\n}\nconst sum = add(1)(2) // 3\n\n</code></pre><p>这里的加法过程比较简单，看上去这么转换意义不大。但是对于一个比较复杂的过程来说，将其计算过程简单化，再通过多次调用简单化的函数来实现，对于开发者来说会更友好。再比如 JS 中 Array 的map方法，开发者只需传入一个函数（对于处理过程的封装），所有数组中元素都会依次调用这个函数，并返回处理后的新数组。如果map方法的实现不使用函数式编程的思想，那么每种对于数组数据的处理方式，都需要写成一个函数（参数是数组），就不友好了。</p>\n<p>map方法只是封装了对数组的循环操作，对于每个元素如何操作，由开发者自行决定（传入函数），这就是函数式编程的思想。</p>\n</li>\n</ol>\n<p>看完这些，如果你是一个前端开发，对于“JavaScript 是一门面向对象的、函数式编程的、动态语言”这样的定义，应该有更深刻的了解了吧 ；）</p>\n";

/***/ }),

/***/ "./src/articles/trips/content.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "content", function() { return content; });
var content = [{
  category: '旅行记录',
  articles: [{
    link: '/trip/tibet',
    title: '高原之行',
    abstract: '探索神秘西藏',
    img: 'img/2.jpeg',
    showInIndex: true
  }, {
    link: '/trip/japan',
    title: '岛国之旅',
    abstract: '小而精致的国家',
    img: 'img/3.jpeg',
    showInIndex: true
  }]
}];

/***/ }),

/***/ "./src/biz-components/Cover/Index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/biz-components/Cover/style.less");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/antd/es/index.js");
/* harmony import */ var articles_tech_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/articles/tech/content.tsx");
/* harmony import */ var articles_trips_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/articles/trips/content.tsx");
/* harmony import */ var components_ArticleList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/ArticleList.tsx");







var Cover = function Cover() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "cover-content"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "big-img-container"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "big-img"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: "img/swiss.JPG"
  }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    type: "flex",
    justify: "end"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 18
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "hero-title"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, "Life is an adventure, enjoy it ;)"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 12
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "hero-meta"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, "\u70ED\u7231\u63A2\u7D22\uFF0C\u559C\u6B22\u65B0\u5947\uFF0C\u6D3B\u529B\u6EE1\u6EE1\u768421\u4E16\u7EAA\u65B0\u7A0B\u5E8F\u5458"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "author"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "author-img"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: "img/portal.JPG"
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "author-meta"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "author-name"
  }, "Xiao"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "author-tag"
  }, "Web Frontend Coder"))))))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_ArticleList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    content: articles_tech_content__WEBPACK_IMPORTED_MODULE_3__["content"],
    articleGroupTitle: "\u6B63\u7ECF\u5DE5\u7A0B\u5E08"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_ArticleList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    content: articles_trips_content__WEBPACK_IMPORTED_MODULE_4__["content"],
    articleGroupTitle: "\u4E1A\u4F59\u65C5\u884C\u5BB6"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0__["memo"](Cover));

/***/ }),

/***/ "./src/biz-components/Cover/route.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkComponent", function() { return LinkComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteComponent", function() { return RouteComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/biz-components/Cover/Index.tsx");



var LinkComponent = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  to: "/"
});
var RouteComponent = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: "/",
  component: _Index__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/biz-components/Cover/style.less":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/biz-components/Tech/Index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/antd/es/index.js");
/* harmony import */ var articles_tech_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/articles/tech/content.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-router-dom/esm/react-router-dom.js");




var SubMenu = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].SubMenu;

var Tech = function Tech(props) {
  var title = props.match.params.title || articles_tech_content__WEBPACK_IMPORTED_MODULE_2__["content"][0].articles[0].link.replace('/tech/', '');

  var getMenuBar = function getMenuBar() {
    var res = [];
    articles_tech_content__WEBPACK_IMPORTED_MODULE_2__["content"].forEach(function (cat, i) {
      var articlesComponents = [];
      cat.articles.forEach(function (article, j) {
        articlesComponents.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
          key: "article_".concat(i, "_").concat(j)
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
          to: article.link
        }, article.title)));
      });
      res.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](SubMenu, {
        key: "cat_".concat(i),
        title: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
          type: "appstore"
        }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, cat.category))
      }, articlesComponents));
    });
    return res;
  };

  var handleMenuClick = function handleMenuClick(e) {
    console.log(e);
  };

  console.log('render');

  var articleHtml = __webpack_require__("./src/articles/tech sync recursive ^\\.\\/.*\\.md$")("./".concat(title, ".md"));

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "tech-content"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 5
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "side-nav"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    mode: "inline",
    onClick: handleMenuClick,
    defaultSelectedKeys: ["article_0_0"],
    defaultOpenKeys: ['cat_0']
  }, getMenuBar()))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 19,
    className: "article-content"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    dangerouslySetInnerHTML: {
      __html: articleHtml
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0__["memo"](Tech));

/***/ }),

/***/ "./src/biz-components/Tech/route.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkComponent", function() { return LinkComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteComponent", function() { return RouteComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/biz-components/Tech/Index.tsx");



var LinkComponent = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  to: "/tech"
}, "Techs");
var RouteComponent = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: "/tech/:title?",
  component: _Index__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/biz-components/Trip/Index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_ArticleList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/ArticleList.tsx");
/* harmony import */ var articles_trips_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/articles/trips/content.tsx");




var Trips = function Trips() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "trip-content"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_ArticleList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    content: articles_trips_content__WEBPACK_IMPORTED_MODULE_2__["content"],
    articleGroupTitle: "\u4E1A\u4F59\u65C5\u884C\u5BB6",
    hideImage: false,
    hideMoreBtn: true
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Trips);

/***/ }),

/***/ "./src/biz-components/Trip/route.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkComponent", function() { return LinkComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteComponent", function() { return RouteComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/biz-components/Trip/Index.tsx");



var LinkComponent = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  to: "/trip"
}, "Trips");
var RouteComponent = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: "/trip",
  component: _Index__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/components/ArticleList.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/antd/es/index.js");
/* harmony import */ var config_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/config/base.js");




var ArticleList = function ArticleList(props) {
  var _props$articleGroupTi = props.articleGroupTitle,
      articleGroupTitle = _props$articleGroupTi === void 0 ? '' : _props$articleGroupTi,
      _props$content = props.content,
      content = _props$content === void 0 ? [] : _props$content,
      _props$hideMoreBtn = props.hideMoreBtn,
      hideMoreBtn = _props$hideMoreBtn === void 0 ? false : _props$hideMoreBtn,
      _props$hideImage = props.hideImage,
      hideImage = _props$hideImage === void 0 ? false : _props$hideImage;

  var getArticles = function getArticles() {
    var res = [];
    content.forEach(function (cat) {
      cat.articles.forEach(function (article) {
        if (article.showInIndex) {
          res.push(article);
        }
      });
    });
    return res;
  };

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    type: "flex",
    justify: "center"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "nav-list"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "article-group-title"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, articleGroupTitle)), getArticles().map(function (article) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      span: hideMoreBtn ? 24 : 12
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
      href: "".concat(config_base__WEBPACK_IMPORTED_MODULE_2__["default"].appRootUrl, "/").concat(article.link)
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "article-card"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, !hideImage ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      span: 8
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "article-img"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
      src: "".concat(config_base__WEBPACK_IMPORTED_MODULE_2__["default"].appRootUrl, "/").concat(article.img)
    }))) : null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      span: hideImage ? 24 : 16
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "article-meta text-left ".concat(hideMoreBtn ? 'full-width' : '')
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", null, article.title), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, article.abstract)))))));
  }))), !hideMoreBtn ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    type: "flex",
    justify: "center"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 4
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    href: "/tech",
    className: "more-btn"
  }, "More Articles"))) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (ArticleList);

/***/ }),

/***/ "./src/config/base.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  appRootUrl: '/about_me'
});

/***/ }),

/***/ "./src/index.css":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_css_index_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/styles/css/index.less");
/* harmony import */ var _styles_css_index_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css_index_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/antd/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var biz_components_Tech_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/biz-components/Tech/route.tsx");
/* harmony import */ var biz_components_Trip_route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/biz-components/Trip/route.tsx");
/* harmony import */ var biz_components_Cover_route__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/biz-components/Cover/route.tsx");


 // import * as serviceWorker from './serviceWorker';

 // import loadable from '@loadable/component'
// import pMinDelay from 'p-min-delay'






 // loading Navbar, delay 2s
// const NavBar = loadable(() => pMinDelay(import(/* webpackChunkName: "NavBar" */ './NavBar'), 2000), {
//   fallback: <div>Loading...</div>,
// })

function IndexContent() {
  var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useLocation"])();
  return (//   <TransitionGroup>
    //     {/*
    //       This is no different than other usage of
    //       <CSSTransition>, just make sure to pass
    //       `location` to `Switch` so it can match
    //       the old location as it animates out.
    //     */}
    //     {/* While this component is meant for multiple Transition or CSSTransition children, 
    //         sometimes you may want to have a single transition child with content that you want to be transitioned out 
    //         and in when you change it (e.g. routes, images etc.) In that case you can change the key prop of the transition child as you change its content, 
    //         this will cause TransitionGroup to transition the child out and back in.
    //       */ 
    //     }
    //     <CSSTransition
    //       // key 是为了每次重新渲染的时候，重新卸载&加载component，才能触发transition效果
    //       // 此处只是子组件的content变了，Transition组件并没有变，所以需要用key强制重载
    //       // location.key - A unique string representing this location
    //       key={location.key}
    //       classNames="fade"
    //       timeout={300}
    //     >
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Switch"], {
      location: location
    }, biz_components_Tech_route__WEBPACK_IMPORTED_MODULE_6__["RouteComponent"], biz_components_Trip_route__WEBPACK_IMPORTED_MODULE_7__["RouteComponent"], biz_components_Cover_route__WEBPACK_IMPORTED_MODULE_8__["RouteComponent"]) //     </CSSTransition>
    //   </TransitionGroup>

  );
}

var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "App"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_5__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    type: "flex",
    align: "middle",
    className: "nav"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    span: 7,
    offset: 1
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: '/',
    className: "navbar-brand"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    className: "logo",
    src: "/img/logo.png",
    width: "50"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, "\u5C0F\u4E16\u754C"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    span: 2,
    offset: 10,
    className: "nav-item"
  }, biz_components_Tech_route__WEBPACK_IMPORTED_MODULE_6__["LinkComponent"]), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    span: 2,
    className: "nav-item"
  }, biz_components_Trip_route__WEBPACK_IMPORTED_MODULE_7__["LinkComponent"])), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](IndexContent, null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("footer", {
    className: "container-fluid"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    type: "flex",
    justify: "center",
    align: "middle"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    span: 10,
    className: "footer"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, "\xA9 copy DENG Xiao All Rights Received. ")))))));
};

react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](react__WEBPACK_IMPORTED_MODULE_0__["createElement"](App, null), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

/***/ }),

/***/ "./src/styles/css/index.less":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/index.tsx","runtime-index","vendors~index~techs","vendors~index"]]]);
//# sourceMappingURL=index.4cff2eed.chunk.js.map