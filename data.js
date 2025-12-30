const QUIZ_DATABASE = {
  // === 模块 1：单选 (P1-P4) ===
  quizData1: [
    { id: 1, word: "randomly adv.", options: ["随机地", "同时地"], answer: 0 },
    { id: 2, word: "generate v.", options: ["生成", "基因遗传"], answer: 0 },
    {
      id: 3,
      word: "conceptual adj.",
      options: ["有条件的", "概念上的"],
      answer: 1,
    },
    { id: 4, word: "depletion n.", options: ["删除", "耗减"], answer: 1 },
    { id: 5, word: "curriculum n.", options: ["课程", "环境"], answer: 0 },
    { id: 6, word: "incorporate v.", options: ["合并", "统一"], answer: 0 },
    { id: 7, word: "highlight v.", options: ["划线", "强调"], answer: 1 },
    { id: 8, word: "valid adj.", options: ["有效的", "良好的"], answer: 0 },
    { id: 9, word: "manipulate v.", options: ["操纵", "促进"], answer: 0 },
    {
      id: 10,
      word: "intermediate adj.",
      options: ["中间的", "立即的"],
      answer: 0,
    },
    {
      id: 11,
      word: "representation n.",
      options: ["表现，陈述", "探究"],
      answer: 0,
    },
    { id: 12, word: "embed v.", options: ["嵌入", "固定"], answer: 0 },
    { id: 13, word: "depict v.", options: ["解释", "描述"], answer: 1 },
    { id: 14, word: "virtual adj.", options: ["虚拟的", "视觉的"], answer: 0 },
    {
      id: 15,
      word: "normative adj.",
      options: ["普通的", "标准的"],
      answer: 1,
    },
    {
      id: 16,
      word: "attribute v.",
      options: ["把...归因于", "把...归功于"],
      answer: 0,
    },
    {
      id: 17,
      word: "component n.",
      options: ["复合物", "组成部分"],
      answer: 1,
    },
    { id: 18, word: "comprise v.", options: ["由...组成", "妥协"], answer: 0 },
    {
      id: 19,
      word: "interconnect v.",
      options: ["互相联系", "连接"],
      answer: 0,
    },
    { id: 20, word: "integration n.", options: ["正真", "整合"], answer: 1 },
    { id: 21, word: "persist v.", options: ["坚持", "穿透"], answer: 0 },
    { id: 22, word: "maturity n.", options: ["毁灭", "成熟"], answer: 1 },
    { id: 23, word: "offspring n.", options: ["遗传", "后代"], answer: 1 },
    {
      id: 24,
      word: "fragmented adj.",
      options: ["片段的", "提出的"],
      answer: 0,
    },
    { id: 25, word: "allocate v.", options: ["分配", "居住"], answer: 0 },
    { id: 26, word: "pregnant adj.", options: ["晚育的", "怀孕的"], answer: 1 },
    { id: 27, word: "residue n.", options: ["居住地", "残留"], answer: 1 },
    { id: 28, word: "supplement v.", options: ["补充", "组成"], answer: 0 },
    { id: 29, word: "infection n.", options: ["影响", "感染"], answer: 1 },
    { id: 30, word: "stunt v.", options: ["阻碍", "使...吃惊"], answer: 0 },
    { id: 31, word: "accumulation n.", options: ["积累", "适应"], answer: 0 },
    { id: 32, word: "dose n.", options: ["行为", "剂量"], answer: 1 },
    {
      id: 33,
      word: "optimal adj.",
      options: ["可选择的", "最优的"],
      answer: 1,
    },
    { id: 34, word: "mechanism n.", options: ["机械", "机制"], answer: 1 },
    { id: 35, word: "novel adj.", options: ["小说", "有新意的"], answer: 1 },
    { id: 36, word: "guarantee v.", options: ["防身", "保证"], answer: 1 },
    { id: 37, word: "presume v.", options: ["假设", "质疑"], answer: 0 },
    { id: 38, word: "transfer v.", options: ["转移", "转型"], answer: 0 },
    { id: 39, word: "insertion n.", options: ["嵌入", "确认"], answer: 0 },
    { id: 40, word: "internal adj.", options: ["内在的", "外在的"], answer: 0 },
    { id: 41, word: "underscore v.", options: ["低估", "强调"], answer: 1 },
    { id: 42, word: "augment v.", options: ["论据", "增加"], answer: 1 },
    {
      id: 43,
      word: "heterogeneous adj.",
      options: ["慷慨的", "混杂的"],
      answer: 1,
    },
    {
      id: 44,
      word: "discrepancy n.",
      options: ["不一致", "不信任"],
      answer: 0,
    },
    { id: 45, word: "composition n.", options: ["构成", "堆肥"], answer: 0 },
    {
      id: 46,
      word: "illiterate adj.",
      options: ["文盲的", "病态的"],
      answer: 0,
    },
    { id: 47, word: "reverse v.", options: ["翻转", "评审"], answer: 0 },
    {
      id: 48,
      word: "erroneously adv.",
      options: ["错误地", "正确地"],
      answer: 0,
    },
    {
      id: 49,
      word: "noteworthy adj.",
      options: ["重要的", "可敬的"],
      answer: 0,
    },
    { id: 50, word: "implicit adj.", options: ["明确的", "含蓄的"], answer: 1 },
    {
      id: 51,
      word: "synonymous adj.",
      options: ["与...同义的", "句法的"],
      answer: 0,
    },
    {
      id: 52,
      word: "impoverished adj.",
      options: ["不切实际的", "贫困的"],
      answer: 1,
    },
    { id: 53, word: "dimension n.", options: ["减少", "规模"], answer: 1 },
    {
      id: 54,
      word: "pervasive adj.",
      options: ["扭曲的", "普遍的"],
      answer: 1,
    },
    {
      id: 55,
      word: "overwhelming adj.",
      options: ["巨大的", "过于夸张的"],
      answer: 0,
    },
    { id: 56, word: "supplement v.&n.", options: ["增刊", "补充"], answer: 1 },
    { id: 57, word: "institute v.", options: ["制定", "煽动"], answer: 0 },
    {
      id: 58,
      word: "hygienically adv.",
      options: ["苛刻地", "卫生地"],
      answer: 1,
    },
    { id: 59, word: "extol v.", options: ["赞美", "提取"], answer: 0 },
    {
      id: 60,
      word: "unanimity n.",
      options: ["毫无活力", "全体一致"],
      answer: 1,
    },
    { id: 61, word: "responder n.", options: ["回答者", "执行者"], answer: 0 },
    {
      id: 62,
      word: "ambiguous adj.",
      options: ["含糊不清的", "有野心的"],
      answer: 0,
    },
    { id: 63, word: "intervene v.", options: ["干涉", "解释"], answer: 0 },
    { id: 64, word: "interpretation n.", options: ["解释", "翻译"], answer: 0 },
    {
      id: 65,
      word: "consequential adj.",
      options: ["固定的", "随之发生的"],
      answer: 1,
    },
    {
      id: 66,
      word: "coauthor n.",
      options: ["共同执笔者", "通讯作者"],
      answer: 0,
    },
    {
      id: 67,
      word: "deceptive adj.",
      options: ["决定的", "欺诈的"],
      answer: 1,
    },
    { id: 68, word: "disclose v.", options: ["妥协", "公开"], answer: 1 },
    {
      id: 69,
      word: "routinely adv.",
      options: ["常规地", "延长地"],
      answer: 0,
    },
    { id: 70, word: "anonymity n.", options: ["环境", "匿名"], answer: 1 },
    { id: 71, word: "endemic adj.", options: ["良好的", "流行的"], answer: 1 },
    { id: 72, word: "motive n.", options: ["动机", "活动"], answer: 0 },
    {
      id: 73,
      word: "methodological adj.",
      options: ["方法论的", "辩证法的"],
      answer: 0,
    },
    { id: 74, word: "implication n.", options: ["定义", "含义"], answer: 1 },
    { id: 75, word: "detect v.", options: ["出现", "发现"], answer: 1 },
    { id: 76, word: "reiterate v.", options: ["促进", "重申"], answer: 1 },
    {
      id: 77,
      word: "confidential adj.",
      options: ["机密的", "自信的"],
      answer: 0,
    },
    {
      id: 78,
      word: "optimistic adj.",
      options: ["悲观的", "乐观的"],
      answer: 1,
    },
    { id: 79, word: "episode n.", options: ["情景", "事件"], answer: 1 },
    {
      id: 80,
      word: "fabrication n.",
      options: ["碎片", "制造/捏造"],
      answer: 1,
    },
  ],

  // === 模块 2：选词填空 (旧题) ===
  sentenceData: [
    {
      text: "It is a {0} way to assess the {1} effect of genetically modified foods.",
      answers: ["novel", "adverse"],
      origin: ["new", "harmful"],
    },
    {
      text: "It is well {0} that the inadequate intake of nutrition will {1} the physical growth of a person.",
      answers: ["established", "stunt"],
      origin: ["proved", "prevent"],
    },
    {
      text: "That will reduce the {0} of air pollution which exerts {1} effects on health.",
      answers: ["hazard", "adverse"],
      origin: ["danger", "bad"],
    },
    {
      text: "Another eight students were {0} to the control group to check whether they {1} to the disease.",
      answers: ["allocated", "were immune"],
      origin: ["assigned", "could not be harmed by"],
    },
    {
      text: "Most parents are concerned about the education of their children, so they make every effort to {0} what school education cannot provide.",
      answers: ["supplement"],
      origin: ["add"],
    },
    {
      text: "It is {0} important to consult your doctor if the symptoms {1}.",
      answers: ["vitally", "persist"],
      origin: ["very", "continue"],
    },
    {
      text: "A study has to be {0} to investigate the {1} effects.",
      answers: ["undertaken", "unintended"],
      origin: ["carried out", "unexpected"],
    },
    {
      text: "It is {0} that the disease has {1}.",
      answers: ["presumed", "a wide"],
      origin: ["supposed", "been found in many areas"],
    },
    {
      text: 'The term "{0}" means the number of people who died in a particular time.',
      answers: ["mortality"],
      origin: ["death rate"],
    },
    {
      text: "We can only {0} that she has been here to work in the headquarters since her office has been {1} from Shanghai to London.",
      answers: ["speculate", "transferred"],
      origin: ["guess", "moved"],
    },
  ],

  // === 模块 3：TASK 3 (P178) 新增内容 ===
  task3Data: [
    {
      text: "The study lacks {0} evidence and therefore its conclusions are doubtful.",
      answers: ["solid"],
      origin: ["enough"],
    },
    {
      text: "The scientists are pretty {0} after their {1} experiment.",
      answers: ["fatigued", "lengthy"],
      origin: ["tired", "long"],
    },
    {
      text: "The book {0} to explain the {1} character of social life.",
      answers: ["attempts", "fundamental"],
      origin: ["tries", "basic"],
    },
    {
      text: "The study {0} the fact that both surveys will give the same results.",
      answers: ["confirms"],
      origin: ["proves"],
    },
    {
      text: "We noted a {0} problem with the experimental design.",
      answers: ["potential"],
      origin: ["possible"],
    },
    {
      text: "The issue always {0} a great deal of debates among academics.",
      answers: ["generates"],
      origin: ["causes"],
    },
    {
      text: "Our {0} goal is to {1} the fake from the original one.",
      answers: ["primary", "distinguish"],
      origin: ["chief", "tell"],
    },
    {
      text: "The research {0} the importance of international trade agreement.",
      answers: ["underlines"],
      origin: ["emphasizes"],
    },
    {
      text: "There was an apparent {0} between the two sets of results.",
      answers: ["discrepancy"],
      origin: ["difference"],
    },
    {
      text: "The {0} cause of the failure was a sudden temperature change.",
      answers: ["principal"],
      origin: ["major"],
    },
    {
      text: "There has been a {0} of interest in how music affects an individual's ability to concentrate.",
      answers: ["considerable"],
      origin: ["lot"],
    },
  ],
  // === 模块 4：模糊语复习 (P216) ===
  hedgeData: [
    {
      id: 1,
      original:
        "In spite of its limitations, the study has a number of important strengths.",
      revised:
        "In spite of its limitations, the study <strong>may have</strong> a number of important strengths.",
      desc: "添加 may (可能)，表示推测而非绝对断定。",
    },
    {
      id: 2,
      original: "It is proved that animals become old because...",
      revised:
        "It <strong>seems to prove</strong> that animals become old because...",
      desc: "将 is proved (被证明) 改为 seems to prove (似乎证明)，留有余地。",
    },
    {
      id: 3,
      original: "The effect of these small particles is to cool the climate...",
      revised:
        "It <strong>suggests that</strong> the effect of these small particles is to cool the climate...",
      desc: "添加 It suggests that (这表明...)，避免直接陈述事实。",
    },
    {
      id: 4,
      original: "Very high radiation doses will destroy body functions...",
      revised:
        "Very high radiation doses <strong>might</strong> destroy body functions...",
      desc: "将 will (将会) 改为 might (可能会)，降低可能性的程度。",
    },
    {
      id: 5,
      original: "The effects of routine releases... depend on how...",
      revised:
        "The effects of routine releases... <strong>tend to</strong> depend on how...",
      desc: "添加 tend to (倾向于)，表示通常情况而非所有情况。",
    },
    {
      id: 6,
      original: "...the effect was mediated by the first two factors.",
      revised:
        "...the effect <strong>might be</strong> mediated by the first two factors.",
      desc: "将 was (是) 改为 might be (可能是)。",
    },
    {
      id: 7,
      original: "All unethical behavior is potentially criminal.",
      revised:
        "It <strong>seems that</strong> all unethical behavior <strong>tends to be</strong> potentially criminal.",
      desc: "使用了双重模糊：seems that (看起来) 和 tends to be (倾向于)。",
    },
    {
      id: 8,
      original: "Mars rock will not be melted even at high temperatures.",
      revised:
        "Mars rock <strong>might not</strong> be melted even at high temperatures.",
      desc: "将 will not (不会) 改为 might not (可能不会)。",
    },
  ],
  // === 模块 5：近义与句式转换 (By using 1 & 2) ===
  paraphraseData: [
    // --- By using 1 (词汇升级) ---
    {
      original: "Studies showed that they were born with something special.",
      revised:
        "Studies <strong>revealed</strong> that they were <strong>endowed with</strong> something <strong>super-normal</strong>.",
      desc: "showed → revealed (揭示); born with → endowed with (天生赋予); special → super-normal (超常)",
    },
    {
      original:
        "Scientists imagine the underground world becoming more and more elaborate.",
      revised:
        "Scientists <strong>visualize</strong> the underground world becoming <strong>increasingly</strong> elaborate.",
      desc: "imagine → visualize (构想); more and more → increasingly (日益)",
    },
    {
      original:
        "Asian parents are able to instill more motivation in their children.",
      revised:
        "Asian parents <strong>tend to imbue</strong> their <strong>offspring</strong> with more motivation.",
      desc: "are able to instill → tend to imbue (倾向于灌输); children → offspring (后代)",
    },
    {
      original:
        "Some find that imaginative thought could be replaced with the scientific method.",
      revised:
        "Some find the scientific method <strong>a substitute for</strong> imaginative thought.",
      desc: "replaced with → a substitute for (替代品/代替)",
    },
    {
      original: "The animal's behavior seems to be unexplainable.",
      revised:
        "The animal's behavior seems to <strong>defy/elude</strong> explanation.",
      desc: "be unexplainable → defy/elude explanation (无法解释/逃避解释)",
    },
    {
      original: "The scientists' experiment produced an unexpected result.",
      revised:
        "The scientists' experiment <strong>generated</strong> an unexpected <strong>outcome</strong>.",
      desc: "produced → generated (产生); result → outcome (结果)",
    },
    {
      original:
        "Despite this, many central city areas have lost their population.",
      revised:
        "Despite this, many central city areas have <strong>experienced a decrease in</strong> population.",
      desc: "lost → experienced a decrease in (经历了...的减少)",
    },
    {
      original:
        "The study shows the need of taking a much broader view of the matter.",
      revised:
        "The study <strong>demonstrates the necessity</strong> of taking a much broader view of the matter.",
      desc: "shows the need → demonstrates the necessity (证明了...的必要性)",
    },

    // --- By using 2 (句式转换) ---
    {
      original:
        "For this reason, we should take great care to distinguish between beliefs and truths.",
      revised:
        "For this reason, <strong>great care should be taken</strong> to distinguish between beliefs and truths.",
      desc: "主动转被动：强调动作'take care'而非执行者'we'。",
    },
    {
      original:
        "Alexander believed that frequent contact with mentally ill patients will reduce...",
      revised:
        "Frequent contact with mentally ill <strong>individuals was believed to</strong> reduce...",
      desc: "宾语前置做主语 + 被动语态 (was believed to)。",
    },
    {
      original:
        "Now we are beginning to understand the interaction between organism and environment.",
      revised:
        "The interaction between organism and environment <strong>is now beginning to be understood</strong>.",
      desc: "将研究对象前置，突出'interaction'。",
    },
    {
      original:
        "However, one can hardly control the media used to generate information.",
      revised:
        "However, <strong>very little control can be exercised over</strong> the media used to generate information.",
      desc: "hardly control → little control can be exercised over (名词化+被动，更正式)。",
    },
    {
      original:
        "There are signs that the government may make serious efforts in the near future.",
      revised:
        "There are signs that <strong>more serious efforts may be mustered</strong> in the near future.",
      desc: "make efforts → efforts may be mustered (鼓起/聚集力量)。",
    },
    {
      original:
        "Until recently most people still believed that daydreaming wasted time...",
      revised:
        "Until recently daydreaming <strong>was still perceived either as a waste of time</strong>...",
      desc: "believed... wasted → perceived as... (被视为)。",
    },
  ],
  // === 模块 6：名词化 (P173 Nominalization) ===
  nominalData: [
    {
      original: "The model explains how the figure fluctuates in this period.",
      revised:
        "The model provides an <strong>explanation</strong> for the <strong>fluctuations</strong> in the figure in this period.",
      desc: "explains → explanation (解释); fluctuates → fluctuations (波动)",
    },
    {
      original: "The space skill can be applied in exploring the universe.",
      revised:
        "The space skill has found <strong>application</strong> for the <strong>exploration</strong> of the universe.",
      desc: "applied → application (应用); exploring → exploration (探索)",
    },
    {
      original:
        "Radiation was accidentally released, damaging a wide area for a long time.",
      revised:
        "The accidental <strong>release</strong> of radiation causes widespread long-term <strong>damage</strong>.",
      desc: "released → release (释放); damaging → damage (破坏)",
    },
    {
      original:
        "To make it accepted by most readers and profitable, the novel follows...",
      revised:
        "To ensure the widest <strong>acceptability</strong> and greatest <strong>profitability</strong>, the novel follows...",
      desc: "accepted → acceptability (可接受性); profitable → profitability (盈利能力)",
    },
    {
      original:
        "Crops grow quickly because the soil in this area is very rich.",
      revised:
        "The <strong>richness</strong> of the soil in this area favored the <strong>growth</strong> of crops.",
      desc: "rich → richness (肥沃度); grow → growth (生长)",
    },
    {
      original:
        "The times signal that it is necessary to modify our legal system.",
      revised:
        "The <strong>signs</strong> of the times point to the <strong>necessity</strong> of the <strong>modification</strong> of the legal system.",
      desc: "signal → signs (信号); necessary → necessity (必要性); modify → modification (修改)",
    },
    {
      original:
        "It is necessary to supervise the crops carefully so that they can survive...",
      revised:
        "Careful <strong>supervision</strong> is necessary to ensure the <strong>survival</strong> of the crops...",
      desc: "supervise → supervision (监督); survive → survival (存活)",
    },
    {
      original:
        "If we know its sources and symptoms, we can explain many things that otherwise we cannot analyze rationally.",
      revised:
        "A <strong>knowledge</strong> of its sources and symptoms helps explain many things otherwise impossible for rational <strong>analysis</strong>.",
      desc: "know → knowledge (知识/了解); analyze → analysis (分析)",
    },
  ],
  // === 模块 7：课文阅读 (Reading) ===
  readingData: [
    // --- Unit 1 ---
    {
      unit: "Unit 1",
      id: 1,
      question:
        "Within the last 11000 years, what did the evolution of agriculture influence?",
      options: [
        "The process of human evolution.",
        "The civilization of mankind society.",
        "The application of technology.",
        "The character of the human condition.",
      ],
      answer: 3, // D
    },
    {
      unit: "Unit 1",
      id: 2,
      question:
        "What is considered as the agronomic challenge in the future decades?",
      options: [
        "To preclude appropriation of other ecosystems for cropland expansion.",
        "To improve the overall productivity of grains.",
        "To increase enough productivity per unit of land.",
        "To sustain the integrity of those ecological processes.",
      ],
      answer: 2, // C
    },
    {
      unit: "Unit 1",
      id: 3,
      question: "Which of the following is the main task of crop scientists?",
      options: [
        "To manage plant and soil in field.",
        "To improve crops and agricultural productivity.",
        "To deal with pests and weeds with farmers.",
        "To train peasants in productivity.",
      ],
      answer: 1, // B
    },
    {
      unit: "Unit 1",
      id: 4,
      question:
        "For growing population, which of the following is the center of efforts in crop science career?",
      options: [
        "To increase the production of food, feed, fuels and fiber.",
        "To improve the productivity of grains, vegetables in general.",
        "To promote the production of agriculture products.",
        "To proceed the productivity of agronomic products.",
      ],
      answer: 0, // A
    },
    {
      unit: "Unit 1",
      id: 5,
      question:
        "To enhance productivity while sustaining the integrity of ecological processes, what disciplines do scientific research include?",
      options: [
        "Crop science, soil science and environmental science.",
        "Crop science, environmental science and cultivation science.",
        "Crop science, climate science and environmental science.",
        "Crop science, environmental science and agronomic science.",
      ],
      answer: 0, // A
    },
    {
      unit: "Unit 1",
      id: 6,
      question: "What are the major agronomic crops in the US?",
      options: [
        "Maize, rice, soybeans, wheat, peanuts, cotton and hay.",
        "Corn, wheat, soybeans, peanuts, alfalfa and legume grass mixtures.",
        "Corn, rice, beans, wheat, peanuts, cotton and hay.",
        "Maize, soybeans, wheat, hay, rice and cotton.",
      ],
      answer: 0, // A
    },
    {
      unit: "Unit 1",
      id: 7,
      question:
        "Which of the following practices involves soil, plant, sciences, plant genetics, entomology and plant pathology?",
      options: [
        "Planting seedlings.",
        "Breeding sprouts.",
        "Cultivating grains.",
        "Growing crops.",
      ],
      answer: 3, // D
    },
    {
      unit: "Unit 1",
      id: 8,
      question:
        "When it comes to crop genetics, what can be regarded as one of the good traits of crops for producers?",
      options: [
        "Resistance to injurious disease.",
        "Resistance to overall disease.",
        "Resistance to injurious insects.",
        "Resistance to injurious herbs.",
      ],
      answer: 2, // C
    },
    {
      unit: "Unit 1",
      id: 9,
      question: "What are feed crops grown specifically to meet?",
      options: [
        "Husbandry living conditions.",
        "Livestock nutritional needs.",
        "Poultry growth demands.",
        "Animal propagation.",
      ],
      answer: 1, // B
    },
    {
      unit: "Unit 1",
      id: 10,
      question:
        "What kind of forage crops are harvested in a green, succulent condition and stored under anaerobic conditions?",
      options: [
        "Silage forages.",
        "Anaerobic forages.",
        "Fermentative crops.",
        "Green chops.",
      ],
      answer: 0, // A
    },

    // --- Unit 2 ---
    {
      unit: "Unit 2",
      id: 1,
      question:
        "During the development of TCM, ______ are the guidance of its theory.",
      options: [
        "Classic Chinese materialism and dialectics",
        "Traditional theory and practice",
        "Yin and yang theories",
        "Holism and syndrome differentiation",
      ],
      answer: 0, // A
    },
    {
      unit: "Unit 2",
      id: 2,
      question:
        'What does the italicized and boldfaced word "It" in paragraph 1 refer to?',
      options: [
        "Classic Chinese materialism and dialectics.",
        "The theoretical system of TCM.",
        "The long course of clinical practice.",
        "Five elements theory.",
      ],
      answer: 1, // B
    },
    {
      unit: "Unit 2",
      id: 3,
      question:
        'Which of the following words has the similar meaning with the italicized and boldfaced word "integrity" in paragraph 2?',
      options: ["Individual.", "Comprehensibility.", "Unity.", "Complexity."],
      answer: 2, // C
    },
    {
      unit: "Unit 2",
      id: 4,
      question:
        "Which of the following is not the constituent part of the human body?",
      options: [
        "Five zang-organs.",
        "Six fu-organs.",
        "Meridian system.",
        "Spirit",
      ],
      answer: 3, // D
    },
    {
      unit: "Unit 2",
      id: 5,
      question:
        "With the concept of holism, why can oral erosion be treated by curing the disease from the heart or small intestine?",
      options: [
        "Because the heart opens into the mouth.",
        "Because we should draw yin from yang.",
        "Because we can treat the lower part of body for curing disease located in the upper part.",
        "Because clearing away the fire from the heart is important.",
      ],
      answer: 0, // A
    },
    {
      unit: "Unit 2",
      id: 6,
      question:
        "With the changing seasons, ______ should be kept well during autumn and winter.",
      options: ["blood", "sweating", "yang qi", "Water"],
      answer: 2, // C
    },
    {
      unit: "Unit 2",
      id: 7,
      question: "What is the fundamental principle in treating disease?",
      options: [
        "Cause and nature of the disease.",
        "Syndrome differentiation.",
        "The concept of holism.",
        "Treating different diseases with the same therapies.",
      ],
      answer: 1, // B
    },
    {
      unit: "Unit 2",
      id: 8,
      question: "Why is differentiation of syndrome so important in TCM?",
      options: [
        "Because, in order to make a correct treatment, syndrome must be distinguished.",
        "Because the human body is considered as an organic whole.",
        "Because the changes in nature affect the human body directly or indirectly.",
        "Because syndrome is the summarization of a disease progress at a certain stage.",
      ],
      answer: 0, // A
    },
    {
      unit: "Unit 2",
      id: 9,
      question:
        "What kind of herbs can be used to treat common cold due to wind-heat?",
      options: [
        "Herbs pungent in taste and warm in nature.",
        "Herbs pungent in taste and cool in nature.",
        "Both A and B.",
        "None of the above.",
      ],
      answer: 1, // B
    },
    {
      unit: "Unit 2",
      id: 10,
      question:
        "Treating measles with different therapeutic measures at different stages is an example of ______.",
      options: [
        "treating different diseases with the same therapy",
        "treating different diseases with different therapies",
        "treating the same disease with the same therapy",
        "treating the same disease with different therapies",
      ],
      answer: 3, // D
    },

    // --- Unit 4 ---
    {
      unit: "Unit 4",
      id: 1,
      question:
        "According to the text, there will be ______ people on the earth in 40 more years if current birthrates hold.",
      options: ["5 billion", "5.1 billion", "10 billion", "10.2 billion"],
      answer: 3, // D
    },
    {
      unit: "Unit 4",
      id: 2,
      question:
        "Which of the following is not the reason for destroying our habitat according to the author?",
      options: [
        "Technological advances.",
        "Pandora's box.",
        "Smokestacks.",
        "Fuel-consuming automobiles.",
      ],
      answer: 1, // B
    },
    {
      unit: "Unit 4",
      id: 3,
      question:
        "The following places except ______ are mentioned in the text for having suffered natural disaster in the recent time.",
      options: [
        "the South China Sea",
        "the North Sea",
        "the English Channel",
        "the Mediterranean",
      ],
      answer: 0, // A
    },
    {
      unit: "Unit 4",
      id: 4,
      question:
        'The italicized and boldfaced word "ominous" in paragraph 6 could probably be replaced by',
      options: ["Fortunate", "frightening", "Underlying", "unfavorable"],
      answer: 3, // D
    },
    {
      unit: "Unit 4",
      id: 5,
      question:
        "Why has TIME designated Endangered Earth as Planet of the Year rather than named a Man of the Year for 1988?",
      options: [
        "Because no celebrities are entitled to the honor.",
        "Because TIME expected to attract more readers.",
        "Because TIME hoped to arouse people's environment-protection awareness.",
        "Because so many worst disasters happened on earth that year.",
      ],
      answer: 2, // C
    },
    {
      unit: "Unit 4",
      id: 6,
      question:
        "The following except ______ would happen if nothing were done about the earth's endangered state.",
      options: [
        "shortages of safe drinking water",
        "mass starvation",
        "rise of temperature",
        "discontinuity of natural resources",
      ],
      answer: 3, // D
    },
    {
      unit: "Unit 4",
      id: 7,
      question:
        "The author called for international cooperation against the massive damage to the earth's environment mainly because ______",
      options: [
        "the causes and effects of the problem that threaten the earth are global",
        "it is very urgent to save the people in the undeveloped area",
        "it is closely related to every nation's political interest",
        "the outcome of the pollution has been realized by every country",
      ],
      answer: 0, // A
    },
    {
      unit: "Unit 4",
      id: 8,
      question:
        "According to the author, the attempt to protect the environment will be successful if",
      options: [
        "each government takes actions",
        "ordinary people are willing to adjust their life styles",
        "more advanced technologies can be invented",
        "the Washington-based Worldwatch Institute takes its initiatives",
      ],
      answer: 1, // B
    },
    {
      unit: "Unit 4",
      id: 9,
      question:
        "The author pointed out that it was the ______ that guided people to overdevelop the earth's resources.",
      options: [
        "ancient Chinese myths",
        "Greek mythologies",
        "radical concept of Christianity",
        "Islamism",
      ],
      answer: 2, // C
    },
    {
      unit: "Unit 4",
      id: 10,
      question: "The author's attitude towards environment-protection is",
      options: ["positive", "negative", "neutral", "critical"],
      answer: 0, // A
    },
    // --- Unit 6 ---
    {
      unit: "Unit 6",
      id: 1,
      question: "What aspect of study is not mentioned in the first paragraph?",
      options: [
        "The problems to be solved through the study.",
        "The general objectives of the study.",
        "The paradigm used for conducting the study.",
        "The possible results of the study.",
      ],
      answer: 3, // D
    },
    {
      unit: "Unit 6",
      id: 2,
      question: "Which of the following statements is true?",
      options: [
        "The outcome of this project is to help the governments in South Pacific island countries to assess the extent of food security.",
        "The general objectives of this project include analyzing food security conditions in South Pacific island countries.",
        'The study was conducted by using the latest "sustainable food security" paradigm with six criteria.',
        "All countries in the project are frequently invited to participate in CGPRT centre projects.",
      ],
      answer: 2, // C
    },
    {
      unit: "Unit 6",
      id: 3,
      question:
        "Which of the following is not the main study subject of the project?",
      options: [
        "Food security performance.",
        "The determining factors at the national and community levels.",
        "Food security risk-settling institutions.",
        "Feasibility of territorial cooperation in food security.",
      ],
      answer: 1, // B
    },
    {
      unit: "Unit 6",
      id: 4,
      question:
        "Which of the following is not the factor in determining acute food insecurity of South Pacific island countries?",
      options: [
        "Limited arable land.",
        "Geographical location and space.",
        "A small country size.",
        "Susceptibility to natural disasters.",
      ],
      answer: 1, // B
    },
    {
      unit: "Unit 6",
      id: 5,
      question:
        'What does the italicized and boldfaced word "precarious" in paragraph 2 probably mean?',
      options: ["Carious.", "Precautious.", "Insecure.", "Previous."],
      answer: 2, // C
    },
    {
      unit: "Unit 6",
      id: 6,
      question:
        "Which of the following is the reason for temporary food insecurity?",
      options: [
        "Susceptibility to various natural disasters.",
        "Insusceptibility to endemic natural disasters.",
        "People's harsh living environment.",
        "Various indigenous mitigation mechanisms.",
      ],
      answer: 0, // A
    },
    {
      unit: "Unit 6",
      id: 7,
      question:
        "What causes long-term sustainability of the national food security systems to be under threat?",
      options: [
        "The indigenous wisdom has been prevailing.",
        "Domestic food production capacity and productivity have shown declining trends.",
        "All countries have become increasingly independent of food imports.",
        "Provincial and household food security has become more serious.",
      ],
      answer: 1, // B
    },
    {
      unit: "Unit 6",
      id: 8,
      question: "Which countries have a high population growth rate problem?",
      options: [
        "Guinea and Vanuatu.",
        "Papua New Guinea and Vanuatu.",
        "Tonga and Fiji.",
        "Papua New Guinea, Vanuatu and Fiji.",
      ],
      answer: 1, // B
    },
    {
      unit: "Unit 6",
      id: 9,
      question:
        "What cultural phenomenon does intra-household mal-distribution of foods stand for?",
      options: [
        "Food insecurity is largely a poverty phenomenon.",
        "Husbands and older sons have first priority to access the foods available in the home.",
        "Women and children are the groups most vulnerable to under-nutrition.",
        "Over-nutrition is a syndrome of affluence.",
      ],
      answer: 1, // B
    },
    {
      unit: "Unit 6",
      id: 10,
      question: "The scope for regional cooperation does not include",
      options: [
        "Cooperative research and development on traditional crops",
        "Development of regional disaster preparedness and coping systems",
        "Development of regional agricultural research and development networks",
        "Declining research and development on traditional crops.",
      ],
      answer: 3, // D
    },
  ],
  // === 模块 8：段落匹配 (Unit 2, 3, 4, 5) ===
  // === 模块 8：段落匹配 (Unit 2, 3, 4, 5) ===
  matchData: [
    // --- Unit 2 ---
    {
      unit: "Unit 2",
      id: "u2-1",
      text: "Although global warming is a popular topic in science classes in most middle and high schools, there is little understanding of the greenhouse effect. Anderson and Wallin (2000) conducted a study focusing on high school students. They found that these students had several different representations of the greenhouse effect. Many confused the greenhouse effect with global warming and described it by listing the causes of global warming. Others confused the greenhouse effect with 'the ozone effect' (Anderson and Wallin, 2000). This confusion about the relationship between the greenhouse effect and the ozone effect is common (Francis et al., 1993; Meadows and Wiesenmayer, 1999; Rye et al., 1997). Data from Meadows and Wiesenmayer's (1999) study indicate that some students have incorporated this misconception into their knowledge frameworks of global warming and use it to reason about all issues related to the global warming phenomenon. Other work shows that some pre-service teachers also attribute the cause of climate change to the depletion of the ozone layer (Papadimiriou, 2004).",
      answer:
        "Previous studies show that there is a common misunderstanding of the greenhouse effect and global warming among students.",
    },
    {
      unit: "Unit 2",
      id: "u2-2",
      text: "Obviously, helping students have a better understanding of greenhouse gases and their impact on the temperature of the Earth is urgent. In the work presented in this paper, a series of activities were conducted around the Global Warming: Virtual Earth (GWVE) curriculum unit. The goal is for students to learn about the role of each concept in the greenhouse effect and to understand how they interact to create the greenhouse effect. The activities also help students understand the relationship between the greenhouse effect and global warming. We measure students' representations by analyzing their responses to a series of open-ended questions about the concepts covered in the module.",
      answer:
        "The objective is to improve students' understanding of the greenhouse effect and global warming through participation in a project.",
    },
    {
      unit: "Unit 2",
      id: "u2-3",
      text: "The main research question is, 'How does students' understanding of the greenhouse effect and global warming change after participating in a technology-enhanced learning environment featuring virtual experiments with an interactive visualization?'. This research is based on GWVE curriculum unit. In the week-long unit during their science classes, students participate in an eight-question, paper-and-pencil assessment prior to and following participation in the unit, creating a matched sample comparison. A series of matched sample t-tests are used to determine the degree of significance between pre-and post-test performance.",
      answer:
        "The project comprises a virtual experiment and two tests prior to and following participation with the same eight questions.",
    },
    {
      unit: "Unit 2",
      id: "u2-4",
      text: "Five teachers from three schools on the west coast and two schools in the southeastern US enacted the curriculum unit in their sixth-grade science classes. The teachers each had at least two years of experience using our curriculum units in their instruction. Each teacher received targeted professional development support (Varma et al., 2008). The professional development activities included meetings to introduce the overall Web-based Inquiry Science Environment (WISE) and the GWVE unit. Teachers also received classroom support to help them incorporate the activities in their instruction (Varma et al., 2008). One hundred and ninety sixth-grade students (98 males and 92 females) participated in the unit activities and the pre-post-assessments.",
      answer:
        "There are five teachers and 190 students participating in the project.",
    },
    {
      unit: "Unit 2",
      id: "u2-5",
      text: "Students' participation began with their individual completion of an eight-question, paper-and-pencil pre-test. Classroom teachers administered the pre-test during the students' normal class meetings. The questions, presented in Table 1, were primarily open-ended questions about global warming, the greenhouse effect, and the individual factors that contribute to these phenomena. Following the pre-test, all students worked in pairs to complete the activities and embedded reflection notes in the GWVE unit.",
      answer:
        "With the help of their teachers, students should finish eight questions before and after participation in a project.",
    },
    {
      unit: "Unit 2",
      id: "u2-6",
      text: "The unit includes six main activities. In the first activity, students view short video clips as an introduction to the global warming phenomenon and calculate their ecological footprint using an online ecological footprint calculator (Islandwood, 2010). In the second activity, students learn about the Earth's energy balance and observe the energy transformation depicted in the visualizations.",
      answer:
        "Students learn global warming phenomenon and the Earth energy balance through viewing short video clips in the first two activities.",
    },
    {
      unit: "Unit 2",
      id: "u2-7",
      text: "In the third activity, students conduct experiments with the visualization to learn about greenhouse gases, clouds and albedo. The fourth activity is a jigsaw activity in which by conducting experiments half of the students learn about clouds and the other half learn about albedo. Teachers randomly assign student pairs to each topic. Throughout these experimentation and reflection steps, embedded notes prompt students to generate hypotheses, gather evidence, draw conclusions and make connections between new and pre-existing ideas. At the end of the fourth activity, all students participate in an online discussion to share their knowledge as a completion of the jigsaw activity and learn about the factor that they did not investigate. In the fifth activity, students use a more complex visualization to learn about how population levels impact greenhouse gas emissions and global warming. This visualization allows students to manipulate the population growth rate and CO2 emission. The results of their manipulation will show a numerical representation of the concentration of greenhouse gases in the atmosphere, the temperature of the Earth and the albedo level. Additionally, there is a graph representing the temperature fluctuations that occur as a result of students' manipulations (Tinker, 2005). In the final activity, students create a family plan to reduce their greenhouse gas emissions and recalculate their ecological footprint based on their planned behavior changes.",
      answer:
        "Students conduct experiments to learn about greenhouse gases, reduce their greenhouse gas emissions and recalculate their ecological footprint in the rest activities.",
    },
    {
      unit: "Unit 2",
      id: "u2-8",
      text: "Students participated in the unit activities for five one-hour class periods in one week. The curriculum unit was enacted as a part of the teachers' normal classroom instruction. The teacher served as the lead instructor. At least one researcher was present in the classrooms to observe the enactment and to assist with technology issues. Following the unit activities, students individually completed a paper-and-pencil post-test comprising the same questions included in the pre-test. The pre-and post-test assessments lasted approximately 20 minutes each.",
      answer:
        "The experiment was implemented in the normal classroom teaching with the cooperation of teachers and students.",
    },
    {
      unit: "Unit 2",
      id: "u2-9",
      text: "The main data were generated from students' responses to eight open-ended questions included in the pre-and post-tests. The first three questions assess students' understanding of the target phenomena (the greenhouse effect and global warming) at a systemic level. Questions 1 and 2 ask students to describe the greenhouse effect and global warming. Question 3 asks them to describe the difference between the two.",
      answer:
        "Students' knowledge about the greenhouse effect and global warming is tested in three questions.",
    },
    {
      unit: "Unit 2",
      id: "u2-10",
      text: "Question 4 assesses students' alternative ideas about the factors that contribute to global warming. It includes a checklist of eight factors that are possible contributors. Students were asked to 'Look at the list below and select all of the factors that you think have an effect on global warming.'. Students received a score of one through six based on the number of correct selections.",
      answer:
        "Students are asked to list and explain more factors which have an impact on global warming and the greenhouse effect.",
    },
    {
      unit: "Unit 2",
      id: "u2-11",
      text: "Questions 5, 6 and 7 ask students to explain how particular components (albedo, clouds, and greenhouse gases) are involved in the greenhouse effect. The final question is a representation analysis prompt. It asks students to analyze how an actual greenhouse represents the scientific phenomenon, the greenhouse effect. Students' responses to all questions except Question 4 were coded using knowledge integration scoring rubrics (Table 2). Each response received a score of zero through five based on the correctness of the expressed ideas and links between the ideas. Each rubric was created based on an analysis of the links present in a fully correct response to each question.",
      answer:
        "Knowledge integration rubrics are used to analyze the responders' answers.",
    },
    {
      unit: "Unit 2",
      id: "u2-12",
      text: "A group of researchers familiar with the curriculum unit design and the knowledge integration framework reviewed the rubrics and the example responses to ensure that the correct criteria would be applied to the data. Twenty percent of the tests were coded by a second researcher for reliability (97%). Discrepant codes were resolved via discussions between the coders.",
      answer:
        "Necessary methods are used for the reliability of data analysis.",
    },
    {
      unit: "Unit 2",
      id: "u2-13",
      text: "One of the pre-post-test questions was, 'Describe how the greenhouse effect happens. Try to make sure that you use the following three terms: 1) solar energy, 2) infrared energy, and 3) greenhouse gases.'. A complete, well-integrated response includes linked information about solar energy, infrared energy, greenhouse gases, and the Earth's temperature. The first three columns in Table 2 show the general sequence of scores and knowledge integration (KI) levels that are used to code students' responses to each of the open-ended pre-/post-test questions. This framework is used across all of the pre- / post-test questions except Question 4. The fourth column lists example Question 1 responses for each KI level.",
      answer:
        "A good knowledge of the greenhouse effect should be a better understanding of its three components.",
    },
    {
      unit: "Unit 2",
      id: "u2-14",
      text: "Matched t-test analyses were conducted to measure differences in students' understanding prior to and following their participation in the unit activities. For each t-test, Cohen's d was calculated to report the effect sizes (Cohen, 1992). These data help show how participating in the interactive unit activities changed students' understanding of the greenhouse effect and global warming.",
      answer:
        "Change in the understanding of the greenhouse effect before and after the experiment is measured by some tests.",
    },
    {
      unit: "Unit 2",
      id: "u2-15",
      text: "Following participation in the GWVE unit activities, students' ideas were more normative and better integrated. Scores from each question were summed to calculate an overall learning score. Mean overall learning scores improved from pre-to post-participation (t(189)=8.66 p<.001).",
      answer:
        "The results show the improvement of students' understanding of the greenhouse effect and global warming.",
    },
    {
      unit: "Unit 2",
      id: "u2-16",
      text: "Responses to individual pre-post-test questions were analyzed using matched t-tests for a more detailed examination of changes in students' understanding. See Table 3 for a summary of the analyses. Students' performance on the post-test showed improved understanding of the greenhouse effect (t(189)=6.96, p<.001).",
      answer:
        "Responses to individual pre- / post-test questions were analyzed.",
    },
    {
      unit: "Unit 2",
      id: "u2-17",
      text: "Prior to instruction, students had some understanding of the greenhouse effect, but it was generally incomplete or incorrect. For example, one student wrote, 'I think the greenhouse effect happens when solar energy is trapped in the stratosphere' and another wrote, 'The solar energy gets stronger and the infrared energy goes away.'. Several responded with 'I don't know.' On the post-test, students' responses included more ideas about the interaction of the key factors. They also had more links between their ideas, indicating that their understanding was more integrated.",
      answer:
        "The pre-post-test shows that students had an improved understanding of greenhouse effect.",
    },
    {
      unit: "Unit 2",
      id: "u2-18",
      text: "Students responded to 'What is global warming?' on the pre-test with incomplete ideas from popular media. Some example responses are, 'It's when the sun's so hot, it makes the North Pole and South Pole melt and floods the world.'. and 'It's when the ozone layer gets thinner.' After participating in the module, more students provided more responses focusing on the relationship between the greenhouse gas levels and the Earth's temperature. Their responses indicate more normative scientific knowledge (first example) and more integrated ideas (second example) (t(189)=6.96, p<.001).",
      answer:
        "The results reveal that after the project, students got more scientific knowledge and more integrated ideas of global warming.",
    },
    {
      unit: "Unit 2",
      id: "u2-19",
      text: "On the pre-test, two commonly expressed responses to the question about the difference between the greenhouse effect and global warming were, 'They are the same thing' and 'The greenhouse effect causes global warming.'. On the post-test, students showed that they understood that these two were different phenomena, and they were able to generate integrated explanations describing the difference (t(189)=6.96, p<.001).",
      answer:
        "Students can distinguish between the greenhouse effect and global warming on the post-test.",
    },
    {
      unit: "Unit 2",
      id: "u2-20",
      text: "Three questions asked students to explain the roles of individual contributing factors (albedo, clouds, and greenhouse gases) in the greenhouse effect. During instruction, students conducted virtual experiments to learn about each of these factors using the greenhouse visualization. Findings show that students' understanding of each of the factors improved following their participation in the curriculum unit. Table 4 lists examples of students' responses to each of these prompts on the pre- and post-test assessments. Combined, these data show that students improved their knowledge of individual concepts and their understanding of the greenhouse effect and global warming phenomenon.",
      answer:
        "The result is indicative of an improved understanding of individual factors contributing to the greenhouse effect.",
    },
    {
      unit: "Unit 2",
      id: "u2-21",
      text: "Overall, students show an increased understanding of the target phenomena, but there is room for growth. For example, in order to develop a deeper understanding of the greenhouse effect and global warming, students have to learn about the two main relationships among the individual components highlighted in the unit: 1) higher albedo levels indicate a higher level of reflectivity from the Earth's surface, leading to increased reflection of solar energy, less infrared energy emission, and lower temperatures; and 2) greenhouse gases reflect infrared energy back to the Earth's surface, causing the Earth's temperature to increase. Although some students developed an understanding of the relationship between greenhouse gases, infrared energy and the Earth's temperature, very few understood the relationship between albedo and the Earth's temperature.",
      answer:
        "Students need to have a better understanding of the relationship between greenhouse gases, infrared energy and the Earth's temperature.",
    },
    {
      unit: "Unit 2",
      id: "u2-22",
      text: "Prior to instruction, students' knowledge consisted mainly of causes of global warming and results of the global warming phenomenon. They did not fully understand the scientific interactions and underlying principles that describe how the greenhouse effect and global warming occur. In this study, in order for students to receive credit for having an integrated understanding of a target concept or phenomenon, their responses must have correct, interconnected ideas. For example, students could generate responses explaining the greenhouse effect by mentioning all of the individual components required for a correct response (solar energy, infrared energy, greenhouse gases) but have incorrect links among the components (solar energy rather than infrared energy is trapped by greenhouse gases). Knowledge accounts for incremental changes by identifying levels of understanding based on ideas and links between ideas. While there is certainly room for growth, students do show that they learned more about the components involved in the greenhouse effect.",
      answer:
        "However, students need more knowledge about the two main relationships among the individual components of the greenhouse effect.",
    },
    {
      unit: "Unit 2",
      id: "u2-23",
      text: "Changes in students' understanding observed in this study are similar to children's understanding of the Earth as discussed in Vosniadou and Brewer's (1992, 1994) work. They found that children have a variety of mental models of the physical world (i.e., the shape of the Earth, the day / night cycle) that are based on their everyday experiences. Once they acquire new information they modify their ideas to be more scientifically valid. In their work on children's knowledge of the Earth, Vosniadou and Brewer (1992, 1994) identify intermediate mental models that represent children's attempts to reconcile new knowledge that the Earth is a sphere with their pre-existing knowledge that the Earth is flat.",
      answer:
        "The finding is consistent with the previous study that children will modify their ideas more scientifically once they acquire new information.",
    },
    {
      unit: "Unit 2",
      id: "u2-24",
      text: "In our work, most students fail to understand that the greenhouse gases trap infrared energy rather than solar energy. Although we do not see evidence of a complete, integrated understanding of the greenhouse effect and global warming for all students, we do see evidence that they are revising their knowledge. This is consistent with Vosniadou and Brewer's (1992, 1994) conceptual change theory that describes conceptual change as a gradual, continuous process. As they reconcile new ideas with their pre-existing knowledge, students have generated an intermediate representation of the greenhouse effect that includes correct and incorrect ideas.",
      answer:
        "In the process of children's acquiring knowledge, there is a transitional period where correct and incorrect ideas coexist.",
    },
    {
      unit: "Unit 2",
      id: "u2-25",
      text: "Our current findings indicate that students' participation in the curriculum unit activities as a whole increases their understanding. Our future work will involve a series of studies focusing on the greenhouse visualization. We would like to know more about how their interactions with the visualization in particular impact learning outcomes. We will design more reliable methods to measure their understanding of the energy transformation that is a key to a deep understanding of this complex phenomenon.",
      answer:
        "The future research is that we will design more reliable methods to measure students' understanding of global warming.",
    },

    // --- Unit 3 ---
    {
      unit: "Unit 3",
      id: "u3-1",
      text: 'The term "genetically modified organisms (GMOs)" refers to plants, microbes and animals with genes transferred from other species in order to produce certain novel characteristics (for example resistance to pests, or herbicides), and produced by recombinant DNA technology. There are two standard methods, which are generally used to introduce new DNA (genes) into a plant cell, which is going to be modified. Neither is perfect and both could not guarantee that the rest of the plant genome remains unchanged. Therefore the safety of the GM crops created with the help of these methods cannot be guaranteed for human and animal health, nor for the environment (Ho and Tappeser, 1997; Kuznetsov et al., 2004; Wilson et al., 2004; Ermakova, 2005). Four main sources of the hazards of GMOs are now accepted by scientists worldwide: 1) those due to the new genes, and gene products introduced; 2) unintended effects inherent in the technology; 3) interactions between foreign genes and host genes; and 4) those arising from the spread of the introduced genes by ordinary cross-pollination as well as by horizontal gene transfer (World Scientists Statement, 2000).',
      answer: "Scientists have noticed the hazards of GMOs.",
    },
    {
      unit: "Unit 3",
      id: "u3-2",
      text: "GM crops contain material which is not present in them under natural conditions and they form a part of our daily diet. To understand what effect they can have on us and on our animals and whether their risks may outweigh the benefits, it is vitally important to study the influence of these GM plants on different organisms for several generations. At present, the studies pertaining to the issue are lacking from the scientific literature. Also, several detrimental effects of GM crops had been shown on the metabolism of animals. The hazard of GMOs was shown for animals and the environment in extensive investigations (Traavik, 1999; Ho and Tappeser, 1997; Pusztai, 1998 and 2001; Kuznetsov et al., 2004 and others). Earlier it was shown that the consumption of GM foods by animals led to the negative changes in their organisms. Experiments, conducted by Pusztai, showed that potatoes modified by the insertion of the gene of the snowdrop lectin (an insecticidal protein) stunted the growth of rats, significantly affected some of their vital organs, including the kidneys, thymus, gastrocnemius muscle and others (1998) and damaged their intestines and their immune system (Ewen and Pusztai, 1999). Similar effect of GM potatoes on rats was obtained at the Institute of Nutrition in Russia (Ermakova, 2005).",
      answer:
        "Previous studies showed that there were negative effects of GMOs on animals.",
    },
    {
      unit: "Unit 3",
      id: "u3-3",
      text: "It is put forward in the risk assessment documents that the GM components of transformed plants are completely destroyed in the digestive tract of humans and animals, together with the other genetic material found in them. However, foreign DNA plasmids are steadier against the digestion than it was originally believed. Plasmid DNA and GM DNA were found in microorganisms of the intestine and in saliva (Mercer et al., 1999; Coghlan, 2002). Experimental research in mice showed that ingested foreign DNA can persist in fragmented form in the gastrointestinal tract, penetrate the intestinal wall, and reach the nuclei of leukocytes, spleen and liver cells (Schubbert et al., 1994). In another research of Schubbert et al. (1998), foreign DNA, orally ingested by pregnant mice, was discovered in blood (leukocytes), spleen, liver, heart, brain, testes and other organs of fetuses and newborn animals. They considered that maternally ingested foreign DNA could be potential mutagens for the developing fetus. However, Brake and Evenson (2004) analyzing the testis in mice as a sensitive biomonitor of potential toxin, didn't find adverse effects of transgenic soybean diet on fetal development. From the literature review, there seems a lack of investigations on the influence of GM crops on mammals, especially on their reproductive function. Therefore, the objective of the study we undertake is to see the effect of the most commonly used GM crops on the birth rate, mortality and weight gain of rat pups, whose mothers were fed with diets supplemented with Roundup Ready soya, a kind of GM foods.",
      answer:
        "The lack of related previous studies made us focus our study on the effect of GM crops on the reproductive function of mammals.",
    },
    {
      unit: "Unit 3",
      id: "u3-4",
      text: "Wistar rats were used as the subjects in the experiment. The animals were brought up to sexual maturity on laboratory rat feed. When their weight reached about 180-200 g, the female rats were divided into 3 groups, housed in groups (3 rats/cage), and kept under normal laboratory conditions. The feeding scheme was as follows. Females in every cage daily received dry pellets from a special container placed on the top of their cage. Those rats receiving soya flour supplement were given the soya flour in a small container placed inside their cage (20 g x 40 ml water for 3 rats), so 5-7 g flour for each rat every day.",
      answer: "Wistar rats were used as the subjects in the experiment.",
    },
    {
      unit: "Unit 3",
      id: "u3-5",
      text: "One group of female rats of 180-200 g weight (6, in 2 cages) was allocated to the experimental group, and received 5-7 g soya flour / rat / day prepared from Roundup Ready soya, added to the rat feed for 2 weeks. Another group of females (3) was allocated to the control group, but their diet was supplemented with the same amount of soya flour prepared from the traditional soya in which only traces (0.08+0.04%) of the GM construct were present, most likely resulting from cross-contamination. We also introduced a positive control group (6, in 2 cages), which had not been exposed to soya flour. Therefore, the females only got the standard laboratory feed without any supplementation.",
      answer: "The female rats were allocated into three groups.",
    },
    {
      unit: "Unit 3",
      id: "u3-6",
      text: "After 2 weeks on the diets all the females were mated with 2 healthy males of the same age, which had never been exposed to soya flour supplement. In order to avoid infection of females, the sperm count and quality had not been determined. We carried on feeding the respective diets to all females during mating and pregnancy. Upon delivery, all females were transferred to individual cages, and the amount of soya flour supplement was increased by an additional gram for every pup born. Lab feed and water was available for all animals during the experimental period. When the rat pups opened their eyes and could feed themselves (from 13-14 days of age), the daily dose of soya supplement was increased to 2-3 g for every pup, although all rats had free approach to the soya. All rats ate their soya portions well. After the experiment was finished the organs of some pups were taken out and weighed. The level of mortality was analyzed by the one-way ANOVA, using the Newman-Keuls test for share distribution. The pups' weight and its distribution were checked by Mann-Whitney test and Chi-square in StatSoft Statistica v6.0 Multilingual (Russia).",
      answer:
        "Experiments were made on rat pups upon their delivery by their mothers who were mated with healthy males.",
    },
    {
      unit: "Unit 3",
      id: "u3-7",
      text: "By the end of the experiment, from the 15 females included in the experiment, 11 gave birth and produced a total of 132 rat pups. The 4 rats who became pregnant from 6 females on the positive control diet gave birth to 44 pups (an average of 11 pups/female), while the 4 females, from the 6 on GM soya flour supplemented groups gave birth to 45 (11.3 pups/female), and the 3 females from the traditional soya group-33 pups (11 pups/female).",
      answer:
        "Different groups of rats produced different numbers of rat pups who were alive upon delivery.",
    },
    {
      unit: "Unit 3",
      id: "u3-8",
      text: "Supplementation of the diet of the females with GM soya led to the death of 25 pups, out of the 45 born by the end of the third week of lactation, while during the same period only 3 pups born to the females on the traditional soya supplemented diets died from 33. The mortality in the positive control group was also 3, but from the larger number of pups born, as seen in Table 1. High pup mortality was generally characteristic of every litter from the females fed with the GM soya flour (Table 2). Among the pups from the females fed with the positive control diet, 2 pups died during the first week, and 1 during the second week after delivery. All those pups that died from the females fed with traditional soya flour did so during the first week after birth. However, pups from the females fed with the GM soya flour supplemented diet kept dying during lactation period as it is evident from Table 3.",
      answer:
        "The mortality of rat pups varied from group to group in the first three weeks, but the mortality in the GM soya group was the highest.",
    },
    {
      unit: "Unit 3",
      id: "u3-9",
      text: "In 2 weeks after their birth the weight of the pups from the GM soya supplemented group was less (23.95g ± 1.5 g) than that of the pups of the positive control group (30.03g ± 1.1 g p < 0.005), or from the traditional soya flour supplemented group (27.1g ± 0.9 g p < 0.1). Since the number of surviving pups was so different, the weight distribution of the pups was compared in Table 4. From the data it is evident that 36% of the pups from the GM soya fed group weighed less than 20 g, in comparison with 6% in the positive control group, and with 6.7% found in the traditional soya supplemented diet group (Table 4). The study of pups' organ mass showed that the organs of small pups from GM soya fed group were tiny in comparison with the same of the other groups except the brain mass (Table 5). This fact indicated that changes occurred with the development of internal organs. Slight negative effect was found in the group which received the traditional soya, but this effect was not significant. No mortality of females and survived young pups eating the GM soya flour supplemented diet was observed.",
      answer:
        "The weight of pups and their internal organs varied from group to group and those of the GM soya fed group were less in comparison with the weight of the other groups.",
    },
    {
      unit: "Unit 3",
      id: "u3-10",
      text: "The reproductive behaviour of female rats fed on standard laboratory feed supplemented with soya flour prepared from either genetically modified soya or traditional soya was studied to see the effect of the diet on pregnancy, lactation and the growth of the rat pups. Since it is well established that raw soybean contains a number of anti-nutrients (Pusztai, 1998), and female hormone-like substances, it was thought to be necessary to compare these data with those from a positive control group when animals were not exposed to any soya flour supplementation.",
      answer:
        "The experiment was to investigate the effect of different diets, GM soya, traditional soya and standard laboratory feed, on the reproductive behavior of female rats.",
    },
    {
      unit: "Unit 3",
      id: "u3-11",
      text: "In order to understand the mechanism of how this widely consumed GM crop exerts its influence on the reproductive performance of mammals and their offspring, it would be necessary to perform complex research, including histological, genetic and embryo-toxicological investigations. However, we had to restrict our experiments only to a short time span, and start to feed the female rats 2 weeks before mating. However, unlike in the experiments of Schubbert et al. (1998) or Brake and Evenson (2004) who started to feed pregnant mice, in our experiments the diets supplemented with GM or traditional soya flour were already given to the female rats 2 weeks before mating, and we continued to treat them with their respective diet until the pups were weaned.",
      answer:
        "Different from previous experiments, our experiments started to feed the female rats two weeks before mating.",
    },
    {
      unit: "Unit 3",
      id: "u3-12",
      text: "Upon delivery, very unexpectedly a very high rate of pup mortality (55.6%) was observed in the group of females whose diet was supplemented with the GM soya flour in comparison with the pups of both the positive control (6.8%) and the traditional soya flour supplemented (9%) groups. Also, in this group the pups continued to die over the period of lactation, which occurred only in the GM soya fed group. At the same time, the weights of the surviving rat pups were also lower. Since the amount of the pups was smaller, about half, more milk should have been available for the individual pups. They should have a better chance to grow optimally, unless the amount and/or the quality of the milk were affected by consuming the GM soya flour.",
      answer:
        "Compared with the other groups, the GM soya fed group had a very high rate of pup mortality and its pups continued to die over the period of lactation. The surviving pups also weighed lower.",
    },
    {
      unit: "Unit 3",
      id: "u3-13",
      text: "Our data allow us to speculate and presume that the negative effect of GM soya on the newborn pups could be explained by two possible factors. Firstly, it can be the result of the transformation and the insertion of the foreign genes, which could penetrate into the sexual / stem cells, or / and into cells of the fetus, as it was observed by Schubbert et al. (1998). Secondly, the negative effect could be caused by the accumulation of the GM soya residues. However, no mortality was observed with the female rats, nor with the young pups survived, although they also began to eat the GM soya. It is supposed that the effect could be caused by the first factor.",
      answer:
        "The transformation and insertion of the foreign genes and the accumulation of the GM soya residues might explain the negative effect of GM soya on newborn pups.",
    },

    // --- Unit 4 ---
    {
      unit: "Unit 4",
      id: "u4-1",
      text: 'Breast-feeding is currently a subject of immense health and nutritional interest all over the world. In 1983, the World Health Organization called attention to the worldwide decline in the prevalence and duration of breast-feeding, and underscored the urgent need for more definitive data on present-day infant-feeding practices and trends, as well as information on the key factors influencing women\'s decisions on how to feed their babies. Breast-feeding has been the traditional infant-feeding practice in the developing world, but recent extensive reports strongly suggest that this is rapidly giving way to the "bottle culture," especially among societies in transition mainly in peri-urban areas and in the poverty pockets of urbanized population groups (Darwish et al., 1983). The dimensions of this rapid, pervasive sociocultural transformation, often erroneously regarded as a symbol of modernity, as well as the forces underlying the disturbing negative change, are not yet clearly defined.',
      answer:
        "Great changes have taken place in the traditional infant-feeding practices, but the reasons for the changes are not clearly identified.",
    },
    {
      unit: "Unit 4",
      id: "u4-2",
      text: "This report attempts to evaluate current maternal perceptions of infant-feeding among different ethnic, religious, cultural, and socioeconomic groups in Nigeria, with the primary objective of assessing the extent of decline in breast-feeding as well as the major factors responsible for the negative change, and how best to institute corrective educational measures. For this particular study, Surulere, a suburb of metropolitan Lagos that is heterogeneous in its ethnic and socioeconomic composition, was selected as a pretest area for the widely assumed negative effects of urbanization and modernization on infant-feeding practices and the traditional African image of mothering.",
      answer:
        "A survey was conducted among mothers in Surulere to explore matters related to the decline in breast-feeding practices.",
    },
    {
      unit: "Unit 4",
      id: "u4-3",
      text: "The study sample comprised 558 randomly selected Nigerian women residents in Surulere. An interview was conducted at the Gbaja and Randle Health Centers located in the area, using a standard questionnaire to obtain information on the following: ethnic origin of mother; level of education; mother's occupation and age; total income of the family; number of children born alive to mother; type of infant-feeding preferred by mother and the factors influencing the decision; age at which breast-feeding was supplemented with other foods; specific types of supplementary foods preferred by mother; duration of breast-feeding; influence of hospitals / clinics and advertisers of baby foods on choice of infant-feeding practice.",
      answer:
        "The participants and the content of the questionnaire are clearly introduced.",
    },
    {
      unit: "Unit 4",
      id: "u4-4",
      text: "Most of the women interviewed (71%) were 21-30 years old, while those 16-20 years and 31-35 years accounted for 11% and 12% respectively of the sample. Four mothers were under 16 years, and the rest were over 36 years of age. Twenty-four percent of the women interviewed described themselves as full-time housewives with no readily visible occupation outside their homes, while 48% were traders. The rest were teachers, civil servants, nurses, seamstresses, hairdressers, and full-time students.",
      answer:
        "The women interviewed range from less than 16 years old to over 36 years old with different employment.",
    },
    {
      unit: "Unit 4",
      id: "u4-5",
      text: "The women's educational qualifications were assessed by grouping them into the following major categories: no formal schooling of any type, completion of primary school education lasting about six years, completion of secondary school or its equivalent, including modern school, and graduates of university or post-secondary professional programmes. Only 12% of the women belonged to the last group, while 15% had had no formal schooling. The highest proportion of the sample (44%) had completed primary school.",
      answer:
        "The women's education background varied; more than half of them finished their primary school education.",
    },
    {
      unit: "Unit 4",
      id: "u4-6",
      text: "Table 1 shows that the estimated total monthly income per family was less than N 400 (1 $naira=USS1.30)$ for about 56% of the study sample. No more than 29% of the families had monthly incomes below N 200, well below the subsistence level in a city rated among the most expensive in the world in terms of housing and general cost of living. The number of children born alive to most of the women (74%) varied from one to three, while 16% of the women had five or more children born alive (Table 2).",
      answer:
        "Most women lived a poor life with a big family of several children.",
    },
    {
      unit: "Unit 4",
      id: "u4-7",
      text: "In the opinion of most of the mothers, breast-feeding should be practised for as long as 7 to 12 months, while a relatively small number (less than 12%) believed that breast-feeding should be restricted to only the first six months of life (Table 3). Contrary to the belief of the mothers (38%) that breast-feeding should continue for up to one year of life, only about 24.6% of the mothers practised breast-feeding for that long (Table 4). While none of the 558 mothers interviewed was of the opinion that breast-feeding should stop before the first month, three mothers actually breast-fed their infants for less than this. As many as 64 women interviewed (about 11%) admitted that they did not know how long breast-feeding should last, while a comparatively similar number (about 17%) were still breast-feeding their babies at the time of the study.",
      answer:
        "The opinion of the duration of breast-feeding varied from mother to mother, but their opinion contradicted their actual practices.",
    },
    {
      unit: "Unit 4",
      id: "u4-8",
      text: "Table 5 summarizes the opinions of the women regarding the appropriate age for introduction of supplementary foods. Only 4% of the mothers believed that breast-feeding should be supplemented for infants under one month of age. Forty-four percent of the women suggested one to three months as the best age for introducing supplementary feeding, while about 28% believed that breast-feeding should remain unsupplemented for as long as six to nine months. In marked contrast to their expressed beliefs, 43% of these mothers actually introduced supplementary feeding to their infants before one month and as many as 81% used supplementary foods for infants from birth to three months (Table 6). Only about 2% of the women waited until their infants were six months and older before initiating supplementary feeding, an observation markedly different from their expressed opinions. In effect, these mothers did not practise their beliefs about infant-feeding. The commonest reasons advanced by the women for early introduction of supplementary feeding included the following: the nature of work outside the home militates against prolonged breast-feeding; insufficient breast milk; supplementary feeding promotes faster growth of the baby; others do so.",
      answer:
        "There were different reasons for most women to introduce supplementary foods for their infants at different stages after birth.",
    },
    {
      unit: "Unit 4",
      id: "u4-9",
      text: "The preferred supplementary foods used by the mothers studied included imported powdered milk or milk-based products, various locally available as well as imported canned cereals, animal proteins, and mashed beans and yams etc. (Table 7).",
      answer:
        "Mothers use a variety of supplementary foods which are available.",
    },
    {
      unit: "Unit 4",
      id: "u4-10",
      text: "The wide gap between the women's expressed opinions about infant-feeding and what they actually practised is further underscored by the data in Table 8. Contrary to their actual practice as indicated in Table 6, 50% of these mothers believed that infants aged three to six months thrived best on breast-feeding alone, while about 35% shared the view that a combination of breast- and bottle-feeding was the right answer (Table 8). There was some suggestive evidence from the studies that bottle-feeding was not very strongly or extensively promoted by the hospital / clinic staff attending these mothers, although quite a number of the women (22%) claimed that they received free milk samples for an ill-defined period after delivery of their babies (Tables 9 and 10).",
      answer:
        "Although the women believed the benefits of breast-feeding, what they actually practiced contradicted their expressed opinions.",
    },
    {
      unit: "Unit 4",
      id: "u4-11",
      text: "Complex interactions between broad economic and sociocultural factors influence infant-feeding practices in the developing countries. Our data demonstrated quite convincingly that virtually all the mothers studied, most of whom had little or no formal education, still entertained strong positive feelings about the importance of breast-feeding, an observation consistent with the reported findings of Goyea and Johnson (1977). Equally evident from the present study was the wide discrepancy between the actual infant-feeding practices of the women and their expressed views on what the practices ought to be (Tables 5, 6, and 8). Quite often the actual practices fell short of the mother's nutritional awareness, thus contradicting the frequently repeated statements that such illiterate, urbanized women are victims of poor or improper counseling.",
      answer:
        "The result proved that the decline in breast-feeding practices was not due to women's lack of proper counseling about nutrition, but due to the socioeconomic pressure.",
    },
    {
      unit: "Unit 4",
      id: "u4-12",
      text: 'Results of the present study are consistent with reports (Uyanga, 1980; Owie, 1980) of progressive decline in the prevalence and duration of breast-feeding among urban Nigerians. It is noteworthy, however, that urban mothers retain their belief that "breast is best" and that despite the difficulties, over 98% of mothers still manage to breast-feed for an average of two to three months. Most of these earlier reports attributed the negative change to attitudes and influences imported from the developed world and the preference for bottle-feeding by the urbanized African. It is clear that such explanations are oversimplified and apply to only a few and ignore the hard realities of urban existence that may make prolonged breast-feeding difficult. The crucial questions, as rightly pointed out by Harfouche (1980), are why and how "women who migrate from the traditional rural areas to the so-called modern universe adjust to new situations and adopt new attitudes and patterns of behaviour."',
      answer:
        "Previous studies failed to take harsh urban economic pressure into account when they believed that the influence of the West and perception of urbanized women were responsible for the breast-feeding decline.",
    },
    {
      unit: "Unit 4",
      id: "u4-13",
      text: "For most Nigerians, urban existence is synonymous with extreme individual and community poverty. Implicit in this is a great pressure on mothers to spend more time trying to augment the family income at the expense of caring adequately for their children. There is good evidence from the present study that breast-feeding has not lost its prestige among the economically underprivileged laboring classes in metropolitan Lagos, but is accorded lower priority because of the overwhelming competing factors of urban existence resulting from poverty. The crucial issue is how to promote breast-feeding in the presence of the extensive poverty characteristic of urban life in many parts of the developing world. This issue assumes very serious dimensions in view of the relatively rapid urban growth rate in these developing countries.",
      answer:
        "The critical issue is how to promote breast-feeding practices in the urban area in the developing world.",
    },
    {
      unit: "Unit 4",
      id: "u4-14",
      text: "Findings in the present study were consistent with the view that childhood malnutrition is more a result of objective conditions of people's lives than ignorance on the mother's part (Segal and White, 1981). It is suggested that economic and social pressures under which the low-income group live in an urban area were responsible for the critical change in traditional infant-feeding practices and the African image of mothering. Until this major structural defect of urban life in the developing world is eliminated or controlled, any nutrition education program that solely emphasizes and extols the virtues of breast-feeding, facts already well accepted by the people, is bound to achieve minimal results in terms of reversing the current trend towards increasing displacement of breast-feeding by bottle-feeding.",
      answer:
        "The decline in breast-feeding won't be reversed if the poverty of urban women is not addressed properly.",
    },
    {
      unit: "Unit 4",
      id: "u4-15",
      text: "Perhaps more lasting benefits will be achieved by emphasizing the education of mothers on how to prepare and use hygienically acceptable supplementary foods from relatively inexpensive but nutritious locally available staple foods. Too much educational effort has been spent on trying to teach impoverished, urbanized women precisely when to introduce supplementary feeding, when it is often forgotten that even among nutrition experts there is still lack of unanimity on this issue (Scrimshaw and Underwood, 1980; Scrimshaw, 1982). Rather, concentration should be on how to do this most effectively. In addition, government policies in developing countries should address the severe poverty of urban immigrants that prevents them from being able to feed their children properly.",
      answer:
        "Emphasis should be placed on teaching mothers how to use supplementary foods properly for their infants.",
    },

    // --- Unit 5 ---
    {
      unit: "Unit 5",
      id: "u5-1",
      text: 'The public awareness of scientific fraud has increased remarkably since the late 1980s when a controversy made front-page news, a controversy about a paper investigated for fraud which had as coauthor a Nobel laureate. During the 1990s scientific fraud was disclosed on numerous occasions (Lock, 1996). In fact, it was recently suggested that fraud now is "endemic in many scientific disciplines and in most countries" (Fulford, 1998) and may undermine the credibility of scientific research. However, the clandestine character and consequential lack of reliable information make it difficult to study scientific fraud. The characteristics and frequency of scientific fraud, therefore, are generally unknown, and its impact on medical research is unclear. Biostatisticians routinely work closely with physicians and scientists in many branches of medical research and have unique insight into data. In addition, they have the methodological competence to detect fraud and could be expected to have a special professional interest in the validity of results. Biostatisticians therefore could provide unique and reliable information on the characteristics of fraud in medical research. The objective of this study was to assess the characteristics of fraud in medical research by surveying members of the International Society for Clinical Biostatistics (ISCB).',
      answer:
        "Investigations of fraud in medical research need the help of biostatisticians whose work could provide unique and reliable information.",
    },
    {
      unit: "Unit 5",
      id: "u5-2",
      text: "The ISCB is an international society for biostatisticians, which, in April 1998, had 442 members in 31 countries or regions on six continents. Most of the members (69%) were from the European Union (Table 1). The ISCB has a subcommittee on fraud, which was set up following the expression of concerns about fraud and inappropriate responses to it. In April 1998 a questionnaire designed for anonymous response was mailed to all members with an accompanying letter inviting participation in the survey. An electronic version was also opened on the ISCB home page on the Internet. No prepaid return envelopes were used and no formal reminders were distributed. The deadline for response was the end of July 1998. Mailed responses were sent to the survey office in Lund, Sweden.",
      answer:
        "A survey was conducted among the members of the ISCB via a questionnaire.",
    },
    {
      unit: "Unit 5",
      id: "u5-3",
      text: "The questionnaire was designed cooperatively by members of the ISCB Subcommittee on Fraud and contains 31 items divided into two sections, one on age, sex, position, nationality, etc., and the other on experience with and opinions on scientific fraud. Prior to the actual survey the questionnaire was pilot-tested on a small number of ISCB nonmember biostatisticians in the United States and in the European Union and was revised in accordance with the experiences from this pilot study.",
      answer:
        "The questionnaire contains questions about experience with and opinions on scientific fraud apart from basic information about age, sex, position, nationality, etc. It was pilot-tested and revised before the actual survey.",
    },
    {
      unit: "Unit 5",
      id: "u5-4",
      text: 'In the questionnaire, fraud was defined as a deliberate attempt to mislead others in the design, conduct, analysis, or reporting of a study. Furthermore, it was stressed that careless or incompetent research was not necessarily considered fraud; an "intention to cheat" was required. In addition, the responders were specifically asked not to characterize poor methodology and borderline practices as fraud when replying to the questionnaire. The sign test was used to evaluate the difference in subjectively estimated prevalence of fraudulent projects between epidemiological papers and papers from clinical trials. Spearman\'s rank correlation coefficient was used to investigate a potential relation between response rates and prevalence of statisticians having been engaged in fraudulent projects.',
      answer:
        "To ensure the validity and reliability of the responses, fraud was exactly defined in the questionnaire. A sign test and Spearman's rank correlation coefficient were also used.",
    },
    {
      unit: "Unit 5",
      id: "u5-5",
      text: "One hundred sixty-three members and three nonmembers completed questionnaires. We report here information from the 163 members who responded. The response rate for members was 37% (see Table 1). Several responders expressed their concern about anonymity (nationality, age, and sex could identify them). Eleven members also declined to disclose their nationality. Most responders mailed or faxed their questionnaires to the survey office; only 23 (14%) used the Web.",
      answer:
        "Thirty-seven percent of ISCB members gave responses to the questionnaire.",
    },
    {
      unit: "Unit 5",
      id: "u5-6",
      text: 'Table 2 shows the distribution of the responders by age, sex, and type of employers. Nineteen members had governmental employment, 72 university, 52 private, and, while 35 members reported multiple employment, 19 members had multiple employer types. Counting responses rather than responders, of the 29 responses stating governmental employer, six stated employment by a regulatory agency and 23 by "other governmental". Ninety-one responses stated employment by a university. Private employment was stated by 77 responses. Of these, 41 responses stated employment by a pharmaceutical / biotechnical / device company, 18 by a contract research organization, 8 by "other private company," and 10 responded that they were self-employed. Comparison of responders and nonresponders was not possible because ISCB does not record these demographic data in its membership records.',
      answer:
        "The distribution of the responders by age, sex, and type of employers was described.",
    },
    {
      unit: "Unit 5",
      id: "u5-7",
      text: "Table 3 gives a summary of the main results. A clear majority (126 responders; 76%) considered career and power to be the main motive for fraud, not financial reward. One hundred and four members (65%) considered the impact of fraud on the progress of medical science to be a major problem (27 members) or somewhat important (77 members). One hundred and three responders (63%) reported that the organization in which they worked did not have a system for handling suspected fraud, or that they did not know if this was the case, or did not reply to the question. Eighty-one responders (51%) knew of at least one fraudulent project in their proximity during the last 10 years. Forty-three responses indicated that the fraud had been related to fabrication or falsification of data and 31 to suppression or selective deletion of data, whereas 16 and 32 indicated deceptive design or analysis and deceptive reporting of results, respectively. Forty-nine responders (31%) reported having been engaged in a project in which fraud tookplace or was about to take place. In 14 cases the responder intervened to attempt to prevent the fraud from occurring; in 11 cases the responder reported it to a relevant person or organization; in 10 cases the responder was not aware of the fraud as it happened or did nothing to prevent it. Fourteen responders reported other actions or did not reply to the question. Information was not obtained on whether an attempt to prevent fraud was successful. Twenty responders (13%) had been requested to support fraud themselves. In three cases this concerned fabrication or falsification of data; in 11 cases suppression or selective deletion of data; and in 7 and 12 cases deceptive design or analysis and deceptive reporting of results, respectively. Eight of the 20 responders reported that the attempted fraud eventually was changed into acceptable practice. Nineteen responders (12%) had participated as an expert in a formal investigation on suspected fraud.",
      answer:
        "The survey revealed the responders' opinions on the motivations, the reasons and impacts of scientific fraud, and their experiences with it.",
    },
    {
      unit: "Unit 5",
      id: "u5-8",
      text: "The subjectively estimated prevalence of fraud in published reports was somewhat greater for epidemiological studies than for clinical trials (interpolated median values 0.80% and 0.69% respectively; $p=0.047)$. Response rates appeared to be lower in countries or regions with higher frequency of statisticians having participated in fraudulent projects $(r_{s}=-0.41$, $p<0.001$.",
      answer:
        "The survey showed that the subjectively estimated prevalence of fraud in published reports was greater for epidemiological studies than for clinical trials.",
    },
    {
      unit: "Unit 5",
      id: "u5-9",
      text: "This survey of biostatisticians found that knowledge of fraudulent projects is surprisingly common. Although only 163 of the 442 members (37%) responded to the survey, 81 (51%) reported that they knew of at least one fraudulent project in their proximity in the past 10 years. Even if these 81 responses included all episodes of fraud known to the 442 ISCB members, the prevalence estimate of ISCB members knowing of fraudulent projects in their vicinity in the past 10 years would be 18%. Although the overall low response rate to this survey limits its generalizability, the high proportion of respondents knowing about fraudulent projects provided the primary motivation for this report.",
      answer:
        "The survey demonstrated that most responders knew of fraudulent projects.",
    },
    {
      unit: "Unit 5",
      id: "u5-10",
      text: "The prevalence of persons knowing about fraudulent projects among biostatisticians in the current survey is greater than that among the members of the American Association for the Advancement of Science (AAAS) who were surveyed in 1994. In a random sample of 469 researchers and administrators in universities, industry, and government, 27% reported that they knew of at least one fraudulent project over the last 10 years (Hamilton, 1992). The participation rate in the AAAS survey was similar (31%) to ours. If all episodes of fraud known to AAAS members had been reported, the prevalence estimate would have been 8%. The proportion of participants knowing about fraudulent projects is also substantially greater than that in a 1992 Norwegian survey of 152 medical principal investigators whose study protocols had been assessed by ethics committees. In that study also 27% of the responders knew about one or more cases of scientific fraud (Jacobsen and Hals, 1995). However, that study focused on ethical issues in general rather than on fraud; the response rate was also substantially higher (70%).",
      answer:
        "Compared with two similar surveys, more responders in this survey knew about fraudulent projects among biostatisticians.",
    },
    {
      unit: "Unit 5",
      id: "u5-11",
      text: "There are several explanations for the high proportion of responders who knew of the occurrence of fraud, other than the low (37%) response rate. Biostatisticians are often privy to confidential data and are knowledgeable enough to understand their implications. Therefore they may be in a unique position to observe scientific transactions in the prepublication stages. Second, because of their technical knowledge, biostatisticians may be harsh judges of scientific collaborators' optimistic interpretation of data. In our instructions we attempted to distinguish between fraud and carelessness, and we requested that poor methodology and borderline practices not be considered fraud. However, our instructions might have been ambiguous, and we cannot be sure that the responders were not overzealous in what they considered to be fraud. Third, we cannot be certain that the reported episodes of fraud were at all important, or that the same episode was not reported by multiple respondents. However, the latter does not seem likely because of the diverse countries of origin of the responders.",
      answer:
        "There are several reasons why high proportion of responders in the survey knew of the occurrence of fraud.",
    },
    {
      unit: "Unit 5",
      id: "u5-12",
      text: "Discussions of fraud have in the past often focused on clinical trials. Reasons for this may be that results of clinical trials have more direct medical consequences than epidemiological studies and that regulatory authorities control the conduct trials. However, our survey seems to suggest that fraud might be more prevalent in epidemiological studies than in clinical trials. A possible explanation for this finding may be the more controlled nature of the clinical trial, which makes it less amenable to fraud (Buyse, George, Evans et al. 1999).",
      answer:
        "Different from earlier findings, the survey suggested that fraud might be more popular in epidemiological studies than in clinical trials.",
    },
    {
      unit: "Unit 5",
      id: "u5-13",
      text: "The impact of fraudulent research has been discussed previously (Garfield and Welljams-Dorof, 1990). It appears that the scientific community quickly recognizes and avoids citations from work known, or suspected, to be fraudulent. This further stresses the importance of control systems that reveal fraudulent publications as soon as possible. The low proportion of biostatisticians who reported working for organizations with systems for handling suspected fraud reiterates the need for more such systems. The low number of biostatisticians who reported having participated as experts in formal investigations on fraud may suggest that few investigations of fraud occur.",
      answer:
        "It is necessary to establish some control systems for handling suspected medical fraud.",
    },
    {
      unit: "Unit 5",
      id: "u5-14",
      text: "If we were to do this survey again, we would use prepaid return envelopes. We had hoped that allowing replies through the World Wide Web could save the cost of postage, but that did not prove to be the case. We would also ask more specific questions on the exact nature of any fraudulent episodes to which the responders had been exposed.",
      answer:
        "More measures should be taken in the future to improve similar surveys.",
    },
    {
      unit: "Unit 5",
      id: "u5-15",
      text: "We believe that it is important to change the general attitudes toward fraud in medical research. Improved education, emphasizing ethical standards in research, and more and better systems for handling suspected fraud could be expected to play roles in prevention. However, more research in this field is necessary to determine which educational, organizational, or administrative measures actually prevent fraud. In addition, low participation rates appear to be a major problem in many surveys. Survey techniques and procedures therefore might have to be specially developed to improve validity and reliability in this field.",
      answer:
        "It is important to change the general attitudes toward fraud and identify measures which could actually prevent fraud.",
    },
  ],
};
