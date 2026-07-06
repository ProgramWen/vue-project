<script setup lang="ts">
import { ref } from 'vue'

// 定義導覽列選單
const navItems = [
  { name: '關於我', href: '#about' },
  { name: '作品專案', href: '#projects' },
  { name: '技能樹', href: '#skills' },
  { name: '聯絡我', href: '#contact' }
]

// 模擬的作品資料（未來可以抽離到獨立的 JSON 檔）
const projects = [
  {
    title: '智慧眠友 DreamyPal',
    desc: '結合寵物互動系統與睡眠追蹤功能的行動應用程式，使用網頁與行動端前端開發技術打造。',
    tags: ['Vue 3', 'Tailwind CSS', 'TypeScript']
  },
  {
    title: '企業 MIS 與報價管理系統',
    desc: '主導公司內部核心系統重構，優化資料庫預存程序，提升複雜報價單的資料查詢與前後端互動效率。',
    tags: ['C#', 'SQL Server', 'WPF', 'UI Refactoring']
  }
]
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-950">
    
    <header class="sticky top-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800">
      <div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" class="text-xl font-black tracking-wider text-teal-400 font-mono">
          BRIAN.DEV
        </a>
        <nav class="hidden md:flex space-x-8">
          <a v-for="item in navItems" :key="item.name" :href="item.href" 
             class="text-sm font-medium text-slate-400 hover:text-teal-400 transition-colors duration-200">
            {{ item.name }}
          </a>
        </nav>
      </div>
    </header>

    <main class="max-w-6xl mx-auto px-4 pt-20 pb-32">
      <section class="max-w-3xl space-y-6">
        <div class="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 rounded-full px-3 py-1 text-xs text-teal-400">
          <span class="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>開放新專案合作 / 技術交流</span>
        </div>
        
        <h1 class="text-5xl md:text-6xl font-extrabold tracking-tight">
          哈囉，我是 <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Brian</span>
        </h1>
        
        <p class="text-xl text-slate-400 leading-relaxed max-w-2xl">
          一名熱衷於架構優化、系統重構與前端互動設計的**軟體工程師**。擅長將複雜的後端邏輯與資料庫架構，轉化為直覺流暢的使用者介面。
        </p>

        <div class="pt-4 flex flex-wrap gap-4">
          <a href="#projects" class="bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-6 py-3 rounded-lg shadow-lg shadow-teal-500/20 transition-all duration-200">
            瀏覽我的作品
          </a>
          <a href="#contact" class="bg-slate-900 hover:bg-slate-800 border border-slate-800 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
            聯絡我
          </a>
        </div>
      </section>

      <hr class="my-24 border-slate-900" />

      <section id="projects" class="space-y-12">
        <div>
          <h2 class="text-3xl font-bold tracking-tight text-slate-100">精選作品專案</h2>
          <p class="text-slate-400 mt-2">近期的開發專案與技術實踐</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="project in projects" :key="project.title" 
               class="group relative bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between">
            <div class="space-y-4">
              <h3 class="text-xl font-bold text-slate-200 group-hover:text-teal-400 transition-colors duration-200">
                {{ project.title }}
              </h3>
              <p class="text-slate-400 text-sm leading-relaxed">
                {{ project.desc }}
              </p>
            </div>
            
            <div class="flex flex-wrap gap-2 mt-6">
              <span v-for="tag in project.tags" :key="tag" 
                    class="bg-slate-950 text-slate-400 border border-slate-800 text-xs font-mono px-2.5 py-1 rounded">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>

  </div>
</template>