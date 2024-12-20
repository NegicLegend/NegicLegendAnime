"use strict"
import { $ } from './bind.js'
import animeList from '../Storage/List/AnimeList.js'

(() => {
    const display = $('#quote')

    function checkLevel(lv) {
        if(lv[0] == 'S') return 'mythical'
        if(lv[0] == 'A') return 'legendary'
        return 'epic'
    }

    $('#main').innerHTML = animeList.map((anm, i) => {
        return `
            <div class="anime-wrapper">
                <div class="anime-level ${checkLevel(anm.level)}">${anm.level}</div>
                <div class="anime-img-wrap ${anm.imgP}">
                    <img src="./Storage/IMG/${i + 1}.jpg" class="anime-img" alt="${anm.name}">
                    <a href="${anm.link}" class="anime-link">${anm.name}</a>
                </div>
                <div class="anime-tag-wrap">
                    <p class="anime-tag">${anm.tags.join(', ')}</p>
                </div>
            </div>
        `
    }).join('\n')
    $('#number').innerText = animeList.length
    display.innerHTML = `${animeList[0].quote.content} - ${animeList[0].quote.author}`
    display.dataset.index = 0
})()