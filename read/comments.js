const t = b; (function (l, m) { const s = b, n = l(); while (!![]) { try { const o = -parseInt(s(0x193)) / 0x1 + parseInt(s(0x17f)) / 0x2 + parseInt(s(0x195)) / 0x3 + -parseInt(s(0x1af)) / 0x4 + parseInt(s(0x194)) / 0x5 + -parseInt(s(0x181)) / 0x6 * (-parseInt(s(0x198)) / 0x7) + -parseInt(s(0x183)) / 0x8; if (o === m) break; else n['push'](n['shift']()); } catch (p) { n['push'](n['shift']()); } } }(a, 0x2fd72)); const f = 'https://comments.puppetinsanity-gov.workers.dev/api/data', g = document[t(0x191)](t(0x1a5)), h = document[t(0x191)](t(0x189)), i = document[t(0x191)](t(0x1ad)); g[t(0x197)](t(0x1a8), () => { const u = t, l = 0xfa - g[u(0x1a1)][u(0x17c)]; h[u(0x1b1)] = '' + l; if (l > 0x64) h[u(0x190)][u(0x18c)] = u(0x17b); else l > 0x32 ? h['style'][u(0x18c)] = u(0x1a3) : h[u(0x190)][u(0x18c)] = u(0x17e); i['value']['length'] > 0x19 && (i[u(0x1a1)] = i['value'][u(0x18d)](0x0, 0x19)); }); function b(c, d) { const e = a(); return b = function (f, g) { f = f - 0x17a; let h = e[f]; return h; }, b(c, d); } async function j() { const v = t, l = document[v(0x1a7)](v(0x19f)), m = window[v(0x1b0)][v(0x1ae)]; try { const n = await fetch(f + v(0x18a) + encodeURIComponent(m), { 'method': v(0x199) }); if (!n['ok']) throw new Error(v(0x1a2) + n['status']); const o = await n[v(0x17a)](); l['innerHTML'] = ''; if (o[v(0x17c)] === 0x0) { l[v(0x184)] = v(0x19c); return; } o[v(0x185)](p => { const w = v, q = document[w(0x1ab)]('div'); q[w(0x182)][w(0x1a6)]('comment'), q[w(0x184)] = w(0x18f) + (p['c'] || 'Anonymous') + '</strong><br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span>' + p[w(0x186)] + w(0x1ac) + new Date(p['d'])['toLocaleString']() + w(0x196), l['appendChild'](q); }); } catch (p) { console['error'](v(0x18e), p), l[v(0x184)] = '<p>Error\x20loading\x20comments.\x20Please\x20try\x20again\x20later.</p>'; } } async function k(l) { const x = t; l[x(0x19a)](); const m = i[x(0x1a1)][x(0x187)](), n = g[x(0x1a1)][x(0x187)](), o = window[x(0x1b0)][x(0x1ae)]; if (!n) { alert(x(0x17d)); return; } const p = { 'c': m || x(0x19b), 'content': n, 'source': o }; try { const q = await fetch(f, { 'method': x(0x1a4), 'headers': { 'e': x(0x192) }, 'body': JSON[x(0x180)](p) }); if (!q['ok']) throw new Error('Failed\x20to\x20submit\x20comment:\x20' + q['status']); alert(x(0x1a0)), document[x(0x191)](x(0x18b))['reset'](), j(); } catch (r) { console[x(0x1aa)](x(0x188), r), alert(x(0x19d)); } } function a() { const y = ['716065IcPGjY', 'GET', 'preventDefault', 'Anonymous', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>No\x20comments\x20found\x20for\x20this\x20page.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>Checkout\x20the\x20<a\x20href=\x22https://discord.com/invite/A7RwNZZ5q6\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20target=\x22_blank\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22text-decoration:\x20none;\x20color:\x20#5865F2;\x20font-weight:\x20bold;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-shadow:\x201px\x201px\x202px\x20rgba(0,\x200,\x200,\x200.3);\x20transition:\x20all\x200.3s\x20ease;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Discord\x0a\x20\x20\x20\x20\x20\x20\x20\x20</a>\x20for\x20further\x20discussion.</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20a:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#404EED;\x20/*\x20Slightly\x20darker\x20Discord\x20color\x20on\x20hover\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(88,\x20101,\x20242,\x200.2);\x20/*\x20Highlight\x20background\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200\x204px;\x20/*\x20Padding\x20for\x20hover\x20highlight\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20</style>', 'Failed\x20to\x20submit\x20your\x20comment.\x20Please\x20try\x20again.', 'submit', '.mainCommentSection', 'Comment\x20submitted\x20successfully!', 'value', 'Failed\x20to\x20fetch\x20comments:\x20', 'orange', 'POST', 'commentInput', 'add', 'querySelector', 'input', 'DOMContentLoaded', 'error', 'createElement', '</span><br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<em>', 'nameInput', 'href', '599224FwAjlU', 'location', 'textContent', 'json', 'grey', 'length', 'Please\x20enter\x20a\x20comment\x20before\x20submitting.', 'red', '22118ClaQVy', 'stringify', '18hfSFAq', 'classList', '3028688vYgDcz', 'innerHTML', 'forEach', 'content', 'trim', 'Error\x20submitting\x20comment:', 'charCounter', '?source=', 'commentForm', 'color', 'slice', 'Error\x20fetching\x20comments:', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>', 'style', 'getElementById', 'application/json', '89827tKnnlL', '677630RLiZwh', '1082109mWBNqa', '</em>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'addEventListener']; a = function () { return y; }; return a(); } document[t(0x191)](t(0x18b))['addEventListener'](t(0x19e), k), window[t(0x197)](t(0x1a9), j);