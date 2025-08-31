// Variáveis globais
let selectedAddiction = ''
let cleanStartDate = null
let currentCalendarDate = new Date()

// Dados dos marcos de recuperação por tipo de dependência
const milestones = {
  alcool: [
    {
      days: 1,
      title: '24 horas',
      description: 'Álcool sai da corrente sanguínea',
      icon: '💧',
    },
    {
      days: 3,
      title: '72 horas',
      description: 'Sintomas de abstinência diminuem',
      icon: '🌅',
    },
    {
      days: 7,
      title: '1 semana',
      description: 'Qualidade do sono melhora',
      icon: '😴',
    },
    {
      days: 30,
      title: '1 mês',
      description: 'Fígado começa a se regenerar',
      icon: '💚',
    },
    {
      days: 90,
      title: '3 meses',
      description: 'Sistema imunológico mais forte',
      icon: '💪',
    },
    {
      days: 180,
      title: '6 meses',
      description: 'Pressão arterial normalizada',
      icon: '❤️',
    },
    {
      days: 365,
      title: '1 ano',
      description: 'Risco de doenças reduzido em 50%',
      icon: '🏆',
    },
  ],
  cigarro: [
    {
      days: 1,
      title: '24 horas',
      description: 'CO no sangue volta ao normal',
      icon: '🫁',
    },
    {
      days: 3,
      title: '72 horas',
      description: 'Nicotina totalmente eliminada',
      icon: '🚫',
    },
    {
      days: 14,
      title: '2 semanas',
      description: 'Circulação sanguínea melhora',
      icon: '💝',
    },
    {
      days: 30,
      title: '1 mês',
      description: 'Função pulmonar aumenta 30%',
      icon: '🌬️',
    },
    {
      days: 90,
      title: '3 meses',
      description: 'Tosse e falta de ar diminuem',
      icon: '🌿',
    },
    {
      days: 365,
      title: '1 ano',
      description: 'Risco de infarto cai pela metade',
      icon: '❤️‍🩹',
    },
    {
      days: 1825,
      title: '5 anos',
      description: 'Risco de câncer reduzido drasticamente',
      icon: '🏆',
    },
  ],
  drogas: [
    {
      days: 1,
      title: '24 horas',
      description: 'Início da desintoxicação física',
      icon: '🌱',
    },
    {
      days: 7,
      title: '1 semana',
      description: 'Sintomas físicos diminuem',
      icon: '💊',
    },
    {
      days: 30,
      title: '1 mês',
      description: 'Clareza mental retorna',
      icon: '🧠',
    },
    {
      days: 90,
      title: '3 meses',
      description: 'Neurotransmissores se equilibram',
      icon: '⚖️',
    },
    {
      days: 180,
      title: '6 meses',
      description: 'Sistema nervoso se recupera',
      icon: '🔄',
    },
    {
      days: 270,
      title: '9 meses',
      description: 'Não detectável em exames',
      icon: '✅',
    },
    {
      days: 365,
      title: '1 ano',
      description: 'Cérebro totalmente recuperado',
      icon: '🏆',
    },
  ],
  pornografia: [
    {
      days: 7,
      title: '1 semana',
      description: 'Redução da ansiedade',
      icon: '😌',
    },
    {
      days: 30,
      title: '1 mês',
      description: 'Melhora na autoestima',
      icon: '💪',
    },
    {
      days: 90,
      title: '3 meses',
      description: 'Relacionamentos mais saudáveis',
      icon: '❤️',
    },
    {
      days: 180,
      title: '6 meses',
      description: 'Concentração e foco melhoram',
      icon: '🎯',
    },
    {
      days: 365,
      title: '1 ano',
      description: 'Vida sexual mais equilibrada',
      icon: '🏆',
    },
  ],
  jogos: [
    {
      days: 7,
      title: '1 semana',
      description: 'Controle financeiro retorna',
      icon: '💰',
    },
    {
      days: 30,
      title: '1 mês',
      description: 'Ansiedade diminui significativamente',
      icon: '😮‍💨',
    },
    {
      days: 90,
      title: '3 meses',
      description: 'Relacionamentos se fortalecem',
      icon: '👥',
    },
    {
      days: 180,
      title: '6 meses',
      description: 'Estabilidade emocional',
      icon: '⚖️',
    },
    {
      days: 365,
      title: '1 ano',
      description: 'Nova perspectiva de vida',
      icon: '🏆',
    },
  ],
  'redes-sociais': [
    {
      days: 3,
      title: '72 horas',
      description: 'Ansiedade por likes diminui',
      icon: '📵',
    },
    {
      days: 7,
      title: '1 semana',
      description: 'Mais tempo para si mesmo',
      icon: '⏰',
    },
    {
      days: 30,
      title: '1 mês',
      description: 'Autoestima menos dependente',
      icon: '💪',
    },
    {
      days: 90,
      title: '3 meses',
      description: 'Relações pessoais melhoram',
      icon: '👥',
    },
    {
      days: 180,
      title: '6 meses',
      description: 'Produtividade aumenta',
      icon: '📈',
    },
    {
      days: 365,
      title: '1 ano',
      description: 'Vida mais presente e real',
      icon: '🏆',
    },
  ],
  compras: [
    {
      days: 7,
      title: '1 semana',
      description: 'Controle financeiro melhora',
      icon: '💳',
    },
    {
      days: 30,
      title: '1 mês',
      description: 'Ansiedade por consumo diminui',
      icon: '😌',
    },
    {
      days: 90,
      title: '3 meses',
      description: 'Orçamento mais equilibrado',
      icon: '📊',
    },
    {
      days: 180,
      title: '6 meses',
      description: 'Valores pessoais se redefinem',
      icon: '💎',
    },
    {
      days: 365,
      title: '1 ano',
      description: 'Liberdade financeira cresce',
      icon: '🏆',
    },
  ],
  comida: [
    {
      days: 3,
      title: '72 horas',
      description: 'Controle sobre impulsos',
      icon: '🧘',
    },
    {
      days: 7,
      title: '1 semana',
      description: 'Digestão se normaliza',
      icon: '🌿',
    },
    {
      days: 30,
      title: '1 mês',
      description: 'Relação saudável com comida',
      icon: '🥗',
    },
    {
      days: 90,
      title: '3 meses',
      description: 'Autoestima corporal melhora',
      icon: '💪',
    },
    {
      days: 180,
      title: '6 meses',
      description: 'Peso se estabiliza naturalmente',
      icon: '⚖️',
    },
    {
      days: 365,
      title: '1 ano',
      description: 'Vida mais equilibrada',
      icon: '🏆',
    },
  ],
}

