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
      answers: ["novel", "advers"],
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
      original:
        "It is proved that animals become old because, if they did not, there would not be successive replacement of individuals and hence no evolution.",
      revised:
        "It <strong>seems to prove</strong> that animals become old because, if they did not, there <strong>were no</strong> successive replacement of individuals and hence no evolution.",
      desc: "将 is proved 改为 seems to prove (似乎证明)；将 would not be 改为 were no (虚拟语气的变化)。",
    },
    {
      id: 3,
      original:
        "The effect of these small particles is to cool the climate and to partially offset the increasing concentrations of greenhouse gases.",
      revised:
        "It <strong>suggests that</strong> the effect of these small particles is to cool the climate and to partially offset the <strong>warming of</strong> increasing concentrations of greenhouse gases.",
      desc: "添加 It suggests that (这表明...)；增加 warming of (更具体地指代温室气体导致的'变暖')。",
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
  matchData: [
    // --- Unit 2 (原有数据，已补充 unit 字段) ---
    {
      unit: "Unit 2",
      id: "u2-1",
      text: "Although global warming is a popular topic in science classes...",
      answer:
        "Previous studies show that there is a common misunderstanding of the greenhouse effect and global warming among students.",
    },
    {
      unit: "Unit 2",
      id: "u2-2",
      text: "Obviously, helping students have a better understanding of greenhouse gases...",
      answer:
        "The objective is to improve students' understanding of the greenhouse effect and global warming through participation in a project.",
    },
    {
      unit: "Unit 2",
      id: "u2-3",
      text: "The main research question is, 'How does students' understanding...'",
      answer:
        "The project comprises a virtual experiment and two tests prior to and following participation with the same eight questions.",
    },
    {
      unit: "Unit 2",
      id: "u2-4",
      text: "Five teachers from three schools on the west coast...",
      answer:
        "There are five teachers and 190 students participating in the project.",
    },
    {
      unit: "Unit 2",
      id: "u2-5",
      text: "Students' participation began with their individual completion...",
      answer:
        "With the help of their teachers, students should finish eight questions before and after participation in a project.",
    },
    {
      unit: "Unit 2",
      id: "u2-6",
      text: "The unit includes six main activities. In the first activity...",
      answer:
        "Students learn global warming phenomenon and the Earth energy balance through viewing short video clips in the first two activities.",
    },
    {
      unit: "Unit 2",
      id: "u2-7",
      text: "In the third activity, students conduct experiments with the visualization...",
      answer:
        "Students conduct experiments to learn about greenhouse gases, reduce their greenhouse gas emissions and recalculate their ecological footprint in the rest activities.",
    },
    {
      unit: "Unit 2",
      id: "u2-8",
      text: "Students participated in the unit activities for five one-hour class periods...",
      answer:
        "The experiment was implemented in the normal classroom teaching with the cooperation of teachers and students.",
    },
    {
      unit: "Unit 2",
      id: "u2-9",
      text: "The main data were generated from students' responses...",
      answer:
        "Students' knowledge about the greenhouse effect and global warming is tested in three questions.",
    },
    {
      unit: "Unit 2",
      id: "u2-10",
      text: "Question 4 assesses students' alternative ideas about the factors...",
      answer:
        "Students are asked to list and explain more factors which have an impact on global warming and the greenhouse effect.",
    },
    {
      unit: "Unit 2",
      id: "u2-11",
      text: "Questions 5, 6 and 7 ask students to explain how particular components...",
      answer:
        "Knowledge integration rubrics are used to analyze the responders' answers.",
    },
    {
      unit: "Unit 2",
      id: "u2-12",
      text: "A group of researchers familiar with the curriculum unit design...",
      answer:
        "Necessary methods are used for the reliability of data analysis.",
    },
    {
      unit: "Unit 2",
      id: "u2-13",
      text: "One of the pre-post-test questions was, 'Describe how the greenhouse effect happens...'",
      answer:
        "A good knowledge of the greenhouse effect should be a better understanding of its three components.",
    },
    {
      unit: "Unit 2",
      id: "u2-14",
      text: "Matched t-test analyses were conducted to measure differences...",
      answer:
        "Change in the understanding of the greenhouse effect before and after the experiment is measured by some tests.",
    },
    {
      unit: "Unit 2",
      id: "u2-15",
      text: "Following participation in the GWVE unit activities, students' ideas were more normative...",
      answer:
        "The results show the improvement of students' understanding of the greenhouse effect and global warming.",
    },
    {
      unit: "Unit 2",
      id: "u2-16",
      text: "Responses to individual pre-post-test questions were analyzed using matched t-tests...",
      answer:
        "Responses to individual pre- / post-test questions were analyzed.",
    },
    {
      unit: "Unit 2",
      id: "u2-17",
      text: "Prior to instruction, students had some understanding of the greenhouse effect...",
      answer:
        "The pre-post-test shows that students had an improved understanding of greenhouse effect.",
    },
    {
      unit: "Unit 2",
      id: "u2-18",
      text: "Students responded to 'What is global warming?' on the pre-test with incomplete ideas...",
      answer:
        "The results reveal that after the project, students got more scientific knowledge and more integrated ideas of global warming.",
    },
    {
      unit: "Unit 2",
      id: "u2-19",
      text: "On the pre-test, two commonly expressed responses to the question about the difference...",
      answer:
        "Students can distinguish between the greenhouse effect and global warming on the post-test.",
    },
    {
      unit: "Unit 2",
      id: "u2-20",
      text: "Three questions asked students to explain the roles of individual contributing factors...",
      answer:
        "The result is indicative of an improved understanding of individual factors contributing to the greenhouse effect.",
    },
    {
      unit: "Unit 2",
      id: "u2-21",
      text: "Overall, students show an increased understanding of the target phenomena, but there is room for growth...",
      answer:
        "Students need to have a better understanding of the relationship between greenhouse gases, infrared energy and the Earth's temperature.",
    },
    {
      unit: "Unit 2",
      id: "u2-22",
      text: "Prior to instruction, students' knowledge consisted mainly of causes of global warming...",
      answer:
        "However, students need more knowledge about the two main relationships among the individual components of the greenhouse effect.",
    },
    {
      unit: "Unit 2",
      id: "u2-23",
      text: "Changes in students' understanding observed in this study are similar to children's understanding...",
      answer:
        "The finding is consistent with the previous study that children will modify their ideas more scientifically once they acquire new information.",
    },
    {
      unit: "Unit 2",
      id: "u2-24",
      text: "In our work, most students fail to understand that the greenhouse gases trap infrared energy...",
      answer:
        "In the process of children's acquiring knowledge, there is a transitional period where correct and incorrect ideas coexist.",
    },
    {
      unit: "Unit 2",
      id: "u2-25",
      text: "Our current findings indicate that students' participation in the curriculum unit activities...",
      answer:
        "The future research is that we will design more reliable methods to measure students' understanding of global warming.",
    },

    // --- Unit 3 ---
    {
      unit: "Unit 3",
      id: "u3-1",
      text: "The term 'genetically modified organisms (GMOs)' refers to plants, microbes and animals with genes transferred from other species in order to produce certain novel characteristics...",
      answer: "Scientists have noticed the hazards of GMOs.",
    },
    {
      unit: "Unit 3",
      id: "u3-2",
      text: "GM crops contain material which is not present in them under natural conditions and they form a part of our daily diet. To understand what effect they can have on us...",
      answer:
        "Previous studies showed that there were negative effects of GMOs on animals.",
    },
    {
      unit: "Unit 3",
      id: "u3-3",
      text: "It is put forward in the risk assessment documents that the GM components of transformed plants are completely destroyed in the digestive tract...",
      answer:
        "The lack of related previous studies made us focus our study on the effect of GM crops on the reproductive function of mammals.",
    },
    {
      unit: "Unit 3",
      id: "u3-4",
      text: "Wistar rats were used as the subjects in the experiment. The animals were brought up to sexual maturity on laboratory rat feed...",
      answer: "Wistar rats were used as the subjects in the experiment.",
    },
    {
      unit: "Unit 3",
      id: "u3-5",
      text: "One group of female rats of 180-200 g weight (6, in 2 cages) was allocated to the experimental group, and received 5-7 g soya flour / rat / day...",
      answer: "The female rats were allocated into three groups.",
    },
    {
      unit: "Unit 3",
      id: "u3-6",
      text: "After 2 weeks on the diets all the females were mated with 2 healthy males of the same age, which had never been exposed to soya flour supplement...",
      answer:
        "Experiments were made on rat pups upon their delivery by their mothers who were mated with healthy males.",
    },
    {
      unit: "Unit 3",
      id: "u3-7",
      text: "By the end of the experiment, from the 15 females included in the experiment, 11 gave birth and produced a total of 132 rat pups...",
      answer:
        "Different groups of rats produced different numbers of rat pups who were alive upon delivery.",
    },
    {
      unit: "Unit 3",
      id: "u3-8",
      text: "Supplementation of the diet of the females with GM soya led to the death of 25 pups, out of the 45 born by the end of the third week of lactation...",
      answer:
        "The mortality of rat pups varied from group to group in the first three weeks, but the mortality in the GM soya group was the highest.",
    },
    {
      unit: "Unit 3",
      id: "u3-9",
      text: "In 2 weeks after their birth the weight of the pups from the GM soya supplemented group was less (23.95g ± 1.5 g) than that of the pups of the positive control group...",
      answer:
        "The weight of pups and their internal organs varied from group to group and those of the GM soya fed group were less in comparison with the weight of the other groups.",
    },
    {
      unit: "Unit 3",
      id: "u3-10",
      text: "The reproductive behaviour of female rats fed on standard laboratory feed supplemented with soya flour prepared from either genetically modified soya or traditional soya was studied...",
      answer:
        "The experiment was to investigate the effect of different diets, GM soya, traditional soya and standard laboratory feed, on the reproductive behavior of female rats.",
    },
    {
      unit: "Unit 3",
      id: "u3-11",
      text: "In order to understand the mechanism of how this widely consumed GM crop exerts its influence on the reproductive performance of mammals...",
      answer:
        "Different from previous experiments, our experiments started to feed the female rats two weeks before mating.",
    },
    {
      unit: "Unit 3",
      id: "u3-12",
      text: "Upon delivery, very unexpectedly a very high rate of pup mortality (55.6%) was observed in the group of females whose diet was supplemented with the GM soya flour...",
      answer:
        "Compared with the other groups, the GM soya fed group had a very high rate of pup mortality and its pups continued to die over the period of lactation. The surviving pups also weighed lower.",
    },
    {
      unit: "Unit 3",
      id: "u3-13",
      text: "Our data allow us to speculate and presume that the negative effect of GM soya on the newborn pups could be explained by two possible factors...",
      answer:
        "The transformation and insertion of the foreign genes and the accumulation of the GM soya residues might explain the negative effect of GM soya on newborn pups.",
    },

    // --- Unit 4 ---
    {
      unit: "Unit 4",
      id: "u4-1",
      text: "Breast-feeding is currently a subject of immense health and nutritional interest all over the world. In 1983, the World Health Organization called attention...",
      answer:
        "Great changes have taken place in the traditional infant-feeding practices, but the reasons for the changes are not clearly identified.",
    },
    {
      unit: "Unit 4",
      id: "u4-2",
      text: "This report attempts to evaluate current maternal perceptions of infant-feeding among different ethnic, religious, cultural, and socioeconomic groups in Nigeria...",
      answer:
        "A survey was conducted among mothers in Surulere to explore matters related to the decline in breast-feeding practices.",
    },
    {
      unit: "Unit 4",
      id: "u4-3",
      text: "The study sample comprised 558 randomly selected Nigerian women residents in Surulere. An interview was conducted at the Gbaja and Randle Health Centers...",
      answer:
        "The participants and the content of the questionnaire are clearly introduced.",
    },
    {
      unit: "Unit 4",
      id: "u4-4",
      text: "Most of the women interviewed (71%) were 21-30 years old, while those 16-20 years and 31-35 years accounted for 11% and 12% respectively...",
      answer:
        "The women interviewed range from less than 16 years old to over 36 years old with different employment.",
    },
    {
      unit: "Unit 4",
      id: "u4-5",
      text: "The women's educational qualifications were assessed by grouping them into the following major categories: no formal schooling of any type...",
      answer:
        "The women's education background varied; more than half of them finished their primary school education.",
    },
    {
      unit: "Unit 4",
      id: "u4-6",
      text: "Table 1 shows that the estimated total monthly income per family was less than N 400 (1 $naira=USS1.30)$ for about 56% of the study sample...",
      answer:
        "Most women lived a poor life with a big family of several children.",
    },
    {
      unit: "Unit 4",
      id: "u4-7",
      text: "In the opinion of most of the mothers, breast-feeding should be practised for as long as 7 to 12 months, while a relatively small number...",
      answer:
        "The opinion of the duration of breast-feeding varied from mother to mother, but their opinion contradicted their actual practices.",
    },
    {
      unit: "Unit 4",
      id: "u4-8",
      text: "Table 5 summarizes the opinions of the women regarding the appropriate age for introduction of supplementary foods. Only 4% of the mothers believed...",
      answer:
        "There were different reasons for most women to introduce supplementary foods for their infants at different stages after birth.",
    },
    {
      unit: "Unit 4",
      id: "u4-9",
      text: "The preferred supplementary foods used by the mothers studied included imported powdered milk or milk-based products, various locally available...",
      answer:
        "Mothers use a variety of supplementary foods which are available.",
    },
    {
      unit: "Unit 4",
      id: "u4-10",
      text: "The wide gap between the women's expressed opinions about infant-feeding and what they actually practised is further underscored by the data in Table 8...",
      answer:
        "Although the women believed the benefits of breast-feeding, what they actually practiced contradicted their expressed opinions.",
    },
    {
      unit: "Unit 4",
      id: "u4-11",
      text: "Complex interactions between broad economic and sociocultural factors influence infant-feeding practices in the developing countries...",
      answer:
        "The result proved that the decline in breast-feeding practices was not due to women's lack of proper counseling about nutrition, but due to the socioeconomic pressure.",
    },
    {
      unit: "Unit 4",
      id: "u4-12",
      text: "Results of the present study are consistent with reports (Uyanga, 1980; Owie, 1980) of progressive decline in the prevalence and duration of breast-feeding...",
      answer:
        "Previous studies failed to take harsh urban economic pressure into account when they believed that the influence of the West and perception of urbanized women were responsible for the breast-feeding decline.",
    },
    {
      unit: "Unit 4",
      id: "u4-13",
      text: "For most Nigerians, urban existence is synonymous with extreme individual and community poverty. Implicit in this is a great pressure on mothers...",
      answer:
        "The critical issue is how to promote breast-feeding practices in the urban area in the developing world.",
    },
    {
      unit: "Unit 4",
      id: "u4-14",
      text: "Findings in the present study were consistent with the view that childhood malnutrition is more a result of objective conditions of people's lives...",
      answer:
        "The decline in breast-feeding won't be reversed if the poverty of urban women is not addressed properly.",
    },
    {
      unit: "Unit 4",
      id: "u4-15",
      text: "Perhaps more lasting benefits will be achieved by emphasizing the education of mothers on how to prepare and use hygienically acceptable supplementary foods...",
      answer:
        "Emphasis should be placed on teaching mothers how to use supplementary foods properly for their infants.",
    },

    // --- Unit 5 ---
    {
      unit: "Unit 5",
      id: "u5-1",
      text: "The public awareness of scientific fraud has increased remarkably since the late 1980s when a controversy made front-page news...",
      answer:
        "Investigations of fraud in medical research need the help of biostatisticians whose work could provide unique and reliable information.",
    },
    {
      unit: "Unit 5",
      id: "u5-2",
      text: "The ISCB is an international society for biostatisticians, which, in April 1998, had 442 members in 31 countries or regions on six continents...",
      answer:
        "A survey was conducted among the members of the ISCB via a questionnaire.",
    },
    {
      unit: "Unit 5",
      id: "u5-3",
      text: "The questionnaire was designed cooperatively by members of the ISCB Subcommittee on Fraud and contains 31 items divided into two sections...",
      answer:
        "The questionnaire contains questions about experience with and opinions on scientific fraud apart from basic information about age, sex, position, nationality, etc. It was pilot-tested and revised before the actual survey.",
    },
    {
      unit: "Unit 5",
      id: "u5-4",
      text: "In the questionnaire, fraud was defined as a deliberate attempt to mislead others in the design, conduct, analysis, or reporting of a study...",
      answer:
        "To ensure the validity and reliability of the responses, fraud was exactly defined in the questionnaire. A sign test and Spearman's rank correlation coefficient were also used.",
    },
    {
      unit: "Unit 5",
      id: "u5-5",
      text: "One hundred sixty-three members and three nonmembers completed questionnaires. We report here information from the 163 members who responded...",
      answer:
        "Thirty-seven percent of ISCB members gave responses to the questionnaire.",
    },
    {
      unit: "Unit 5",
      id: "u5-6",
      text: "Table 2 shows the distribution of the responders by age, sex, and type of employers. Nineteen members had governmental employment, 72 university...",
      answer:
        "The distribution of the responders by age, sex, and type of employers was described.",
    },
    {
      unit: "Unit 5",
      id: "u5-7",
      text: "Table 3 gives a summary of the main results. A clear majority (126 responders; 76%) considered career and power to be the main motive for fraud...",
      answer:
        "The survey revealed the responders' opinions on the motivations, the reasons and impacts of scientific fraud, and their experiences with it.",
    },
    {
      unit: "Unit 5",
      id: "u5-8",
      text: "The subjectively estimated prevalence of fraud in published reports was somewhat greater for epidemiological studies than for clinical trials...",
      answer:
        "The survey showed that the subjectively estimated prevalence of fraud in published reports was greater for epidemiological studies than for clinical trials.",
    },
    {
      unit: "Unit 5",
      id: "u5-9",
      text: "This survey of biostatisticians found that knowledge of fraudulent projects is surprisingly common. Although only 163 of the 442 members (37%) responded...",
      answer:
        "The survey demonstrated that most responders knew of fraudulent projects.",
    },
    {
      unit: "Unit 5",
      id: "u5-10",
      text: "The prevalence of persons knowing about fraudulent projects among biostatisticians in the current survey is greater than that among the members of the AAAS...",
      answer:
        "Compared with two similar surveys, more responders in this survey knew about fraudulent projects among biostatisticians.",
    },
    {
      unit: "Unit 5",
      id: "u5-11",
      text: "There are several explanations for the high proportion of responders who knew of the occurrence of fraud, other than the low (37%) response rate...",
      answer:
        "There are several reasons why high proportion of responders in the survey knew of the occurrence of fraud.",
    },
    {
      unit: "Unit 5",
      id: "u5-12",
      text: "Discussions of fraud have in the past often focused on clinical trials. Reasons for this may be that results of clinical trials have more direct medical consequences...",
      answer:
        "Different from earlier findings, the survey suggested that fraud might be more popular in epidemiological studies than in clinical trials.",
    },
    {
      unit: "Unit 5",
      id: "u5-13",
      text: "The impact of fraudulent research has been discussed previously (Garfield and Welljams-Dorof, 1990). It appears that the scientific community quickly recognizes...",
      answer:
        "It is necessary to establish some control systems for handling suspected medical fraud.",
    },
    {
      unit: "Unit 5",
      id: "u5-14",
      text: "If we were to do this survey again, we would use prepaid return envelopes. We had hoped that allowing replies through the World Wide Web could save the cost...",
      answer:
        "More measures should be taken in the future to improve similar surveys.",
    },
    {
      unit: "Unit 5",
      id: "u5-15",
      text: "We believe that it is important to change the general attitudes toward fraud in medical research. Improved education, emphasizing ethical standards...",
      answer:
        "It is important to change the general attitudes toward fraud and identify measures which could actually prevent fraud.",
    },
  ],
};
