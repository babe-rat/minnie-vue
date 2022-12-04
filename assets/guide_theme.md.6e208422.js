import{_ as s,o as n,c as a,f as l}from"./app.c1a5a6db.js";const m=JSON.parse('{"title":"\u4E3B\u9898","description":"","frontmatter":{"realPath":"docs/guide/theme.md"},"headers":[{"level":2,"title":"\u901A\u8FC7 SCSS \u53D8\u91CF","slug":"\u901A\u8FC7-scss-\u53D8\u91CF","link":"#\u901A\u8FC7-scss-\u53D8\u91CF","children":[]}],"relativePath":"guide/theme.md","lastUpdated":null}'),p={name:"guide/theme.md"},o=l(`<h1 id="\u4E3B\u9898" tabindex="-1">\u4E3B\u9898 <a class="header-anchor" href="#\u4E3B\u9898" aria-hidden="true">#</a></h1><p>\u8BE5\u7EC4\u4EF6\u5E93\u57FA\u4E8E element-plus \u57FA\u7840\u4E0A\u4E8C\u6B21\u5C01\u88C5\uFF0C\u5F53\u4F60\u4F7F\u7528 element-plus \u63D0\u4F9B\u7684\u81EA\u5B9A\u4E49\u4E3B\u9898\u65B9\u5F0F\u5207\u6362\u65F6\uFF0C\u4E5F\u9002\u7528\u4E8E minnie-vue\u3002</p><h2 id="\u901A\u8FC7-scss-\u53D8\u91CF" tabindex="-1">\u901A\u8FC7 SCSS \u53D8\u91CF <a class="header-anchor" href="#\u901A\u8FC7-scss-\u53D8\u91CF" aria-hidden="true">#</a></h2><p>\u5177\u4F53\u53C2\u8003 element-plus <a href="https://element-plus.gitee.io/zh-CN/guide/theming.html#%E9%80%9A%E8%BF%87-scss-%E5%8F%98%E9%87%8F" target="_blank" rel="noreferrer">\u6587\u6863</a></p><p><strong>\u5982\u4F55\u8986\u76D6\u5B83\uFF1F</strong></p><p>\u5982\u679C\u60A8\u7684\u9879\u76EE\u4E5F\u4F7F\u7528\u4E86 SCSS\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4FEE\u6539 Element Plus \u7684\u6837\u5F0F\u53D8\u91CF\u3002 \u65B0\u5EFA\u4E00\u4E2A\u6837\u5F0F\u6587\u4EF6\uFF0C\u4F8B\u5982 styles/element/index.scss\uFF1A</p><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#8B949E;">// styles/element/index.scss</span></span>
<span class="line"><span style="color:#8B949E;">/* \u53EA\u9700\u8981\u91CD\u5199\u4F60\u9700\u8981\u7684\u5373\u53EF */</span></span>
<span class="line"><span style="color:#FF7B72;">@forward</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;element-plus/theme-chalk/src/common/var.scss&#39;</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">with</span><span style="color:#C9D1D9;"> (</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FFA657;">$colors</span><span style="color:#C9D1D9;">: (</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#A5D6FF;">&#39;primary&#39;</span><span style="color:#C9D1D9;">: (</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#A5D6FF;">&#39;base&#39;</span><span style="color:#C9D1D9;">: </span><span style="color:#D2A8FF;">green</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">        ),</span></span>
<span class="line"><span style="color:#C9D1D9;">    )</span></span>
<span class="line"><span style="color:#C9D1D9;">);</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#6E7781;">// styles/element/index.scss</span></span>
<span class="line"><span style="color:#6E7781;">/* \u53EA\u9700\u8981\u91CD\u5199\u4F60\u9700\u8981\u7684\u5373\u53EF */</span></span>
<span class="line"><span style="color:#CF222E;">@forward</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;element-plus/theme-chalk/src/common/var.scss&#39;</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">with</span><span style="color:#24292F;"> (</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#953800;">$colors</span><span style="color:#24292F;">: (</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#0A3069;">&#39;primary&#39;</span><span style="color:#24292F;">: (</span></span>
<span class="line"><span style="color:#24292F;">            </span><span style="color:#0A3069;">&#39;base&#39;</span><span style="color:#24292F;">: </span><span style="color:#8250DF;">green</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">        ),</span></span>
<span class="line"><span style="color:#24292F;">    )</span></span>
<span class="line"><span style="color:#24292F;">);</span></span>
<span class="line"></span></code></pre></div><p><strong>\u6309\u9700\u5BFC\u5165\u65F6\u81EA\u5B9A\u4E49\u4E3B\u9898</strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> path </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;path&#39;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { defineConfig } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;vite&#39;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> vue </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> Components </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;unplugin-vue-components/vite&#39;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { ElementPlusResolver } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;unplugin-vue-components/resolvers&#39;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { MinnieVueResolver } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;@baberat/minnie-vue-resolver&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#8B949E;">// vite.config.ts</span></span>
<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">default</span><span style="color:#FFA657;"> </span><span style="color:#D2A8FF;">defineConfig</span><span style="color:#FFA657;">({</span></span>
<span class="line"><span style="color:#FFA657;">    </span><span style="color:#C9D1D9;">resolve: {</span></span>
<span class="line"><span style="color:#C9D1D9;">        alias: {</span></span>
<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#A5D6FF;">&#39;~/&#39;</span><span style="color:#C9D1D9;">: </span><span style="color:#A5D6FF;">\`\${</span><span style="color:#C9D1D9;">path</span><span style="color:#A5D6FF;">.</span><span style="color:#D2A8FF;">resolve</span><span style="color:#A5D6FF;">(</span><span style="color:#C9D1D9;">__dirname</span><span style="color:#A5D6FF;">, </span><span style="color:#A5D6FF;">&#39;src&#39;</span><span style="color:#A5D6FF;">)</span><span style="color:#A5D6FF;">}/\`</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">        },</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span><span style="color:#FFA657;">,</span></span>
<span class="line"><span style="color:#FFA657;">    </span><span style="color:#C9D1D9;">css: {</span></span>
<span class="line"><span style="color:#C9D1D9;">        preprocessorOptions: {</span></span>
<span class="line"><span style="color:#C9D1D9;">            scss: {</span></span>
<span class="line"><span style="color:#C9D1D9;">                additionalData: </span><span style="color:#A5D6FF;">\`@use &quot;~/styles/element/index.scss&quot; as *;\`</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">            },</span></span>
<span class="line"><span style="color:#C9D1D9;">        },</span></span>
<span class="line"><span style="color:#C9D1D9;">    }</span><span style="color:#FFA657;">,</span></span>
<span class="line"><span style="color:#FFA657;">    </span><span style="color:#C9D1D9;">plugins: [</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#D2A8FF;">vue</span><span style="color:#C9D1D9;">(),</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#D2A8FF;">Components</span><span style="color:#C9D1D9;">({</span></span>
<span class="line"><span style="color:#C9D1D9;">            resolvers: [</span></span>
<span class="line"><span style="color:#C9D1D9;">                </span><span style="color:#D2A8FF;">ElementPlusResolver</span><span style="color:#C9D1D9;">({</span></span>
<span class="line"><span style="color:#C9D1D9;">                    importStyle: </span><span style="color:#A5D6FF;">&#39;sass&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">                }),</span></span>
<span class="line"><span style="color:#C9D1D9;">                </span><span style="color:#D2A8FF;">MinnieVueResolver</span><span style="color:#C9D1D9;">({</span></span>
<span class="line"><span style="color:#C9D1D9;">                    importStyle: </span><span style="color:#A5D6FF;">&#39;scss&#39;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">                }),</span></span>
<span class="line"><span style="color:#C9D1D9;">            ],</span></span>
<span class="line"><span style="color:#C9D1D9;">        }),</span></span>
<span class="line"><span style="color:#C9D1D9;">    ]</span><span style="color:#FFA657;">,</span></span>
<span class="line"><span style="color:#FFA657;">})</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> path </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;path&#39;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> { defineConfig } </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;vite&#39;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> vue </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> Components </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;unplugin-vue-components/vite&#39;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> { ElementPlusResolver } </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;unplugin-vue-components/resolvers&#39;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> { MinnieVueResolver } </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;@baberat/minnie-vue-resolver&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6E7781;">// vite.config.ts</span></span>
<span class="line"><span style="color:#CF222E;">export</span><span style="color:#953800;"> </span><span style="color:#CF222E;">default</span><span style="color:#953800;"> </span><span style="color:#8250DF;">defineConfig</span><span style="color:#953800;">({</span></span>
<span class="line"><span style="color:#953800;">    </span><span style="color:#24292F;">resolve: {</span></span>
<span class="line"><span style="color:#24292F;">        alias: {</span></span>
<span class="line"><span style="color:#24292F;">            </span><span style="color:#0A3069;">&#39;~/&#39;</span><span style="color:#24292F;">: </span><span style="color:#0A3069;">\`\${</span><span style="color:#24292F;">path</span><span style="color:#0A3069;">.</span><span style="color:#8250DF;">resolve</span><span style="color:#0A3069;">(</span><span style="color:#24292F;">__dirname</span><span style="color:#0A3069;">, </span><span style="color:#0A3069;">&#39;src&#39;</span><span style="color:#0A3069;">)</span><span style="color:#0A3069;">}/\`</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">        },</span></span>
<span class="line"><span style="color:#24292F;">    }</span><span style="color:#953800;">,</span></span>
<span class="line"><span style="color:#953800;">    </span><span style="color:#24292F;">css: {</span></span>
<span class="line"><span style="color:#24292F;">        preprocessorOptions: {</span></span>
<span class="line"><span style="color:#24292F;">            scss: {</span></span>
<span class="line"><span style="color:#24292F;">                additionalData: </span><span style="color:#0A3069;">\`@use &quot;~/styles/element/index.scss&quot; as *;\`</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">            },</span></span>
<span class="line"><span style="color:#24292F;">        },</span></span>
<span class="line"><span style="color:#24292F;">    }</span><span style="color:#953800;">,</span></span>
<span class="line"><span style="color:#953800;">    </span><span style="color:#24292F;">plugins: [</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#8250DF;">vue</span><span style="color:#24292F;">(),</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#8250DF;">Components</span><span style="color:#24292F;">({</span></span>
<span class="line"><span style="color:#24292F;">            resolvers: [</span></span>
<span class="line"><span style="color:#24292F;">                </span><span style="color:#8250DF;">ElementPlusResolver</span><span style="color:#24292F;">({</span></span>
<span class="line"><span style="color:#24292F;">                    importStyle: </span><span style="color:#0A3069;">&#39;sass&#39;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">                }),</span></span>
<span class="line"><span style="color:#24292F;">                </span><span style="color:#8250DF;">MinnieVueResolver</span><span style="color:#24292F;">({</span></span>
<span class="line"><span style="color:#24292F;">                    importStyle: </span><span style="color:#0A3069;">&#39;scss&#39;</span><span style="color:#24292F;">,</span></span>
<span class="line"><span style="color:#24292F;">                }),</span></span>
<span class="line"><span style="color:#24292F;">            ],</span></span>
<span class="line"><span style="color:#24292F;">        }),</span></span>
<span class="line"><span style="color:#24292F;">    ]</span><span style="color:#953800;">,</span></span>
<span class="line"><span style="color:#953800;">})</span></span>
<span class="line"></span></code></pre></div>`,9),e=[o];function c(t,r,y,i,F,D){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{m as __pageData,d as default};