// Frases motivacionais
const motivations = [
  'Cada dia limpo é uma vitória que você deve celebrar! 🎉',
  'Você está mais forte hoje do que ontem. Continue! 💪',
  'Sua jornada inspira outros a também mudarem suas vidas. ✨',
  'O mais difícil você já passou. Agora é manter o foco! 🎯',
  'Você escolheu a vida. Que orgulho de você! ❤️',
  "Cada 'não' que você disse foi um 'sim' para sua saúde. 🌱",
  'Você está escrevendo uma nova história. Continue! 📖',
  'Sua força interior é maior do que qualquer vício. 🔥',
  'Hoje você acordou livre. Que sensação incrível! 🆓',
  'Você está provando para si mesmo que é capaz. Parabéns! 🏆',
]

// Inicializar seletores de data
function initializeDateSelectors() {
  const daySelect = document.getElementById('day')
  const monthSelect = document.getElementById('month')
  const yearSelect = document.getElementById('year')

  // Dias
  for (let i = 1; i <= 31; i++) {
    const option = document.createElement('option')
    option.value = i
    option.textContent = i
    daySelect.appendChild(option)
  }

  // Meses
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ]
  months.forEach((month, index) => {
    const option = document.createElement('option')
    option.value = index + 1
    option.textContent = month
    monthSelect.appendChild(option)
  })

  // Anos (últimos 10 anos)
  const currentYear = new Date().getFullYear()
  for (let i = currentYear; i >= currentYear - 10; i--) {
    const option = document.createElement('option')
    option.value = i
    option.textContent = i
    yearSelect.appendChild(option)
  }

  // Definir data atual como padrão
  const today = new Date()
  daySelect.value = today.getDate()
  monthSelect.value = today.getMonth() + 1
  yearSelect.value = today.getFullYear()
}

// Inicializar quando DOM carregado
document.addEventListener('DOMContentLoaded', function () {
  initializeDateSelectors()

  // Event listeners para seleção de dependências
  document.querySelectorAll('.addiction-card').forEach((card) => {
    card.addEventListener('click', function () {
      document
        .querySelectorAll('.addiction-card')
        .forEach((c) => c.classList.remove('selected'))
      this.classList.add('selected')
      selectedAddiction = this.dataset.addiction
    })
  })
})

// Calcular tempo limpo
function calculateCleanTime() {
  if (!selectedAddiction) {
    alert('Por favor, selecione uma dependência primeiro!')
    return
  }

  const day = document.getElementById('day').value
  const month = document.getElementById('month').value
  const year = document.getElementById('year').value

  cleanStartDate = new Date(year, month - 1, day)
  const now = new Date()

  if (cleanStartDate > now) {
    alert('A data não pode ser no futuro!')
    return
  }

  updateTimeDisplay()
  updateCalendar()
  updateMilestones()
  updateStats()

  document.getElementById('results').style.display = 'block'
  document.getElementById('results').scrollIntoView({ behavior: 'smooth' })

  // Mostrar motivação após 1 segundo
  setTimeout(showDailyMotivation, 1000)
}

