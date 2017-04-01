import {HtmlElement, Link, DocumentTitle} from 'cx/widgets';

export default <cx>
    <DocumentTitle value="About" />
    <h1 putInto="header">About</h1>
    <div class="page">
        <div class="prose">
            <h2>The App</h2>
            <p ws>
                This is one of the CxJS demo applications and it illustrates usage of the
                framework, widgets and charts.
                Data needed for reports is fetched directly from The World Bank Data API.
                The application is built on top of modern web technologies such as React, Babel and Webpack.
                Google Firebase is used to store report definitions, authentication and hosting.
                Circle CI is used for continuous deployment.
            </p>

            <p ws>
                <a href="https://cxjs.io/">CxJS</a> -
                <a href="http://data.worldbank.org/">The World Bank Data API</a> -
                <a href="https://facebook.github.io/react/">React</a> -
                <a href="https://babeljs.io/">Babel</a> -
                <a href="https://webpack.js.org//">webpack</a> -
                <a href="https://firebase.google.com/">Firebase</a> -
                <a href="https://circleci.com/">Circle CI</a>
            </p>

            <h2>CxJS</h2>
            <p ws>
                CxJS is a commercial UI framework designed to
                streamline development of complex user interfaces.
                Out of the box, Cx includes form elements, form validation, advanced grid control,
                navigation elements, tooltips, overlays, charts, routing, layout support, themes,
                drag & drop support, culture dependent formatting and more. If you're building an application
                that needs some of these features, you should definitely check out Cx.
            </p>

            <p ws>
                <a href="https://cxjs.io/">Website</a> -
                <a href="https://cxjs.io/examples">Examples</a> -
                <a href="https://cxjs.io/fiddle">Fiddle</a> -
                <a href="https://cxjs.io/themes">Themes</a> -
                <a href="https://cxjs.io/docs">Documentation</a>
            </p>

            <h2>Codaxy</h2>
            <p ws>
                We're a small software company specialized in developing modern business application front-ends.
                You may know us if you're already familiar with Cx or if you have used one of
                <a href="https://store.codaxy.com/Themes">our themes for Sencha Ext JS</a>.
                We provide software development services, so feel free to contact us
                if you have an interesting project.
            </p>

            <p ws>
                <a href="https://www.codaxy.com/">Website</a> -
                <a href="https://www.codaxy.com/#contact">Contact</a> -
                <a href="https://twitter.com/codaxy">Twitter</a> -
                <a href="https://blog.codaxy.com">Blog</a> -
                <a href="https://store.codaxy.com">Store</a>
            </p>


        </div>
    </div>
</cx>
