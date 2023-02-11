/*
 * Federated Wiki : Radar Plugin
 *
 * Licensed under the MIT license.
 * https://github.com/fedwiki/wiki-plugin-radar/blob/master/LICENSE.txt
 */

const d3Module = import('https://cdn.jsdelivr.net/npm/d3@7/+esm')

async function emit($item, item) {
  const d3 = await d3Module

  

}

function bind($item, item) {}

if (typeof window !== "undefined" && window !== null) {
  window.plugins.radar = {
    emit: emit,
    bind: bind
  }
}