// Atualizar display de tempo
function updateTimeDisplay() {
  const now = new Date()
  const diff = now - cleanStartDate

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
  const months = Math.floor(
    (diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30),
  )
  const days = Math.floor(
    (diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24),
  )
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

  const timeGrid = document.getElementById('timeGrid')
  timeGrid.innerHTML = `
        <div class="time-unit">
            <span class="number">${years}</span>
            <span class="label">Anos</span>
        </div>
        <div class="time-unit">
            <span class="number">${months}</span>
            <span class="label">Meses</span>
        </div>
        <div class="time-unit">
            <span class="number">${days}</span>
            <span class="label">Dias</span>
        </div>
        <div class="time-unit">
            <span class="number">${hours}</span>
            <span class="label">Horas</span>
        </div>
        <div class="time-unit">
            <span class="number">${minutes}</span>
            <span class="label">Minutos</span>
        </div>
    `
}

// Atualizar calendário
function updateCalendar() {
  const calendar = document.getElementById('calendar')
  const title = document.getElementById('calendarTitle')

  const year = currentCalendarDate.getFullYear()
  const month = currentCalendarDate.getMonth()

  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ]

  title.textContent = `${months[month]} ${year}`

  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const daysInMonth = lastDay.getDate()
  const startingDayOfWeek = firstDay.getDay()

  calendar.innerHTML = ''

  // Cabeçalhos dos dias da semana
  const dayHeaders = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
  dayHeaders.forEach((day) => {
    const dayElement = document.createElement('div')
    dayElement.className = 'calendar-day header'
    dayElement.textContent = day
    calendar.appendChild(dayElement)
  })

  // Dias vazios no início
  for (let i = 0; i < startingDayOfWeek; i++) {
    const emptyDay = document.createElement('div')
    emptyDay.className = 'calendar-day'
    calendar.appendChild(emptyDay)
  }

  // Dias do mês
  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement('div')
    const dayDate = new Date(year, month, day)
    const today = new Date()

    dayElement.className = 'calendar-day'
    dayElement.textContent = day

    if (dayDate >= cleanStartDate && dayDate <= today) {
      dayElement.classList.add('clean')
    }

    if (dayDate.toDateString() === today.toDateString()) {
      dayElement.classList.add('today')
    }

    calendar.appendChild(dayElement)
  }
}

// Navegar meses do calendário
function changeMonth(direction) {
  currentCalendarDate.setMonth(currentCalendarDate.getMonth() + direction)
  updateCalendar()
}

// Atualizar marcos
function updateMilestones() {
  const milestonesList = document.getElementById('milestonesList')
  const now = new Date()
  const daysPassed = Math.floor((now - cleanStartDate) / (1000 * 60 * 60 * 24))

  const addictionMilestones = milestones[selectedAddiction] || []

  milestonesList.innerHTML = ''

  addictionMilestones.forEach((milestone) => {
    const milestoneElement = document.createElement('div')
    milestoneElement.className = 'milestone'

    if (daysPassed >= milestone.days) {
      milestoneElement.classList.add('achieved')
    } else {
      const daysUntil = milestone.days - daysPassed
      if (daysUntil <= 7) {
        milestoneElement.classList.add('next')
      } else {
        milestoneElement.classList.add('future')
      }
    }

    milestoneElement.innerHTML = `
            <div class="icon">${milestone.icon}</div>
            <div class="content">
                <div class="time">${milestone.title}</div>
                <div class="description">${milestone.description}</div>
            </div>
        `

    milestonesList.appendChild(milestoneElement)
  })
}

// Atualizar estatísticas
function updateStats() {
  const now = new Date()
  const totalDays = Math.floor((now - cleanStartDate) / (1000 * 60 * 60 * 24))

  document.getElementById('totalDays').textContent = totalDays
  document.getElementById('cleanStreak').textContent = totalDays

  // Encontrar próximo marco
  const addictionMilestones = milestones[selectedAddiction] || []
  const nextMilestone = addictionMilestones.find((m) => m.days > totalDays)
  const daysToNext = nextMilestone ? nextMilestone.days - totalDays : 0

  document.getElementById('nextMilestone').textContent = daysToNext
}

// Mostrar motivação diária
function showDailyMotivation() {
  const today = new Date()
  const dayOfYear = Math.floor(
    (today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24),
  )
  const motivation = motivations[dayOfYear % motivations.length]

  // Criar popup de motivação
  const motivationPopup = document.createElement('div')
  motivationPopup.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
        color: white;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 8px 16px rgba(0,0,0,0.2);
        z-index: 1000;
        max-width: 300px;
        animation: slideIn 0.5s ease;
    `

  motivationPopup.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
            <div>
                <strong>💝 Motivação do Dia</strong>
                <p style="margin: 10px 0 0 0; line-height: 1.4;">${motivation}</p>
            </div>
            <button onclick="this.parentElement.parentElement.remove()" 
                    style="background: none; border: none; color: white; font-size: 18px; cursor: pointer; padding: 0; margin-left: 10px;">×</button>
        </div>
    `

  document.body.appendChild(motivationPopup)

  // Auto remove após 8 segundos
  setTimeout(() => {
    if (motivationPopup.parentElement) {
      motivationPopup.remove()
    }
  }, 8000)
}

// Função para exportar dados (futuro)
function exportProgress() {
  const data = {
    addiction: selectedAddiction,
    startDate: cleanStartDate.toISOString(),
    totalDays: Math.floor(
      (new Date() - cleanStartDate) / (1000 * 60 * 60 * 24),
    ),
    milestones: milestones[selectedAddiction],
  }

  const dataStr = JSON.stringify(data, null, 2)
  const dataUri =
    'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr)

  const exportFileDefaultName = `tempo-limpo-${selectedAddiction}-${
    new Date().toISOString().split('T')[0]
  }.json`

  const linkElement = document.createElement('a')
  linkElement.setAttribute('href', dataUri)
  linkElement.setAttribute('download', exportFileDefaultName)
  linkElement.click()
}

// Função de compartilhamento
function shareProgress() {
  const now = new Date()
  const totalDays = Math.floor((now - cleanStartDate) / (1000 * 60 * 60 * 24))
  const addiction = selectedAddiction.replace('-', ' ')

  const shareText = `🎉 Estou há ${totalDays} dias limpo de ${addiction}! Cada dia é uma vitória na minha jornada de recuperação. 💪 #TempoLimpo #Recuperacao`

  if (navigator.share) {
    navigator.share({
      title: 'Meu Progresso - Tempo Limpo',
      text: shareText,
    })
  } else {
    // Fallback para copiar para clipboard
    navigator.clipboard.writeText(shareText).then(() => {
      alert('Texto copiado para área de transferência!')
    })
  }
}

// Atualizar tempo a cada minuto
setInterval(() => {
  if (cleanStartDate) {
    updateTimeDisplay()
  }
}, 60000)

// Função para salvar no localStorage (se quiser persistir dados)
function saveProgress() {
  const progressData = {
    addiction: selectedAddiction,
    startDate: cleanStartDate ? cleanStartDate.toISOString() : null,
    lastUpdate: new Date().toISOString(),
  }

  try {
    localStorage.setItem('cleanTimeProgress', JSON.stringify(progressData))
  } catch (error) {
    console.log('Não foi possível salvar no localStorage')
  }
}

// Função para carregar do localStorage
function loadProgress() {
  try {
    const saved = localStorage.getItem('cleanTimeProgress')
    if (saved) {
      const data = JSON.parse(saved)
      if (data.addiction && data.startDate) {
        selectedAddiction = data.addiction
        cleanStartDate = new Date(data.startDate)

        // Marcar a dependência como selecionada
        document
          .querySelector(`[data-addiction="${selectedAddiction}"]`)
          ?.classList.add('selected')

        // Atualizar os campos de data
        const startDate = new Date(data.startDate)
        document.getElementById('day').value = startDate.getDate()
        document.getElementById('month').value = startDate.getMonth() + 1
        document.getElementById('year').value = startDate.getFullYear()

        return true
      }
    }
  } catch (error) {
    console.log('Erro ao carregar dados salvos')
  }
  return false
}

// Adicionar ao DOMContentLoaded para tentar carregar dados salvos
document.addEventListener('DOMContentLoaded', function () {
  initializeDateSelectors()

  // Event listeners para seleção de dependências
  document.querySelectorAll('.addiction-card').forEach((card) => {
    card.addEventListener('click', function () {
      document
        .querySelectorAll('.addiction-card')
        .forEach((c) => c.classList.remove('selected'))
      this.classList.add('selected')
      selectedAddiction = this.dataset.addiction
      saveProgress() // Salvar quando selecionar
    })
  })

  // Tentar carregar dados salvos
  if (loadProgress()) {
    // Se conseguiu carregar, calcular automaticamente
    setTimeout(() => {
      calculateCleanTime()
    }, 500)
  }
})

// Salvar progresso quando calcular
const originalCalculateCleanTime = calculateCleanTime
calculateCleanTime = function () {
  originalCalculateCleanTime()
  if (cleanStartDate) {
    saveProgress()
  }
}
