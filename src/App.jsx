import React, { useState } from 'react';
import Navbar from './Components/Navbar.jsx'
import Cards from './Components/CardContainer.jsx'
import { BrowserRouter as Router, Route, Routes, useNavigate, createBrowserRouter ,RouterProvider } from 'react-router-dom';
import Charinfo from './Components/Charinfo.jsx';
import Footer from './Components/Footer.jsx';
import ScrollToTop from './Components/ScrollToTop';
import Home from './Components/Home.jsx';
import { alplha , allWeapon } from './data.js';






  
  const allEchoes =
  [
      {name:'Thundering Mephis',       cost:4,sonata:[0]}, //0     
      {name:'Inferno Rider',           cost:4,sonata:[4]}, //1
      {name:'Bell-Borne Geochelone', cost:4,sonata:[5,6]}, //2
      {name:'Tempest Mephis',          cost:4,sonata:[0]}, //3
      {name:'Crownless',               cost:4,sonata:[8]}, //4
      {name:'Feilian Beringal',        cost:4,sonata:[7]}, //5
      {name:'Impermanence Heron',      cost:4,sonata:[5]}, //6
      {name:'Jue',                     cost:4,sonata:[1]}, //7
      {name:'Lampylumen Myriad',       cost:4,sonata:[2]}, //8
      {name:'Mech Abomination',        cost:4,sonata:[3]}, //9
      {name:'Mourning Aix',            cost:4,sonata:[1]}, //10
      {name:'Dreamless',               cost:4,sonata:[8]}, //11
      {name:'Autopuppet Scout',      cost:3,sonata:[1,2]}, //12
      {name:'Chaserazor',            cost:3,sonata:[7,5]}, //13
      {name:'Chasm Guardian',        cost:3,sonata:[3,6]}, //14
      {name:'Cyan-Feathered Heron',  cost:3,sonata:[1,7]}, //15
      {name:'Flautist',              cost:3,sonata:[0,3]}, //16
      {name:'Geohide Saurian',       cost:3,sonata:[4,5]}, //17
      {name:'Glacio Dreadmane',      cost:3,sonata:[2,5]}, //18
      {name:'Havoc Dreadmane',       cost:3,sonata:[4,8]}, //19
      {name:'Hoochief',              cost:3,sonata:[7,6]}, //20
      {name:'Lightcrusher',            cost:3,sonata:[1]}, //21
      {name:'Lumiscale Construct',   cost:3,sonata:[0,2]}, //22
      {name:'Rocksteady Guardian',   cost:3,sonata:[1,6]}, //23
      {name:'Roseshroom',            cost:3,sonata:[2,8]}, //24
      {name:'Spearback',             cost:3,sonata:[5,3]}, //25
      {name:'Stonewall Bracer',      cost:3,sonata:[5,6]}, //26
      {name:'Tambourinist',          cost:3,sonata:[2,8]}, //27
      {name:'Violet-Feathered Heron',cost:3,sonata:[0,4]}, //28
      {name:'ALL1COST',cost:1,sonata:[0,1,2,3,4,5,6,7,8,9]}//29
  ]
  
  const allSonata={
      name:[
          'Void Thundering',     //0
          'Celestial Light',     //1
          'Freezing Frost',      //2
          'Lingering Tunes',     //3
          'Molten Rift',         //4
          'Moonlit Clouds',      //5
          'Rejuvenating Glow',   //6
          'Sierra Gale',         //7
          'Sun-sinking Eclipse', //8
          'AllSonanta'            //9
      ],
  
      twopc:[
          'Electro DMG +10%',    //0
          'Spectro DMG +10%',    //1
          'Glacio DMG +10%',     //2
          'ATK +10%',            //3
          'Fusion DMG +10%',     //4
          'Energy Regen +10%',   //5
          'Healing Bonus +10%',  //6
          'Aero DMG +10%',       //7
          'Havoc DMG +10%.',     //8
  
      ],
                  
      fivepc:[
          'Electro DMG +15% after releasing Heavy Attack or Resonance Skill. This effect stacks up to 2 times, each stack lasts 15s', //0
  
          'Spectro DMG +30% for 15s after releasing Intro Skill', //1
  
          'Glacio DMG +10% after releasing Basic Attack or Heavy Attack. This effect stacks up to 3 times, each stack lasts 15s', //2
  
          'While on the field, ATK increases by 5% every 1.5s. This effect stacks up to 4 stacks. Outro Skill DMG +60%', //3
  
          'Fusion DMG +30% for 15s after releasing Resonance Skill', //4
  
          'After using Outro Skill, increases the ATK of the next Resonator by 22.5% for 15s', //5
  
          'Increases the ATK of all party members by 15% for 30s upon healing allies', //6
  
          'Aero DMG +30% for 15s after releasing Intro Skill', //7
  
          'Havoc DMG +7.5% after releasing Basic Attack or Heavy Attack. This effect stacks up to 4 times, each stack lasts 15s', //8
  
      ]
  }   
    
  const charData=[
    {
      name:'changli',
      rarity :5,
      weapon:'sword',
      region:'HUANG LONG',//should be in caps
      hbd:"6 june", //cant find
      intro:`Eons of time on this vast land, all encapsulated in a humble game...
  I am fortunate to have you as my opponent.`, 
      element:'fusion',
     combatrole:['-','S','-',1], //some says 0 a a some say a a a .
     
      ascension:['Rage Tacet Core','Pavo Plum','Crude Ring','Basic Ring','Improved Ring','Tailored Ring'],
     
      skillprior:[3,2,1,0,4],//priority 0 basic, 1 skill, 2 libration ,3 forte circuit , 4 intro skill
  
      skillcost:['Inert Metallic Drip','Reactive Metallic Drip','Polarized Metallic Drip','Heterized Metallic Drip',"Sentinel's Dagger",'Crude Ring','Basic Ring','Improved Ring','Tailored Ring'],
      
      skilldes:[
          {name:"Blazing Enlightment", des:`Basic Attack
  Perform up to 4 consecutive attacks, dealing Fusion DMG.
  After releasing Ground Basic Attack Stage 4, Changli enters True Sight, lasting for 12s.
  Mid-air Attack
  Consume Stamina to perform up to 4 consecutive attacks in mid-air, dealing Fusion DMG.
  After releasing Mid-air Attack Stage 4, Changli enters True Sight, lasting for 12s.
  Heavy Attack
  Hold Basic Attack on the ground to consume Stamina to perform an upward strike, dealing Fusion DMG. Use Basic Attack within a certain time to release Mid-air Attack Stage 3.
  Mid-air Heavy Attack
  Shortly after holding Basic Attack in mid-air or using Basic Attack True Sight: Charge, use Basic Attack to consume Stamina to perform a Plunging Attack, dealing Fusion DMG. Use Basic Attack within a certain time to release Basic Attack Stage 3.
  
  Dodge Counter
  Use Basic Attack after a successful Dodge to attack the target, dealing Fusion DMG.`},      
          {name:'Tripartite Flames', des:`True Sight: Capture
  After releasing Resonance Skill, Changli rapidly attacks the enemy and enters True Sight, lasting for 12s. In the end, Changli releases a Plunging Attack, dealing Fusion DMG.
  True Sight: Capture has 2 initial attempts and can be used up to 2 times. The number of attempts is increased by 1 every 12s.
  Basic Attack: True Sight – Conquest
  When in True Sight, if Changli uses Ground Basic Attack, she releases True Sight: Conquest, rapidly approaching the enemy and dealing Fusion DMG, considered as Resonance Skill DMG. After releasing True Sight: Conquest, True Sight ends.
  Basic Attack: True Sight – Charge
  When in True Sight, if Changli jumps or uses Basic Attack in mid-air, she releases True Sight: Charge, dashing towards the enemy and dealing Fusion DMG, considered as Resonance Skill DMG. After releasing True Sight: Charge, True Sight ends.`},
          {name:"Radiance of Fealty", des:`Deal Fusion DMG to nearby targets obtaining 4 stacks of [Enflamement] and entering Fiery Feather.
  
  Fiery Feather
  When Changli releases Heavy Attack Flaming Sacrifice within 10s. her ATK is increased by 25% after which Fiery Feather ends.`},
          {name:'Flaming Vow' , des :`Heavy Attack : Flaming Sacrifice
  When releasing Heavy Attack Changli carries 4 stacks of [Enflamement], she consumes all stacks of [Enflamement] to release Flaming Sacrifice, dealing Fusion DMG,considered as Resonance Skill DMG.
  
  Enflamement
  Changli can hold up to 4 stacks of [Enflamement] Changli obtains 1 stack of [Enflamement] for every Basic Attack:TrueSight-Conquest on hit.
  Changli obtains 1 stack of [Enflamement]for every Basic Attack:TrueSight-Charge on hit
  Changli obtains 4 stacks of [Enflamement] for every Resonance Liberation Radiance of Fealty.`},
  
          {name:'Obedience of Rules', des:`Changli appears in mid-air, attacks the target, and enters True Sight, lasting for 12s.`},
          {name:"Strategy of Duality", des:`Changli's Outro Skill increases the switched-in Resonator's Fusion DMG by 20% and their Resonance Liberation DMG by 25%, lasting for 10s. Switching to another Resonator ends this effect.`},
          [{name:"Sweeping Force", des:`When Changli releases Heavy Attack Flaming Sacrifice or Resonance Liberation Radiance of Fealty, Changli's Fusion DMG Bonus increased by 20%, and Changli ignores 15% of the target's DEF when dealing damage.`},
              {name:"Secret Strategist", des:`When Changli releases Basic Attack True Sight-Conquest or Basic Attack: TrueSight-Charge for each stack of [Enflamement], Changli’s Fusion DMG is increased by 5%`}]  ,
              [{name:" Changli stat bonus 1", des:`Crit. Rate increased by 8%.` },
              {name:" Changli stat bonus 2", des:`ATK increased by 8%.` }]
      ],
          
      
      team:[['encore','verina','Quick Swap God'],['jinhsi','verina','Stack Passive MaxPower',],['chixia','baizhi','F2P Option']], //the best team is in the middle with index 1 and the last index is the team name 
      
      teamdes:[
          ["Changli can provide a Fusion DMG Bonus buff for Encore, and combined with Changli’s own Amazing damage output, this makes Changli the best teammate for Encore."],
          ["Jinhsi relies on teammates’ coordinated Attack to maximize the rate of stacking “Incandescence” in order to maximize the damage of enhanced skill,But, in this team, the stacking of “Incandescence” is balanced with Changli’s Liberation Bonus buff and her high damage output.Since both Changli and Jinhsi possess aerial attack skills, they work extreamly well with each other."],
          ["Changli’s Fusion DMG Bonus buff and Liberation DMG buff is extremely suitable for Chixia."]],//should be of the same order as of team 
          
      resonance:[["Hidden Thoughts"],["Pursuit of Desires"],["Celestial lncarnate"],["Polished Words"],["Sacrificed Gains"],["Realized Plans"]],
      
      resodes:[
      /*1*/["Resonance Skill Tripartite Flames and Heavy Attack Flaming Vow increases Changli's DMG dealt by 10% and resistance to interruption."],
      
      /*2*/["'[Enflamement] increases Changli's CRIT DMG by 25%, lasting for 8s."],
      
      /*3*/["Resonance Liberation Radiance of Fealty DMG is increased by 80%."],
      
      /*4*/["Intro Skill increases the ATK of all team members by 20%, lasting for 30s."],
      
      /*5*/["Heavy Attack Flaming Sacrifice's Multiplier is increased by 50% and its DMG dealt is increased by 50%."],
      
      /*6*/["Resonance Skill Tripartite Flames, Heavy Attack Flaming Vowa, Resonance Liberation Radiance of Fealty ignore an additional 40% of the target's DEF when dealing damage."]],
      
      resoprior:[6,5,2],//this shows the constellation priority great is the greater than symbol this means 2,4,1
      
      weapons:[33,24,22,23],//[1,4,2,3]
      
      weapnote:[
          {des:'Her signature wepaon , providing high crit values and base atk , obv the best for her',role:'Best in Slot'}, //1
          {des:'prioritizing lightning-fast rotations over raw output with the ability to transform entire units action priorities under the right circumstances', role:'F2P'}, //4
          {des:`High base ATK and a good passive for a dps character , what else can we ask for`, role:'5 star ALternative '}, //2
          {des:`the shorter time on field the better. Best for Hybrid characters executing their rotation fast and infrequently`, role:'F2P'}], //3
          
    
        echobest:[1,6,28,13], // best 4 cost and 3 cost
        echosonata:[[4],[5]],
        echosub:{
          sub:['CRIT RATE/CRIT DMG', 'ATK%', 'Resonance Skill DMG', 'ATK','Resonance Liberation DMG'],
          main:[['Atk%'],['Crit RATE','Crit DMG'],['Fusion DMG']]}, // 1   4   3 
  }
  
,  
  {
      name:'yinlin',
      rarity :5,
      weapon:'rectifier',
      region:'HUANG LONG',//should be in caps
      hbd:"17 Septemeber", 
      intro:"Name's Yinlin. As for what I do... Shhh, we don't talk about that in public.",    
      element:'electro',
      combatrole:['-','S','-',1], //some says 0 a a some say a a a .
     
      ascension:['Group Abomination Tacet Core','Coriolus','LF Whisperin Core','MF Whisperin Core','HF Whisperin Core','FF Whisperin Core'],
     
      skillprior:[3,2,1,0,4],//priority 0 basic, 1 skill, 2 libration ,3 forte circuit , 4 intro skill
  
      skillcost:['Waveworn Residue 210','Waveworn Residue 226','Waveworn Residue 235','Waveworn Residue 239','Monument Bell','Crude Ring','Basic Ring','Improved Ring','Tailored Ring'],
      
      skilldes:[
          {name:"Zapstring's Dance", des:`Basic Attack
  Yinlin controls the puppet ‘Zapstring’ to perform up to 4 attacks, dealing Electro DMG.
  
  Heavy Attack
  Yinlin consumes Stamina to control ‘Zapstring’, dealing Electro DMG.
  
  Mid-air Attack
  Yinlin consumes Stamina to control ‘Zapstring’ and perform a Mid-air Plunging Attack, dealing Electro DMG.
  
  Dodge Counter
  Use Basic Attack after a successful Dodge to attack the target, dealing Electro DMG.`},      
          {name:'Magnetic Roar', des:`Magnetic Roar   
  The puppet ‘Zapstring’ deals Electro DMG to the target, and puts Yinlin into the Execution Mode.  
     
  Execution Mode    
  Basic Attack and Dodge Counter will trigger 1 Electromagnetic     Blast when hitting a target.    
  Each stage of Basic Attack or Dodge Counter can only trigger 1     Electromagnetic Blast, up to 4 times.    
  
  Electromagnetic Blast
  Attack all targets marked with Resonance Circuit Sinner’s Mark, dealing Electro DMG.
  
  Lightning Execution
  Use Resonance Skill after casting Resonance Skill Magnetic Roar to cast Lightning Execution to attack the target, dealing Electro DMG.
  If Resonance Skill Lightning Execution is not activated in a while or this Character is switched, this Skill will be put on Cooldown.`},
          {name:"Thundering Wrath", des:`Command ‘Zapstring’ to call for thunder to fall upon a large range, dealing Electro DMG.`},
          {name:'Chameleon Cipher' , des :`Chameleon Cipher
  When Yinlin’s ‘Judgment Points’ is full, her Heavy Attack is replaced with Chameleon Cipher, which consumes all ‘Judgment Points’ to attack the target, dealing Electro DMG. When it hits a target marked with Sinner’s Mark, the Sinner’s Mark is replaced with Punishment Mark, lasting for 18s.
  
  Sinner’s Mark
  Normal Attack Zapstring’s Dance, Resonance Liberation Thundering Wrath, and Intro Skill Roaring Storm will apply Sinner’s Mark on hit.
  Sinner’s Mark is removed when Yinlin exits.
  
  ‘Punishment Mark’
  When a target marked with Punishment Mark is damaged, Judgement Strike will fall, dealing Electro DMG to all targets marked with Punishment Mark. This can be triggered up to once per second.
  
  Judgement Points
  Yinlin can hold up to 100 Judgement Points.
  When Normal Attack Zapstring Dance hits a target, it restores ‘Judgement Points’.
  When Resonance Skill Magnetic Roar hits a target, it restores ‘Judgement Points’.
  When Resonance Skill Electromagnetic Blast hits a target, it restores ‘Judgement Points’.
  When Resonance Skill Lightning Execution hits a target, it restores ‘Judgement Points’.
  When the Intro Skill hits a target, it restores ‘Judgement Points’.`},
          {name:'Raging Storm', des:`Command puppet 'Zapstring' to attack, dealing Electro DMG in a large range.`},
          {name:"Strategist", des:`The next character (or other characters on a nearby team that activates an Outro Skill) gains 20% Electro DMG Deepen and 25% Resonance Liberation DMG Deepen for 14s or until they are switched off field.`},
          [{name:"Deadly Focus", des:`The damage of Resonance Skill Lightning Execution is increased by 10% when hitting targets marked with 'Sinner's Mark', and Yinlin's ATK is increased by 10% for 4s when this is triggered.`},
          {name:"Pain Immersion", des:`After using Resonance Skill Magnetic Roar, Yinlin's Crit. Rate is increased by 15% for 5s.`}],
          [{name:"Yinlin stat bonus 1", des:`Crit. Rate increased by 8%.` },
          {name:"Yinlin stat bonus 2", des:`ATK increased by 12%.`}]
      ],
          
      
      team:[['jinhsi','verina','Stack Passive PowerBomb'],['calcharo','verina','Electro Overpowered',],['rover (havoc)','baizhi','F2P Option']], //the best team is in the middle with index 1 and the last index is the team name 
      
      teamdes:[
          ["Jinhsi relies on teammates’ coordinated Attack to maximize the rate of stacking “Incandescence” in order to maximize the damage of enhanced skill. Thus Yinlin can be a great partner"],
          ["Yinlin’s Outro Skill perfectly complements Calcharo providing Electro DMG bonus. During Resonance Liberation, Calcharo’s Liberation Damage and Basic Attack Damage are approximately in a 2:1 ratio. Yinlin provides Resonance Liberation Dmg Bonus and Electro Damage Bonus."],
          ["Havoc Rover offer great burst abilities from their Resonance Skills and Havoc Rover having having the option to fill field time with her/his Forte Umbra state. Brings the bursty Quick Swap potential Yinlin works so well with but also with the ability to fill downtime as needed while Yinlin and the team waits for cooldowns"]],//should be of the same order as of team 
          
      resonance:[["Abyssal Ascension"],["Chronofrost Repose"],["Celestial lncarnate"],["Benevolent Grace"],["Frostfire Illumination"],["Comes Spring when Chill Exhausts"]],
      
      resodes:[
      /*1*/["Resonance Skill Magnetic Roar and Lightning Execution deal 70% more damage."],
      
      /*2*/["Resonance Skill Electromagnetic Blast recovers an additional 5 'Judgement Point(s)' and 5 Resonance Energy on hit."],
      
      /*3*/["Forte Circuit Judgment Strike's DMG multiplier is increased by 55%."],
      
      /*4*/["When Forte Circuit Judgment Strike hits a target, the ATK of all team members is increased by 20% for 12s."],
      
      /*5*/["Resonance Liberation Thundering Wrath deals 100% extra damage to targets with Forte Circuit's Sinner's Mark or Punishment Mark."],
      
      /*6*/["In the first 30s after casting Resonance Liberation Thundering Wrath, when Yinlin's Basic Attack hits a target, Furious Thunder will be triggered, dealing Electro DMG equal to 419.59% of Yinlin's ATK. Every Basic Attack hit can trigger Furious Thunder 1 time, up to 4 times. This is considered Resonance Skill DMG."]],
      
      resoprior:[6,3,5],//this shows the constellation priority great is the greater than symbol this means 2,4,1
      
      weapons:[0,2,1,4],//[1,4,2,3]
      
      weapnote:[
          {des:'Her signature wepaon , providing high crit values and base atk , obv the best for her',role:'Best in Slot'}, //1
          {des:'A good alternative to Augment, offering an easy to maintain bonus ability granting ATK% after using an Intro skill and a good amount of ATK% as a main stat', role:'F2P'}, //4
          {des:`Offers high base ATK, ATK%, a good amount of Energy Regen to save at least 1 sub-stat on gear to be reallocated to better uses`, role:'ALternative'}, //2
          {des:` base CRIT RATE for excellent scaling and also an easily activatable and maintainable bonus ability granting ATK%`, role:'F2P'}], //3
          
    
        echoeslist:[0,2,3,6,9,14,16,17,22,25,26,28],//match the index of your echoes with the index in the allEchoes array
        echobest:[3,28,6,13,29], // best 4 cost and 3 cost
        echosonata:[[0],[5],[0,3]],
        echosub:{
          sub:['CRIT RATE/CRIT DMG', 'ATK%', 'Resonance Skill DMG', 'ATK'],
          main:[['Atk%'],['Crit RATE','Crit DMG'],['Energy Regen']]}, // 1   4   3 
  },
  {
      name:'jinhsi',
      rarity :5,
      weapon:'broadblade',
      region:'HUANG LONG',//should be in caps
      hbd:"6 March", 
      intro:"We a course yet to be accomplished. Rest assured, I'll lead the way.", 
      element:'spectro',
      combatrole:['S','-','-',0], //some says 0 a a some say a a a .
     
      ascension:['Elegy Tacet Core',"Loongs Pearl",'LF Howler Core','MF Howler Core','HF Howler Core','FF Howler Core'],
      
      skillprior:[3,2,1,0,4],//priority 0 basic, 1 skill, 2 libration ,3 forte circuit , 4 intro skill
  
      skillcost:['Waveworn Residue 210','Waveworn Residue 226','Waveworn Residue 235','Waveworn Residue 239',"Sentinel's Dagger",'LF Howler Core','MF Howler Core','HF Howler Core','FF Howler Core'],  
          
      skilldes:[{name:"Slash of Breaking Dawn", des:`Basic Attack
  Perform up to 4 consecutive strikes, dealing Spectro DMG.
  Heavy Attack
  Perform a charged attack by consuming Stamina, dealing Spectro DMG.
  
  Mid-Air Attack
  Perform a Plunging Attack while in mid-air by consuming Stamina, dealing Spectro DMG.
  
  Dodge Counter
  Use Basic Attack after a successful Dodge to counterattack, dealing Spectro DMG.`},
  
  {name:'Trailing Lights of Eons', des:`Dash forward and perform consecutive strikes that inflict Spectro DMG.
  
  Overflowing Radiance
  After Jinhsi uses Basic Attack 4 or, while not in Incarnation, Intro Skill Loong’s Halo, an alternative Resonance Skill Overflowing Radiance becomes available within 5s.
  Resonance Skill Overflowing Radiance inflicts Spectro DMG and sends Jinhsi into Incarnation.
  Can be cast in mid-air.`},
  
  {name:"Purge of Light", des:`Unleash the power of a heart’s wish to deal Spectro DMG.
  Can be cast in mid-air.`},
  
  {name:'Luminal Synthesis' , des :`Incarnation
  While in Incarnation:
  – Alternative Basic Attack “Incarnation: Basic Attack” becomes available. Perform up to 4 consecutive strikes, dealing Spectro DMG. The basic attack cycle of this will not be reset. Can be cast in mid-air.
  – Alternative Resonance Skill “Crescent Divinity” becomes available. Deal Spectro DMG. Can be cast in mid-air.
  – Alternative Heavy Attack “Incarnation: Heavy Attack” becomes available. Attack the target in mid-air at the cost of Stamina, dealing Spectro DMG.
  – Alternative Dodge “Incarnation: Dodge” becomes available while airborne. Can be cast multiple times at the cost of Stamina.
  – Alternative Dodge Counter “Incarnation: Dodge Counter” becomes available. Deal Spectro Damage.
  Can be cast in mid-air.
  
  Resonance Skill: Illuminous Epiphany
  After Stage 4 of Incarnation: Basic Attack, Incarnation terminates and Jinhsi gains Ordination Glow.
  Can be cast in mid-air.
  While Ordination Glow lasts:
  – Basic Attack is replaced with the Alternative Heavy Attack “Incarnation: Heavy Attack” when airborne. Attack the target in mid-air at the cost of Stamina, dealing Spectro DMG.
  Resonance Skill is replaced with Resonance Skill Illuminous Epiphany. Send out Solar Flare that detonates as Stella Glamour that deals Spectro Damage after a short delay. When Jinhsi has “Incandescence“, consume up to 40 Incandescence, each point of Incandescence grants an additional DMG multiplier percentage to the Star Glamour. Can be cast in mid-air.
  After casting Resonance Skill Illuminous Epiphany, Jinhsi gains Unison. This can be triggered once in 25s.
  
  Unison
  While Jinhsi has Unison, switching to other Characters will remove Jinhsi’s Unison to trigger Jinhsi’s Outro Skill and the incoming character’s Intro Skill. Unison will be consumed in priority in place of Concerto Energy when Concerto Energy is full.
  
  Incandescence
  Jinhsi can hold up to 50 Incandescence.
  When Jinhsi is on the team, all nearby characters on the team gain Eras in Unity. When characters with Eras in Unity deal Damage with an attribute, Jinhsi gains 1 Incandescence. Damage of the same attribute can provide up to 1 Incandescence every 3s.`},
  
  {name:"Loong's Halo", des:`Attack the target dealing Spectro DMG.`},
  
  {name:"Temporal Bender", des:`With the power homologous with the Sentinel Jinhsi reduces the Cooldown of Eras in Unity to 1s.This lasts for 20s.`},
  
  [{name:"Converged Flash", des:`Intro Skill Loong's Halo increases DMG Multiplier by 50%.`},
  
  {name:"Radiant Surge", des:`Jinhsi's Spectro DMG Bonus is increased by 20%.`}],
  
  [{name:"Jinhsi Stat Bonus 1", des:`Crit Rate – 8%` },
  {name:"Jinhsi Stat Bonus 2", des:`ATK% – 12%` } ]
  
  ],
      
  team:[['yinlin','verina','Electro Overpowered'],['changli','verina','Stack Passive MaxPower',],['rover (havoc)','baizhi','F2P Option']], 
  //the best team is in the middle with index 1 and the last index is the team name 
      
      teamdes:[
          ["When facing multiple targets, Yinlin is the best sub DPS for Jinhsi. Yinlin has AoE coordinated attack, and the cooldown of her coordinated attack is exactly 1 second"],
          ["Jinhsi relies on teammates’ coordinated Attack to maximize the rate of stacking “Incandescence” in order to maximize the damage of enhanced skill,But, in this team, the stacking of “Incandescence” is balanced with Changli’s Liberation Bonus buff and her high damage output.Since both Changli and Jinhsi possess aerial attack skills, they work extreamly well with each other."],
          ["Okish good F2P option with Yuanwu’s efficiency in stacking “Incandescence” through coordinated attacks is comparable to Mortefi’s"]],//should be of the same order as of team 
          
      resonance:[["Abyssal Ascension"],["Chronofrost Repose"],["Celestial lncarnate"],["Benevolent Grace"],["Frostfire Illumination"],["Comes Spring when Chill Exhausts"]],
      
      resodes:[
      /*1*/[`When Jinhsi casts Basic Attack 'Incarnation: Basic Attack' or Resonance Skill 'Crescent Divinity'; gain-one stack of Herald of Revival which stacks up to 4 times and last for 6s.When casting Resonance Skill "Illuminous Epiphany", Jinhsi consumes all stacks of Herald of Revival. Each stack increases the
      DMG of Resonance Skill "Illuminous Epiphany" by 20%.`],
      
      /*2*/["Jinhsi recovers 50 Incandescence while staying out of combat for more than 4s.This effect can only be triggered every 4s."],
      
      /*3*/["Gain 12 Incandescence and a stack of Immortal's Descendancy after casting Intro Skill Loong's Halo. Every stack of Immortal's Descendancy increases ATK by 25% for up to 2 stacks, lasting for 20s."],
      
      /*4*/["When casting Resonance Liberation Purge of Light or Resonance Skill Illuminous Epiphany all nearby Characters in the team gain DMG Bonus for all attributes by 20% for 20s."],
      
      /*5*/["The DMG Multiplier of Resonance Liberation Purge of Evilis increased by 120%."],
      
      /*6*/["DMG Multiplier percentage for Resonance Skill llluminous Epiphany is increased by 45%.The Multiplier increase brought by Incandescence is additionally increased by 45%."]],
      
      resoprior:[6,3,5],//this shows the constellation priority great is the greater than symbol this means 2,4,1
      
      weapons:[19,17,15,14],//[1,4,2,3]
      
      weapnote:[
          {des:'Her signature wepaon , providing high crit values and base atk, obviously the best', role:'Best In Slot'}, //1
          {des:'you dont need this, u need jesus', role:'F2P'}, //4
          {des:`A damage-focused Broadblade which Offers a main stat of CRIT DMG%, 12% permanent generic DMG% and up to 48% increased Heavy ATK DMG% after using 1/2 skills and or a Resonance Liberation.`, role:'Good Alternative'}, //2
          {des:`Another 5 star option offering high base ATK and good passive`, role:'Viable Option'}], //3
          
      
  
        echobest:[7,9,15], // best 4 cost and 3 cost
        echosonata:[[1],[1,3]],
        echosub:{
          sub:['Energy Regen','CRIT RATE/CRIT DMG', 'ATK%', 'Resonance Skill DMG', 'ATK', 'Resonance Liberation DMG'],
          main:[['Atk%'],['Crit RATE','Crit DMG'],['Spectro DMG ','ATK% ']]}, // 1   4   3 
  },
  {
  
      name:'calcharo',
      rarity :5,
      weapon:'broadblade',
      region:'UNKNOWN',//should be in caps
      hbd:'8 July',
      intro:"They'll make an offer we like. I'll make sure of it.",
      element:'electro'  ,
      combatrole:['S' , '-' ,'-' , 0], //1st one is the dps then sub dps then support and at end it shows the index of best userole of that character among all role
      ascension:['Thundering Tacet Core','Iris','Crude Ring','Basic Ring','Improved Ring','Tailored Ring'],
      skillprior:[3,2,1,4,0],//priority 0 basic, 1 skill, 2 libration ,3 forte circuit , 4 intro skill
  
      skillcost:['Waveworn Residue 210','Waveworn Residue 226','Waveworn Residue 235','Waveworn Residue 239','Monument Bell','Crude Ring',"Basic Ring","Improved Ring","Tailored Ring"],
      skilldes:[
          {name:'Gnawing Fangs', des:`Basic Attack
  Calcharo performs up to 4 consecutive attacks, dealing Electro DMG.
  
  Heavy Attack
  Consumes Stamina to attack the target, dealing Electro DMG.
  
  Mid-air Attack
  Consumes Stamina to perform a Mid-Air Plunging Attack, dealing Electro DMG.
  
  Dodge Counter
  Use Basic Attack after a successful Dodge to attack the target, dealing Electro DMG.`},
          {name:'Extermination Order', des:`Calcharo performs up to 3 consecutive attacks, dealing Electro DMG.
  
  If Calcharo is switched off field, or if Resonance Skill Extermination Order is not performed again in a while, this skill will enter Cooldown.
  
  Resonance Skill Extermination Order does not interrupt Calcharo’s Basic Attack combo.`},
          {name:'Phantom Etching', des:`Calcharo attacks the target, dealing Electro DMG and enters Deathblade Gear state. After Resonance Liberation Deathblade Gear state ends, Calcharo’s next Intro Skill is replaced with Intro Skill ‘Necessary Means’, which deals Electro DMG, considered as Intro Skill damage.
  
  Deathblade Gear
  -Basic Attack is replaced with Basic Attack Hounds Roar.
  -Dodge Counter deals increased damage, considered as Resonance Liberation damage.
  
  Hounds Roar
  Calcharo performs up to 5 consecutive attacks, dealing Electro DMG, considered as Basic Attack Damage.`},
          {name:'Hunting Mission' , des :`Heavy Attack: ‘Mercy’
  When Calcharo has 3 ‘Cruelty’, his Heavy Attack is replaced with Heavy Attack ‘Mercy’.
  When casting Heavy Attack ‘Mercy’, Calcharo consumes 3 ‘Cruelty’ to deal Electro DMG, considered as Heavy Attack damage, and recovers Resonance Energy and Concerto Energy.
  
  ‘Cruelty’
  Calcharo can hold up to 3 ‘Cruelty’.
  Under Resonance Liberation Deathblade Gear state, ‘Cruelty’ cannot be acquired.
  When Resonance Skill Extermination Order hits the target, gain 1 ‘Cruelty’.
  
  Heavy Attack: ‘Death Messenger’
  When Calcharo has 5 ‘Killing Intent’, his Basic Attack is replaced with Heavy Attack ‘Death Messenger’.
  When casting Heavy Attack ‘Death Messenger’, Calcharo consumes 5 ‘Killing Intent’ to deal Electro DMG, considered as Resonance Liberation damage, and recovers Resonance Energy and Concerto Energy.
  
  ‘Killing Intent’
  Under Resonance Liberation Deathblade Gear state, Calcharo’s Forte Gauge is replaced with ‘Killing Intent’, stacking up to 5.
  When Basic Attack Hounds Roar hits the target, Calcharo gains 1 ‘Killing Intent’.`},
          {name:'Wanted Outlaw', des:`Attack the target, dealing Electro DMG.`},

          {name:"Shadowy Raid", des:`Calcharo summons Phantom to support the on-field Resonator, clearing the targets in front with a slash. The Phantom's attack deals Electro DMG equal to 195.98%+391.96% of Calcharo's ATK.`},
          [{name:"Revenant Rush", des:`When Heavy Attack 'Death Messenger' hits the target, the damage taken by Calcharo is reduced by 15% for 5s.`},
          {name:"Bloodshed Awaken", des:`When casting Heavy Attack 'Mercy', Calcharo's Resonance Liberation DMG Bonus is increased by 10% for 15s.`}],
          [{name:" calcharo stat bonus 1", des:`Crit. DMG increased by 16%.`},
          {name:" calcharo stat bonus 2", des:`ATK increased by 12%.`}]
      ],
      team:[['verina','mortefi',' Secondary Option'],['yinlin','verina','Max team Dmg'],['yangyang','baizhi','F2P comp']], //the best team is in the middle with index 1 and the last index is the team name 
  
      teamdes:[[' second best team , calcharo carries with mortefi as sub dps'],['Calcharo and Yinlin have excellent synergy together, being one of the best team in the whole game, Yinlin as sub dps and verina as the best support in the game'],['okish team could do some mid damage']],//should be of the same order as of team 
  
      resonance:[["Covert Negotiation"],["Zero-Sum Game"],["Iron Fist Diplomacy"],["Dark Alliance"],["Unconventional Compact"],["The Ultimatum"]],
  
      resodes:[["When Resonance Skill Extermination Order hits a target, it additionally recovers 10 Resonance Energy. This can be triggered once every 20s."],
      ['After Calcharo casts Intro Skill Wanted Criminal or Intro Skill "Necessary Means", his Resonance Skill DMG Bonus is increased by 30% for 15s.'],
      ["During the Resonance Liberation Deathblade Gear state, Calcharo's Electro DMG Bonus is increased by 25%."],
      ["After casting Outro Skill Shadowy Raid, Electro DMG Bonus of all team members is increased by 20% for 30s.."],
      ['Intro Skill Wanted Criminal and Intro Skill "Necessary Means" deal 50% more damage.'],
      ["When casting Resonance Liberation "+'"Death Messenger"'+", Calcharo will summon 2 Phantoms to perform Coordinated Attacks. Each Phantom deals Electro DMG equal to 100% of Calcharo's ATK, which is considered Resonance Liberation damage."]],
      resoprior:[6,4,3],//this shows the constellation priority great is the greater than symbol this means 2,4,1
      weapons:[15,17,14,16],// match the index of your weapon with the index in the allWeapon array in the order of weapon should be [1,4,2,3]
      weapnote:[{des:'The best avialable option rn ,Offers a huge main stat of CRIT DMG%,12% permanent generic DMG%  which calcharo can use',role:'best in slot'},{des:'F2P breathing for their life', role:'F2p'},{des:' ,Offers high base ATK, ATK%, a good amount of Energy Regen', role:'Great option'},{des:'ALternative', role:'medicore option'}],
      echobest:[3,9,14,28], 
      echosonata:[[0],[3],[0,3]],
      echosub:{
        sub:['CRIT RATE/CRIT DMG', 'ATK%', 'Resonance Liberation DMG', 'Basic ATK DMG','ATK'],
        main:[['Atk%'],['Crit RATE','Crit DMG'],['Electro DMG']]} 
  },
      
  {
      name:'jiyan',
      rarity :5,
      weapon:'broadblade',
      region:'HUANG LONG',//should be in caps
      hbd:'14 December',
      intro:"I have never regretted to brave the long night",
      element:'aero'  ,
      combatrole:['S' , '-' ,'-' , 0], //1st one is the dps then sub dps then support and at end it shows the index of best userole of that character among all role
  
      ascension:['Roaring Rock Fist','Pecok Flower','LF Howler Core','MF Howler Core','HF Howler Core','FF Howler Core'],
  
      skillprior:[2,3,1,4,0],//priority 0 basic, 1 skill, 2 libration ,3 forte circuit , 4 intro skill
  
      skillcost:['Waveworn Residue 210','Waveworn Residue 226','Waveworn Residue 235','Waveworn Residue 239','Monument Bell','LF Howler Core','MF Howler Core','HF Howler Core','FF Howler Core'],
  
      skilldes:[{name:'Lone Lance', des:`Basic Attack
  Perform up to 5 consecutive attacks, dealing Aero DMG.
  
  Heavy Attack
  Consume Stamina to perform a thrust attack, dealing Aero DMG.
  
  Heavy Attack: Windborne Strike
  Hold the Basic Attack during Heavy Attack to cast Windborne Strike after the Heavy Attack ends, dealing Aero DMG.
  
  Heavy Attack: Abyssal Slash
  Release the Basic Attack during the Heavy Attack to cast Abyssal Slash after the Heavy Attack ends, dealing Aero DMG.
  
  Mid-air Attack
  Consume Stamina to perform a Mid-Air Plunging Attack, dealing Aero DMG. After the Plunging Attack, use Basic Attack to perform a following attack, dealing Aero DMG.
  
  Mid-air Attack: Banner of Triumph
  After casting the Heavy Attack Windborne Strike or the Resonance Skill Windqueller in the air, Jiyan can perform an aerial attack, dealing Aero DMG.
  
  Dodge Counter
  Use a Basic Attack after a successful Dodge to attack the target with, dealing Aero DMG.`},
          {name:'Windqueller', des:`Dash forward a certain distance, dealing Aero DMG. Can be cast in the air.`},
          {name:'Emerald Storm: Prelude', des:`After releasing Emerald Storm: Prelude, Jiyan enters Qingloong Mode.
          Qingloong Mode
          Jiyan has increased Anti-interruption; Basic Attack, Heavy Attack and Dodge Counter are replaced with Heavy Attack Lance of Qingloong.
          Heavy Attack: Lance of Qingloong
          Perform up to 3 continuous attacks, dealing Aero DMG, considered as Heavy Attack damage.`},
          {name:'Qingloong at War' , des :`When casting Resonance Skill Windqueller, if Jiyan has 30 or more "Resolve", he consumes 30 "Resolve" to increase the damage of this Resonance Skill Windqueller by 20%. When Jiyan is in Qingloong Mode, DMG of Resonance Skill Windqueller is increased by 20% and no longer consumes "Resolve".
          Resonance Liberation: Emerald Storm: Finale
          When casting Resonance Liberation Emerald Storm: Prelude, if Jiyan has 30 "Resolve" or more, he will consume 30 "Resolve" to cast Emerald Storm: Finale, dealing Aero DMG, considered as Heavy Attack damage. Emerald Storm: Finale can be cast in mid-air at low altitude.
          Resolve
          Jiyan can hold up to 60 Resolve. Jiyan gains "Resolve" when his Normal Attack Lone Lance hits the target. Jiyan gains "Resolve" when the Intro Skill Tactical Strike hits the target. If Jiyan does not hit a target within 15 seconds, his "Resolve" will gradually decrease.`},
          {name:'Tactical Strike', des:`Jiyan stabs the target from the air, dealing Aero DMG.`},
          {name:"Discipline", des:`When the next Character's (or other Characters on a nearby team that activates an Outro Skill) Heavy Attack hits the target, Jiyan will summon Qingloong to launch a Coordinated Attack, dealing Aero DMG equal to 313.40% of Jiyan's ATK. This attack lasts for 8s, and can be triggered once every 1s, up to 2 times.`},
         
         [{name:"Tempest Taming", des:`When attacks hit a target, Jiyan's Crit. DMG is increased by 12% for 8s.`},
          {name:"Heavenly Balance", des:`After casting the Intro Skill Tactical Strike, Jiyan's ATK is increased by 10% for 15s.`}],
         [ {name:" jiyan stat bonus 1", des:`Aero DMG Bonus increased by 12%.` },
          {name:" jiyan stat bonus 2", des:`ATK increased by 12%.` }]
      
      ],
  
      team:[['verina','aalto',' Budget hypercarry'],['mortefi','verina','Jiyan Hypercarry'],['yangyang','baizhi','F2P comp']], //the best team is in the middle with index 1 and the last index is the team name 
      teamdes:[['Aalto provides Aero DMG Deepen, making Aalto a good alternative to Morfeti'],['Morfeti’s Outro Skill provides Heavy Attack DMG Deepen, making Morfeti the best teammate for Jiyan,Additionally, Morfeti has off-field coordinated attacks, offering substantial output compared to other Sub DPS options'],['yangyang with some aero and energry support and baizhi for healing']],//should be of the same order as of team
  
      resonance:[["Benevolence"],["Versatility"],["Spectation"],["Prudence"],["Resolution"],["Fortitude"]],
  
      resodes:[["Resonance Skill Windqueller can be used 1 more time. When casting Resonance Skill Windqueller, the 'Resolve' cost is decreased by 15."],
      ['After casting Intro Skill Tactical Strike, Jiyan gains 30 "Resolve" and his ATK is increased by 28% for 15s. This can be triggered once every 15s.'],
      ["When casting Resonance Skill Windqueller, Resonance Liberation Emerald Storm: Prelude, Resonance Skill Emerald Storm: Finale or Intro Skill Tactical Strike, Jiyan's Crit. Rate is increased by 16% and Crit. DMG is increased by 32% for 8s."],
      ["When casting Resonance Liberation Emerald Storm: Prelude or Resonance Liberation Emerald Storm: Finale, the Heavy Attack DMG Bonus of all team members is increased by 25% for 30s."],
      ["The DMG multiplier of Outro Skill Discipline is increased by 120%. When Jiyan's, attacks hit a target, his ATK is increased by 3% for 8s, stacking up to 15 times; this effect is immediately maxed after he casts Intro Skill Tactical Strike."],
      ['Every time Heavy Attack, Intro Skill Tactical Strike or Resonance Skill Windqueller is used, Jiyan gains 1 stack(s) of "Momentum", stacking up to 2 times. Resonance Liberation Emerald Storm: Finale will consume all "Momentum", and each stack consumed increases the DMG multiplier of Resonance Liberation Emerald Storm: Finale by 120%.']],
      resoprior:[6,5,3],//this shows the constellation priority great is the greater than symbol this means 2,4,1
      weapons:[15,17,14,16],// match the index of your weapon with the index in the allWeapon array in the order of weapon should be [1,4,2,3]
      weapnote:[{des:"Jiyan's signature weapon. Offers main stat CRIT DMG, 12% permanent generic DMG and up to 48% increased Heavy ATK DMG% after using 1/2 skills and or a Resonance Liberation.",role:'best in slot'},{des:' grants a stacking ATK% buff after using your Resonance Skill , okish option', role:'free to play'},{des:'A great option ,Offers high base ATK, ATK%, a good amount of Energy Regen to save at least 1 sub-stat on gear to be reallocated to better uses and a stackable Resonance Liberation ATK DMG% bonus that ramps up as you use Resonance Skills.', role:'second best in slot'},{des:'Strongest 4 star Broadsword option, granting main stat CRIT RATE and an incredibly easy to access bonus ability which grants a stacking ATK% buff', role:'okay medicore weapon'}],
      
        echobest:[7,9,15,5], // best 4 cost and 3 cost
        echosonata:[[7],[7,3]],
        echosub:{
          sub:['CRIT RATE/CRIT DMG', 'ATK%', 'Heavy ATK DMG', 'ATK'],
          main:[['Atk%'],['Crit RATE','Crit DMG'],['Aero Dmg']]}, // 1   4   3 
      
  },
  {
      name:'encore',
      rarity :5,
      weapon:'rectifier',
      region:'BLACK SHORES',//should be in caps
      hbd:'21 March',
      intro:"A long, long time ago... Cosmos told Encore about a fun spot! Come on! Let's go check it out!",
      element:'fusion'  ,
      combatrole:['S' , 'B' ,'-' , 0], //1st one is the dps then sub dps then support and at end it shows the index of best userole of that character among all role
      ascension:['Rage Tacet Core','Pecok Flower','LF Whisperin Core','MF Whisperin Core','HF Whisperin Core','FF Whisperin Core'],
      skillprior:[1,3,2,4,0],//priority 0 basic, 1 skill, 2 libration ,3 forte circuit , 4 intro skill
  
      skillcost:['Lento Helix','Adagio Helix','Andante Helix','Presto Helix','Unending Destruction','LF Whisperin Core','MF Whisperin Core','HF Whisperin Core','FF Whisperin Core'],
  
      skilldes:[{name:'Wooly Attack', des:`Basic Attack
      Encore performs up to 4 consecutive attacks, dealing Fusion DMG.
      
      Basic Attack: Wooly Strike
      After Basic Attack 4, press the Basic Attack button to attack the target, dealing Fusion DMG.
      
      Heavy Attack
      Encore consumes Stamina to attack the target, dealing Fusion DMG.
      
      Mid-air Attack
      Encore consumes Stamina to perform a Mid-Air Plunging Attack, dealing Fusion DMG.
      
      Dodge Counter
      Use Basic Attack after a successful Dodge to attack the target, dealing Fusion DMG.`},
          {name:'Flaming Woolies', des:`Flaming Woolies
          Encore summons Cloudy and Cosmos to attack with burning rays, dealing Fusion DMG.
          
          Energetic Welcome
          After casting Flaming Woolies, use Resonance Skill to perform Energetic Welcome, dealing Fusion DMG.`},
          {name:'Cosmos Rave', des:`As Encore loses control, Cosmos breaks free and wreaks havoc on its surroundings.
          
          Basic Attack: Cosmos: Frolicking
          During Cosmos Rave, the Basic Attack is replaced with Cosmos: Frolicking, which performs up to 4 consecutive attacks, dealing Fusion DMG, considered as Basic Attack damage.
          
          Cosmos: Heavy Attack
          During Cosmos Rave, the Heavy Attack is replaced with Cosmos: Heavy Attack, consuming Stamina to attack the target, dealing Fusion DMG, considered as Heavy Attack damage.
          
          Resonance Skill: Cosmos: Rampage
          During Cosmos Rave, Flaming Woolies is replaced with Cosmos: Rampage, dealing Fusion DMG, considered as Resonance Skill damage.
          
          Cosmos: Dodge Counter
          During Cosmos Rave, use Basic Attack after a successful Dodge to attack the target, dealing Fusion DMG, considered as Basic Attack damage.`},
          {name:'Black & White Woolies' , des :`Resonance Liberation: Cloudy Frenzy
  When Encore’s ‘Dissonance’ is full, after casting a Heavy Attack, Encore will consume all ‘Dissonance’ to enter the Dissonance state, reducing damage taken by 70%. Switching Characters does not interrupt ‘Dissonance’.
  After the Dissonance state ends, Encore will cast Cloudy Frenzy, dealing Fusion DMG, considered as Resonance Liberation damage.
  
  Resonance Liberation: Cosmos Rupture
  During Cosmos Rampage, when casting Heavy Attack, if ‘Dissonance’ is full, Encore will consume all ‘Dissonance’ to enter Cosmos’ Dissonance state, reducing damage taken by 70%. Switching Characters does not interrupt ‘Dissonance’.
  After Cosmos’ Dissonance state ends, Encore will cast Cosmos Rupture, dealing Fusion DMG, considered as Resonance Liberation damage.
  
  Dissonance
  Encore can hold up to 100 ‘Dissonance’.
  When Normal Attack Wooly Attack hits the target, Encore restores ‘Dissonance’.
  When Resonance Skill Flaming Woolies hits the target, Encore restores ‘Dissonance’.
  When Resonance Skill Energetic Welcome hits the target, Encore restores ‘Dissonance’.
  When Intro Skill Woolies Helpers hits the target, Encore restores ‘Dissonance’.
  During the duration of Resonance Liberation Cosmos Rave, hitting targets will restore ‘Dissonance’ to Encore.`},
          {name:`Woolies Can Help!`, des:`Encore pounces at the enemies with Cosmos, dealing Fusion DMG.`},
          {name:"Thermal Field", des:`Encore generates a Thermal Field centered around skill target, with a radius of 3m. Targets inside the Thermal Field are continuously burned, suffering Fusion DMG equal to 176.76% of Encore's ATK every 1.5s for 6s.`},
         [ {name:"Woolies Cheer Dance", des:`When Resonance Skill Flaming Woolies or Resonance Skill Cosmos - Rampage is cast, Encore's Fusion DMG Bonus is increased by 10% for 10s.`},
          {name:"Angry Cosmos", des:`During the Resonance Liberation Cosmos Rave, when Encore's HP is above 70%, DMG dealt is increased by 10%.`}],
           [ {name:" encore stat bonus 1", des:`Fusion DMG Bonus increased by 12%.` },
          {name:" encore stat bonus 2", des:`ATK increased by 12%.` }]
      ],
  
  
      team:[['sanhua','baizhi',' Secondary Option'],['sanhua','verina','Quick Swap']], //the best team is in the middle with index 1 and the last index is the team name 
      
      teamdes:[[' Secondary option, sanhua as a sub dps and baizhi for healing'],["Encore’s main damage type is Basic Attack. Sanhua’s Outro Skill can provide Basic Attack DMG bonus, making her the best teammate for Encore, with verina as the best supporting option"]],//should be of the same order as of team
  
      resonance:[["Wooly's Fairy Tale"],["Sheep-counting Lullaby"],["Fog? The Black Shores!"],["Adventure? Let’s go!"],["Hero Takes the Stage!"],["Woolies Save the World!"]],
  
      resodes:[["When Basic Attack hits a target, Encore's Fusion DMG Bonus is increased by 3%, stacking up to 4 times for 6s."],
      ['Encore additionally restores 10 Resonance Energy when casting Basic Attack Woolies Attack or Resonance Skill Energetic Welcome. This can be triggered once every 10s.'],
      ["The DMG multiplier of Resonance Liberation Cloudy: Frenzy and Resonance Liberation Cosmos: Rupture is increased by 40%."],
      ["Resonance Liberation Cosmos: Rupture increases the Fusion DMG Bonus of all team members by 20% for 30s."],
      ["Resonance Skill DMG Bonus is increased by 35%."],
      ["During Resonance Liberation Cosmos Rave, Encore gains 1 stack(s) of 'Lost Lamb' every time she deals damage, each stack increasing her ATK by 5% for 10s, stacking up to 5 time(s)."]],
  
      resoprior:[6,4],//this shows the constellation priority great is the greater than symbol this means 2,4,1
  
      weapons:[0,2,1,4],// match the index of your weapon with the index in the allWeapon array in the order of weapon should be [1,4,2,3]
      weapnote:[{des:'stands far above all other options currently in the game for Rectifier damage dealers,CRIT RATE,ATK% bonus,dmage boost...why look anywhere else',role:'best in slot'},{des:'last hope for f2p', role:'free to play'},{des:'Offers high base ATK, ATK%, a good amount of Energy Regen', role:'Good One'},{des:' offering base CRIT RATE for excellent scaling but also an easily activatable and maintainable bonus ability granting ATK%', role:'Best 4star weapon'}],
      
        echobest:[1,9,19,14], // best 4 cost and 3 cost
        echosonata:[[4],[3],[4,3]],
        echosub:{
          sub:['CRIT Rate/CRIT DMG ',' ATK%',' Basic Attack DMG % ',' ATK ',' Resonance Skill DMG % ',' Resonance Liberation DMG %'],
          main:[['Atk%'],['Crit RATE','Crit DMG'],['Fusion DMG']]}, // 1   4   3 
      
  }   ,  
  {
      name:'jianxin',
      rarity :5,
      weapon:'gauntlets',
      region:'HUANG LONG',//should be in caps
      hbd:'6 April',
      intro:"Release the wants, and the mind quiets. Cleanse the thoughts, and the soul clears.",
      element:'aero',
      combatrole:['A','A','A',1], //some says 0 a a some say a a a .
     
      ascension:['Rage Tacet Core','Pecok Flower','LF Whisperin Core','MF Whisperin Core','HF Whisperin Core','FF Whisperin Core'],
     
      skillprior:[2,3,1,4,0],//priority 0 basic, 1 skill, 2 libration ,3 forte circuit , 4 intro skill
  
      skillcost:['Cadence Seed','Cadence Bud','Cadence Leaf','Cadence Blossom','Unending Destruction','LF Whisperin Core','MF Whisperin Core','HF Whisperin Core','FF Whisperin Core'],
      
      skilldes:[{name:'Fengyiquan', des:`Basic Attack
  Jianxin performs up to 4 consecutive attacks, dealing Aero DMG.
  
  Heavy Attack
  Jianxin consumes Stamina to attack the target, dealing Aero DMG.
  
  Mid-air Attack
  Jianxin consumes Stamina to plunge and unleash a powerful kick, dealing Aero DMG.
  
  Dodge Counter
  Use Basic Attack after a successful Dodge to attack the target, dealing Aero DMG.`},
          {name:'Calming Air', des:`Chi Counter
  When Jianxin is attacked in the Parry Stance, she does not take damage and immediately performs Chi Counter, dealing Aero DMG.
  
  Chi Parry
  Release the Resonance Skill button during Parry Stance to interrupt Parry Stance and perform Chi Parry, dealing Aero DMG.
  
  Hold Resonance Skill to enter Parry Stance.`},
          {name:'Purification Force Field', des:`Creates a strong wind field, continuously pulling targets within the wind field to the center and causing Aero damage. When the wind field disappears, it will cause Aero damage to all targets within the range again.`},
          {name:'Primordial Chi Spiral' , des :`Heavy Attack: Primordial Chi Spiral
  When ‘Chi’ reaches max stacks, hold Heavy Attack to cast Primordial Chi Spiral and start Zhoutian Progress.
  
  Zhoutian Progress
  Jianxin’s anti-interruption is increased, and her the damage taken is reduced by 50%:
  Jianxin continuously consumes ‘Chi’ and casts Chi Strike to attack targets nearby, dealing Aero DMG.
  As Zhoutian Progress accumulates, Jianxin reaches different Zhoutian and gain effects accordingly.
  Before Minor Zhoutian: Gain Zhoutian Progress 1 shield. When Zhoutian Progress is interrupted, cast Pushing Punch to attack the target, dealing Aero DMG.
  Minor Zhoutian: Gain Zhoutian Progress 2 shield and cast Shock to attack the target, dealing Aero DMG. When Zhoutian Progress is interrupted, cast Yielding Pull to attack the target, dealing Aero DMG.
  Major Zhoutian: Inner: Gain Zhoutian Progress 3 shield and cast Shock to attack the target, dealing Aero DMG. When Zhoutian Progress is interrupted, cast Yielding Pull to attack the target, dealing Aero DMG.
  Major Zhoutian: Outer: Gain Zhoutian Progress 3 shield and cast Shock to attack the target, dealing Aero DMG.
  When you release Basic Attack button, interrupt Zhoutian Progress and lose all ‘Chi’;
  When all ‘Chi’ is consumed, end Zhoutian Progress.
  When Zhoutian Progress ends, regain a shield according to the Zhoutian Progress you reached;
  As the shield provided by Heavy Attack: Primordial Chi Spiral persists, restore HP for the on-field character once every 6s.
  
  Chi
  Jianxin can hold up to 120 Chi.
  Chi is obtained when a Normal Attack Fengyiquan hits the target.
  Chi is obtained when the Resonance Skill Calming Air is cast.
  Chi is obtained when the Resonance Skill Chi Counter or Resonance Skill Chi Parry hits the target.
  Chi is obtained when the Intro Skill Essence of Tao hits the target.`},
          {name:'Essence of Tao', des:`Pull in targets within the range, dealing Aero DMG.`},
          {name:"Transcendence", des:`The next character (or other characters on a nearby team that activates an Outro Skill) gains 38% Resonance Liberation DMG Deepen for 14s or until they are switched off field.`},
          [{name:"Reflection", des:`The Shield obtained with Heavy Attack Primordial Chi Spiral is increased by 20%.`},
          {name:"Formless Release", des:`Damage of Resonance Liberation Purification Force Field is increased by 20%.`}]  ,
          [{name:" jianxin stat bonus 1", des:`Crit. Rate increased by 8%.` },
          {name:" jianxin stat bonus 2", des:`ATK increased by 12%.` }]
      ],
      
      team:[['calcharo','baizhi',' Calcharo carrying'],['calcharo','verina','Best Team',],['calcharo','yinlin','Offensive']], //the best team is in the middle with index 1 and the last index is the team name 
      
      teamdes:[['Secondary option ,baizhi for healing'],["Jianxin’s Outro Skill provides a 38% Resonance Liberation DMG bonus for calcharo and also shield for sustain"],['Dps oriented team with less sustain as jianxin is the only shielder in this team- will req skill']],//should be of the same order as of team 
      
      resonance:[["Verdant Branchlet"],["Tao Seeker's Journey"],["Principles of Wuwei"],["Multitide Reflection"],["Mirroring Introspection"],["Truth from Within"]],
      
      resodes:[["After casting Intro Skill Essence of Tao, Jianxin gains 100% extra 'Chi' from Basic Attacks for 10s."],
      ['Resonance Skill Calming Air can be used 1 more time.'],
      ["After staying in the Parry Stance of Resonance Skill Calming Air for 2.5s, Resonance Skill Chi Counter becomes immediately available."],
      ["When performing Forte Circuit Heavy Attack: Primordial Chi Spiral, Jianxin's Resonance Liberation Purification Force Field damage is increased by 80% for 14s."],
      ["The range of Resonance Liberation Purification Force Field is increased by 33%."],
      ["During Forte Circuit Heavy Attack: Primordial Qi Spiral, if Jianxin performs Pushing Punch, enhanced Resonance Skill Special Chi Counter can be used 1 time(s) in 5s. Special Chi Counter: Deals Aero DMG equal to 556.67% of Jianxin's ATK, considered as Heavy Attack DMG. Obtain a Zhoutian Progress 4 Shield (Benefits from Inherent Skill Reflection's bonus effect.)"]],
      
      resoprior:[6,2,1],//this shows the constellation priority great is the greater than symbol this means 2,4,1
     
      weapons:[8,11,9,10],// match the index of your weapon with the index in the allWeapon array in the order of weapon should be [1,4,2,3]
     
      weapnote:[{des:'Currently the best available option for main dps role,Offers high base ATK, ATK%, a good amount of Energy Regen',role:'DPS role'},{des:'offering an ATK% and DEF% after using Resonance Liberation in the form of 3 charges', role:'last option'},{des:'gauntlets with the unique function of adding healing to a characters kit causing their Basic Attacks to restore a small amount of health to themselves', role:'Support role'},{des:'A utility-focused weapon prioritizing lightning-fast Concerto rotations,', role:'Good option'}],

        echobest:[6,2,5,17,15,14], 
        echosonata:[[5],[6],[7]],
        echosub:{
          sub:['Energy Regen','CRIT RATE/CRIT DMG', 'ATK%', 'ATK', 'Resonance Liberation DMG'],
          main:[['Atk%'],['Crit RATE','Crit DMG'],['Energy Regen','Aero DMG']]}, // 1   4   3 
  },
  {
      name:'lingyang',
      rarity :5,
      weapon:'gauntlets',
     region :'HUANG LONG',//should be in caps
      hbd:'8 august',
      intro:"Awoo—Lion up! Victory is mine at this year's Greens-plucking Tournament!",
      element:'glacio',
      combatrole:['B','-','-',0], //some says 0 a a some say a a a .
     
      ascension:['Sound-Keeping Tacet Core','Coriolus','LF Whisperin Core','MF Whisperin Core','HF Whisperin Core','FF Whisperin Core'],
     
      skillprior:[3,2,1,4,0],//priority 0 basic, 1 skill, 2 libration ,3 forte circuit , 4 intro skill
  
      skillcost:['Cadence Seed','Cadence Bud','Cadence Leaf','Cadence Blossom','Unending Destruction','LF Whisperin Core','MF Whisperin Core','HF Whisperin Core','FF Whisperin Core'],
      
      skilldes:[{name:'Majestic Fists', des:`Basic Attack
  Lingyang performs up to 5 consecutive attacks, dealing Glacio DMG.
  
  Basic Attack: Feral Roars
  After Resonance Skill Furious Punches is cast, Basic Attack 5 is replaced with Feral Roars, dealing Glacio DMG.
  
  Heavy Attack
  Lingyang consumes Stamina to attack the target, dealing Glacio DMG.
  
  Mid-air Attack
  Lingyang consumes Stamina to perform a Mid-air Plunging Attack, dealing Glacio DMG.
  
  Dodge Counter
  Use Basic Attack after a successful Dodge to attack the target, dealing Glacio DMG.`},
          {name:'Ancient Arts', des:`Ancient Arts
  Attack the target, dealing Glacio DMG.
  
  Furious Punches
  When Basic Attacks 3, 4, or 5 or Basic Attack Feral Roars hits the target, Resonance Skill Ancient Arts is replaced with Resonance Skill Swift Punches.
  If Lingyang uses Basic Attack after casting Basic Attack Feral Roars and Resonance Skill Swift Punches, he will start from Basic Attack 3.
  Lingyang’s Resonance Skill will not reset his Basic Attack stage.`},
          {name:"Strive: Lion's Vigor", des:`Attack the target, dealing Glacio DMG, and receive the blessing of Lion’s Vigor, which lasts for 50%s.
  
  Lion’s Vigor
  Lingyang’s Glacio DMG Bonus is increased by 50%;`},
          {name:'Unification of Spirits' , des :`Heavy Attack: Glorious Plunge
  When Lion’s Spirit is full, use Heavy Attack to perform Glorious Plunge, dealing Glacio DMG.
  
  Mid-air Attack: Tail Strike
  When Lion’s Spirit is not full, use Basic Attack after Heavy Attack to perform Tail Strike, dealing Glacio DMG.
  
  Striding Lion
  After casting Heavy Attack Glorious Plunge, enter Striding Lion state;
  After casting Intro Skill Lion Awakens or Resonance Liberation Strive: Lion’s Vigor, if Lion’s Spirit is full, use Basic Attack to enter Striding Lion state.
  In the Striding Lion state:
  Attacks can be launched in mid-air. If Lingyang is on the ground, use Heavy Attack Glorious Plunge to get back in the air.
  Lion’s Spirit is continuously consumed, and the Striding Lion state ends in 5s after Lion’s Spirit runs out;
  In the Resonance Liberation Lion’s Vigor state, the consumption speed of Lion’s Spirit is reduced by 50%, extending Striding Lion state by up to 10s.
  Lingyang’s Basic Attack is replaced with Basic Attack Feral Gyrate, which performs up to 2 consecutive attacks, dealing Glacio DMG.
  Lingyang’s Resonance Skill is replaced with Mountain Roamer, dealing Glacio DMG.
  When Lion’s Spirit is less than 10, use Basic Attack to perform Stormy Kicks, dealing Glacio DMG; after performing Basic Attack Stormy Kicks, the Mid-air Attack Radiant Plunge becomes available.
  Concerto Energy is restored when Lion’s Spirit is consumed.
  
  Lion’s Spirit
  Lingyang can hold up to 100 Lion’s Spirit.
  When casting Resonance Skill Furious Punches, Lion’s Spirit is restored.
  When casting Intro Skill Lion Awakens, Lion’s Spirit is restored.
  When casting Resonance Liberation Strive: Lion’s Vigor, Lion’s Spirit is restored.`},
          {name:'Lion Awakens', des:`Lingyang enters the battlefield, dealing Glacio DMG.`},
          {name:"Frosty Marks", des:`Lingyang releases a shock wave centered on the skill target, dealing Glacio DMG equal to 587.94% of Lingyang's ATK to targets within the range.`},
          [{name:"Diligent Practice", des:`Under the Striding Lion state, within 3s after each Basic Attack, the next Mountain Roamer will deal an additional Glacio DMG, equal to 150% of Mountain Roamer damage, considered as Resonance Skill damage.`},
          {name:"Lion's Pride", des:`Damage of the Intro Skill Lion Awakens is increased by 50%.`}]  ,
          [{name:" Lingyang stat bonus 1", des:`Glacio DMG Bonus increased by 12%.` },
          {name:" Lingyang stat bonus 2", des:`ATK increased by 12%.`}]
      ],
      
      team:[['encore','verina',' QuickSwap NoobieBlast'],['sanhua','verina','QuickSwap MasterBlast',],['taoqi','baizhi','F2P option']], //the best team is in the middle with index 1 and the last index is the team name 
      
      teamdes:[["Because Lingyang’s Resonance Skill releases quickly and the Outro Skill’s multiplier is high, Lingyang can also equip the Lingering Tunes set and use Mech Abomination as the Main Echo. This setup works well with characters like Encore, who also lack strong Outro Skill buffs, by frequently inserting Resonance Skills and Echo Skills to supplement damage"],["Sanhua can quickly obtain a large amount of Liberation Energy and Concerto Energy and provide 38% basic ATK DMG for lingyang"],['F2P comp for the Brokies out there...']],//should be of the same order as of team 
      
      resonance:[["Lion of Light, Blessings Abound"],["Dominant and Fierce, Power Unbound"],["Jaw-Dropping Feats, Loud and Wide"],["Immortals Bow, in Reverence Flawed"],["Seven Stars Shine, Stepped upon High"],["Demons Tremble, Divine Power Nigh"]],
      
      resodes:[
      /*1*/["During Resonance Liberation Lion's Vigor, Lingyang's Anti-Interruption is enhanced."],
      
      /*2*/['Intro Skill Lion Awakens additionally recovers 10 Resonance Energy for Lingyang, triggered once every 20s.'],
      
      /*3*/["During Resonance Liberation Lion's Vigor, Lingyang's Basic Attack DMG Bonus is increased by 20%, and Resonance Skill DMG Bonus increased by 10%."],
      
      /*4*/["Outro Skill Frosty Marks increases the Glacio DMG Bonus of all team members by 20% for 30s."],
      
      /*5*/["Resonance Liberation Strive: Lion's Vigor additionally deals Glacio DMG equal to 200% of Lingyang's ATK."],
      
      /*6*/["In the Forte Circuit Striding Lion state, during the first 3s after every Resonance Skill Mountain Roamer, the Basic Attack DMG Bonus for Lingyang's next Basic Attack is increased by 100%."]],
      
      resoprior:[6,4,3,1],//this shows the constellation priority great is the greater than symbol this means 2,4,1
      
      weapons:[8,13,12,11],// match the index of your weapon with the index in the allWeapon array in the order of weapon should be [1,4,2,3]
      
      
weapnote:[{des:'Top Gauntlets ,Offers high base ATK, ATK%, a good amount of Energy Regen, and 5star Rarity makes it a top notch choice',role:'Best in Slot'},{des:'Gauntlets with a generic ATK% boost but an Energy Regen main stat,can be usable', role:'F2P'},{des:`passive grants increased Resonance Liberation DMG% after using a Resonance Skill. Still useable by characters who don't focus on Liberation damage as their kit, thanks to the reasonably high base stats but more importantly CRIT RATE main stat.`, role:'Good 4 star Option'},{des:'offering an ATK% and DEF% after using Resonance Liberation in the form of 3 charges', role:'Viable Option'}],
      
        echobest:[8,9,18,14], // best 4 cost and 3 cost
        echosonata:[[2],[3],[2,3]],
        echosub:{
          sub:['Energy Regen','CRIT RATE/CRIT DMG','ATK%','ATK'],
          main:[['Atk%'],['Crit RATE','Crit DMG'],['Glacio DMG','ATK%']]}, //  1   4   3 
  },
  {
      name:'verina',
      rarity :5,
      weapon:'rectifier',
      region:'HUANG LONG',//should be in caps
      hbd:'18 May',
      intro:"Plants talk in a silent and sincere language. I can translate their talk for you, if you want.",
      element:'spectro',
      combatrole:[`-`,'-','S',2], //some says 0 a a some say a a a .
     
      ascension:['Elegy Tacet Core','Belle Poppy','LF Howler Core','MF Howler Core','HF Howler Core','FF Howler Core'],
     
      skillprior:[3,2,1,4,0],//priority 0 basic, 1 skill, 2 libration ,3 forte circuit , 4 intro skill
  
      skillcost:['Lento Helix','Adagio Helix','Andante Helix','Presto Helix','Monument Bell','LF Howler Core','MF Howler Core','HF Howler Core','FF Howler Core'],
      
      skilldes:[{name:'Cultivation', des:`Basic Attack
  Verina performs up to 5 consecutive attacks with vines, dealing Spectro DMG.
  
  Heavy Attack
  Verina consumes Stamina to charge forward, dealing Spectro DMG.
  
  Mid-air Attack
  Verina consumes Stamina to perform up to 3 consecutive attacks in mid-air, dealing Spectro DMG.
  
  Mid-air Heavy Attack
  Hold Basic Attack to consume Stamina and perform an Mid-air Plunging Attack, dealing Spectro DMG.
  
  Dodge Counter
  Use Basic Attack after a successful Dodge to attack the target, dealing Spectro DMG.`},
  {name:'Botany Experiment', des:`Verina converges an energy field in front to grow foliage, dealing Spectro DMG within the range.`},
  {name:"Arboreal Flourish", des:`Verina nourishes nearby foliage at rapid speed, dealing Spectro DMG while healing all Characters on teams nearby. A Photosynthesis Mark is applied to the target on hit.
  
  Photosynthesis Mark
  
  Whenever a Character on a team nearby performs an attack on targets with a Photosynthesis Mark, Verina performs a Coordinated Attack, dealing Spectro DMG while healing the active Character dealing damage on a team nearby, triggered 1 time per second.`},
  {name:'Starflower Blooms' , des :`Heavy Attack: Starflower Blooms
  When casting Heavy Attack, if Verina carries ‘Photosynthesis Energy’, Verina consumes 1 stack of ‘Photosynthesis Energy’ to recover Concerto Energy and restore HP for all party members nearby;
  Heavy Attack: Starflower Blooms deals Spectro DMG, considered as Heavy Attack damage.
  
  Mid-air Attack: Starflower Blooms
  When casting Mid-air Attack, if Verina carries ‘Photosynthesis Energy’, Verina consumes 1 stack of ‘Photosynthesis Energy’ to recover Concerto Energy and restore HP for all party members nearby;
  Mid-air Attack: Starflower Blooms deals Spectro DMG, considered as Basic Attack damage.
  Verina can cast Mid-air Attack: Starflower Blooms by using Basic Attack after casting Heavy Attack: Starflower Blooms.
  
  Photosynthesis Energy
  Verina can hold up to 4 ‘Photosynthesis Energy’.
  Verina obtains 1 stack of ‘Photosynthesis Energy’ for every Basic Attack 5 on hit;
  Verina obtains 1 stack of ‘Photosynthesis Energy’ for every Resonance Skill Botany Experiment on hit;
  Verina obtains 1 stack of ‘Photosynthesis Energy’ for every Intro Skill Verdant Growth on hit.`},
  {name:'Verdant Growth', des:`Verina attacks the target, dealing Spectro DMG.`},
  {name:"Blossom", des:`Verina heals the next character (or a character on a nearby team that activates an Outro Skill) by 19% of her ATK per second for 6s. All characters on nearby teams gain 15% All-Type DMG Deepen for 30s.`},
          [{name:"Gift of Nature", des:`When Verina casts Heavy Attack Starflower Blooms, Mid-air Attack Starflower Blooms, Resonance Liberation Arboreal Flourish or Outro Skill Blossom, all team members' ATK are increased by 20% for 20s.`},
          {name:"Grace of Life", des:`Verina protects a team member from fatal damage and grants a shield with strength equal to 120% of Verina's ATK, lasting for 10s. This can be triggered 1 time every 10 minutes.`}]  ,
          [{name:" Verina stat bonus 1", des:`Healing Bonus increased by 12%.` },
          {name:" Verina stat bonus 2", des:`ATK increased by 12%.` }]
  ],
      
      team:[['jiyan','mortefi','Jiyan hypercarry'],['calcharo','yinlin','GOAT Team',],['rover','danjin','Good Option']], //the best team is in the middle with index 1 and the last index is the team name 
      
      teamdes:[["Jiyan as the hypercarry , mortefi as a sub dps and verina as the best support"],["Best team in the game right now,All 3 charcaters in this team have best syerngy with each other,Verina as a Sub Dps and Electro Support and Calcharo as main DPS"],['F2P good comp, with Danjin as the most broken 4 star unit']],//should be of the same order as of team 
      
      resonance:[["Moment of Emergence"],["Sprouting Reflections"],["The Choice to Flourish"],["Blossoming Embrace"],["Miraculous Blooms"],["Joyous Harvest"]],
      
      resodes:[
      /*1*/["Outro Skill Blossom grants the next character a continuous Healing effect, recovering HP equal to 20% of Verina's ATK every 5s for 30s."],
  
      /*2*/['Resonance Skill Botany Experiment additionally grants 1 [Photosynthetic Energy] and 10 Concerto Energy.'],
  
      /*3*/["Healing of Resonance Liberation's Photosynthesis Mark is increased by 12%."],
  
      /*4*/["Heavy Attack Starflower Blooms, Mid-Air Attack Starflower Blooms, Resonance Liberation Arboreal Flourish and Outro Skill Blossom increases the Spectro DMG Bonus of all team members by 15% for 24s."],
      
      /*5*/["When Verina heals a team member with HP less than 50%, her Healing is increased by 20%."],
  
      /*6*/["Heavy Attack Starflower Blooms and Mid-Air Attack Starflower Blooms deal 20% more damage. They will trigger Coordinated Attack 1 time and heal all characters nearby. The DMG of this Coordinated Attack and the Healing are equal to those of the Resonance Liberation's Photosynthesis Mark."]],
      
      resoprior:[6,4,2],//this shows the constellation priority great is the greater than symbol this means 2,4,1
     
      weapons:[5,1,7,6],// match the index of your weapon with the index in the allWeapon array in the order of weapon should be [1,4,2,3]
     
      weapnote:[{des:'A utility-focused weapon prioritizing fast Concerto rotations, offers a good amount of Energy Regen',role:'Best In Support'},{des:'U Should Use This On Someone Else,Seriously, but it does provide some Energy Regen which is much requried with her', role:'No Other Option'},{des:'An easily accessible supportive option with a reasonable amount of Energy Regen', role:'Support'},{des:'for the survivors out there', role:'viable option'}],
  
      
        echobest:[2,23], // best 4 cost and 3 cost
        echosonata:[[6]],
        echosub:{
          sub:['Energy Regen','ATK%','ATK'],
          main:[['Atk%'],['Healing Bonus','ATK%'],['Energy Regen']]}, // 1   4   3 
  },
  
  {
      name:'rover',
      rarity :5,
      weapon:'sword',
      region:'UNKNOWN',//should be in caps
      hbd:"---",
      intro:"Rover embarks on a journey to uncover the truths.",    
      element:'spectro',
      combatrole:['A','A','-',1], //some says 0 a a some say a a a .
     
      ascension:['Mysterious Code','Pecok Flower','LF Whisperin Core','MF Whisperin Core','HF Whisperin Core','FF Whisperin Core'],
     
      skillprior:[2,3,1,0,4],//priority 0 basic, 1 skill, 2 libration ,3 forte circuit , 4 intro skill
  
      skillcost:['Inert Metallic Drip','Reactive Metallic Drip','Polarized Metallic Drip','Heterized Metallic Drip','Dreamless Feather','LF Whisperin Core','MF Whisperin Core','HF Whisperin Core','FF Whisperin Core'],
      
      skilldes:[
        {name:'Vibration Manifestation', des:`Basic Attack
  Rover performs up to 4 consecutive attacks, dealing Spectro DMG.
  
  Heavy Attack
  Rover consumes Stamina, dealing Spectro DMG.
  
  Heavy Attack: Resonance
  After Basic Attack 3 or Heavy Attack, press the Basic Attack button at the right time to perform Heavy Attack Resonance, dealing Spectro DMG.
  
  Heavy Attack: Aftertune
  After Heavy Attack Resonance or Dodge Counter hits a target, press the Basic Attack button to perform Heavy Attack Aftertune, dealing Spectro DMG.
  
  Mid-air Attack
  Rover consumes Stamina to perform a Mid-Air Plunging Attack, dealing Spectro DMG.
  
  Dodge Counter
  Use Basic Attack after a successful Dodge to attack the target, dealing Spectro DMG.`},
        {name:'Resonating Slashes', des:`Rover launches an attack forward, dealing Spectro DMG. `},
        {name:"Echoing Orchestra", des:`Rover converges Spectro energy to assail the target area, detonating it after a short delay and dealing Spectro DMG.`},
        {name:'World in a Grain of Sand' , des :`Resonance Skill: Resonating Spin
  If ‘Diminutive Sound’ exceeds 50 when Resonance Skill is used, Rover consumes 50 ‘Diminutive Sound’ to cast Resonating Spin, dealing Spectro DMG, considered as Resonance Skill damage.
  
  Resonance Skill: Resonating Echoes
  After Resonance Skill Resonating Spin ends, Rover performs Resonance Skill Resonating Echoes upon pressing the Basic Attack button.
  Rover performs attacks forward, dealing Spectro DMG considered as Resonance Skill DMG.
  
  Diminutive Sound
  Rover can hold up to 100 ‘Diminutive Sounds’.
  Rover obtains ‘Diminutive Sound’ for every Normal Attack Vibration Manifestation on hit.
  Rover obtains ‘Diminutive Sound’ for every Heavy Attack aftertune on hit.
  Rover obtains ‘Diminutive Sound’ upon casting Intro Skill Waveshock.`},
        {name:'Waveshock', des:`
  DMG Multiplier
  Rover attacks the target, dealing Spectro DMG.`},
        
         {name:"Instant", des:`Generate an area of stasis surrounding the next character (or a character on a nearby team that activates an Outro Skill), lasting for 3s.`},
         [{name:"Silent Listener", des:`Rover gains 15% ATK increase for 5s upon casting Heavy Attack Resonance.`},
         {name:"Reticence", des:`Damage dealt by Rover's Basic Attack Resonating Echoes is increased by 60%.`}]  ,
         [{name:" rover stat bonus 1", des:`Spectro DMG Bonus increased by 12%.`},
         {name:" rover stat bonus 2", des:`ATK increased by 12%.`}]
      ],
      
      team:[['chixia','baizhi',' Chixia carrying'],['chixia','verina','Best Team',]], //the best team is in the middle with index 1 and the last index is the team name 
      
      teamdes:[["Baizhi as a secondary option"],["Over 60% of Chixia’s damage comes from Resonance Skill types, and rover as a burst and normal atk dmg dealer works in good synergy"]],//should be of the same order as of team 
      
      resonance:[["Odyssey of Beginnings"],["Microcosmic Murmurs"],["Visages of Dust"],["Resonating Lamella"],["Temporal Virtuoso"],["Echoes of Wanderlust"]],
      
      resodes:[
      /*1*/["Rover's Crit. Rate is increased by 15% for 7s when casting Resonance Skill Resonating Slashes or Resonance Skill Resonating Spin."],
  
      /*2*/["Rover's Spectro DMG Bonus is increased by 20%."],
  
      /*3*/["Rover's Energy Regen is increased by 20%."],
  
      /*4*/["When casting Resonance Liberation Echoing Resonance, Rover continuously restores HP for all team members: HP equal to 20% of Rover's ATK will be restored every second for 5s."],
      
      /*5*/["Rover's Resonance Liberation DMG Bonus is increased by 40%."],
  
      /*6*/["Resonance Skill Resonating Slashes and Resonance Skill Resonating Spin reduces the target's Spectro DMG RES by 10% on hit for 20s."]],
      
      resoprior:[6,5,3],//this shows the constellation priority great is the greater than symbol this means 2,4,1
     
      weapons:[ 33 , 24, 22 , 23],// match the index of your weapon with the index in the allWeapon array in the order of weapon should be [1,4,2,3]
   
      weapnote:[{des:'The only limited time banner Sword in the game right now, with a passive with almost helps all the resonators this this one is a no brainer',role:'Best In Slot'},{des:'A utility-focused weapon prioritizing lightning-fast Concerto rotations over raw output with the ability to transform entire units action priorities under the right circumstances.', role:'Last Option'},{des:'A good option rn offering significantly higher base damage due to its 5★ rarity, as well as a stackable ATK% buff', role:'ALternative'},{des:'the shorter time on field the better. Best for Hybrid characters executing their rotation fast and infrequently', role:'Quick Swap'}],
      
        echobest:[6,10,17,15], // best 4 cost and 3 cost
        echosonata:[[5],[1]],
        echosub:{
          sub:['Energy Regen','CRIT RATE/CRIT DMG', 'ATK%', 'ATK'],
          main:[['Atk%'],['Crit RATE','Crit DMG'],['Spectro DMG']]}, // 1   4   3 
  },
  {
      name:'rover (havoc)',
      rarity :5,
      weapon:'sword',
      region:'UNKNOWN',//should be in caps
      hbd:"---", 
      intro:"Rover embarks on a journey to uncover the truths.",    
      element:'havoc',
      combatrole:['S','-','-',0], //some says 0 a a some say a a a .
     
      ascension:['Mysterious Code','Pecok Flower','LF Whisperin Core','MF Whisperin Core','HF Whisperin Core','FF Whisperin Core'],
     
      skillprior:[3,2,1,0,4],//priority 0 basic, 1 skill, 2 libration ,3 forte circuit , 4 intro skill
  
      skillcost:['Inert Metallic Drip','Reactive Metallic Drip','Polarized Metallic Drip','Heterized Metallic Drip','Dreamless Feather','LF Whisperin Core','MF Whisperin Core','HF Whisperin Core','FF Whisperin Core'],
      
      skilldes:[{name:'Tuneslayer', des:`Basic Attack
  Rover-Havoc performs up to 5 consecutive attacks, dealing Havoc DMG.
  
  Heavy Attack
  Rover-Havoc consumes Stamina to attack, dealing Havoc DMG.
  Use Basic Attack after casting Heavy Attack to cast Basic Attack 4.
  
  Mid-air Attack
  Rover-Havoc consumes Stamina to cast a Mid-Air Plunging Attack, dealing Havoc DMG.
  
  Dodge Counter
  Use Basic Attack after a successful Dodge to attack the target, dealing Havoc DMG.`},
        {name:'Wingblade', des:`Transforms sound into feathers, dealing Havoc DMG.`},
        {name:"Deadening Abyss", des:`Gather the echoes between Rover’s palms to attack a target, dealing Havoc DMG.`},
        {name:'Umbra Eclipse' , des :`Devastation
  When “Umbra” is full, hold Basic Attack to cast Devastation to attack the target, dealing Havoc DMG, considered as Heavy Attack damage.
  
  Dark Surge
  After casting Devastation, Rover enters the Dark Surge state. In this state:
  Basic Attack is replaced with Enhanced Basic Attack, which performs up to 5 consecutive attacks, dealing Havoc DMG;
  Heavy Attack is replaced with Enhanced Heavy Attack;
  Use Basic Attack after casting Enhanced Heavy Attack to cast Heavy Attack Thwackblade to attack the target, dealing Havoc DMG, considered as Heavy Attack damage;
  Use Basic Attack after casting Heavy Attack Thwackblade to cast Enhanced Basic Attack 3 to attack the target, dealing Havoc DMG;
  Resonance Skill Wingblade is replaced with Resonance Skill Lifetaker, transforming sounds into blades to attack the target, dealing Havoc DMG.
  
  Umbra
  Rover can hold up to 100 points of Umbra.
  Normal Attack Tuneslayer recovers Umbra on hit.
  Resonance Skill Wingblade recovers Umbra when cast.
  Resonance Skill Lifetaker recovers Umbra when cast.
  Intro Skill Instant of Annihilation recovers Umbra when cast.`},
        {name:'Instant of Annihilation', des:`Attack the target, dealing Havoc DMG.`},
        {name:"Soundweaver", des:`Rover summons a Havoc Field, dealing 143.30% Havoc DMG to all targets within range every 2s for 6s.`},
        [{name:"Bleak Crescendo", des:`While in the Dark Surge state, Basic Attack recovers 1 Resonance Energy when it hits a target, and this effect can be triggered once per second.`},
        {name:"Metamorph", des:`In the Dark Surge state, Havoc DMG Bonus is increased by 20%.`}]  ,
        [{name:"rover stat bonus 1", des:`Havoc DMG Bonus increased by 12%.` },
        {name:"rover stat bonus 2", des:`ATK increased by 12%.` }]
      ],
      
      team:[['danjin','verina',' Danjin Carry'],['sanhua','verina','Quick Swap',],['taoqi','baizhi','F2P',]], //the best team is in the middle with index 1 and the last index is the team name 
      
      teamdes:[["After Rover is Done with his/her rotation ,Danjin uses Intro Skill and two Resonance Skills, then activates Forte Circuit with full energy"],[" Since Rover (Havoc)’s Outro Skill deals AoE damage for 6 seconds, switching to Sanhua after completing Rover (Havoc)’s Forte Circuit can help maximize the Outro Skill damage"],["Taoqi provides Resonance Skill DMG bonus, which does not boost Rover (Havoc)’s damage as much as Danjin,and is even less effective than Sanhua but can insure her survival in the combat"]],//should be of the same order as of team 
      
      resonance:[["Cryptic Insight"],["Waning Crescent"],["Surging Resonance"],["Annihilated Silence"],["Aeon Symphony"],["Ebbing Undercurrent"]],
      
      resodes:[
      /*1*/["Resonance Skill DMG Bonus is increased by 30%."],
      
      /*2*/["ResReset Resonance Skill's Cooldown when Rover enters the Dark Surge state by casting Heavy Attack Devastation."],
      
      /*3*/["In the Dark Surge state, Basic Attack V restores HP equal to 10% of total HP lost on hit."],
      
      /*4*/["Heavy Attack Devastation and Resonance Liberation Deadening Abyss reduces enemy Havoc RES by 10% for 20s on hit."],
      
      /*5*/["In the Dark Surge state, Basic Attack V deals an additional Havoc damage equal to 50% of Basic Attack V damage."],
  
      /*6*/["In the Dark Surge state, Rover's Crit. Rate is increased by 25%."]],
      
      resoprior:[6,5,3],//this shows the constellation priority great is the greater than symbol this means 2,4,1
     
      weapons:[ 33 , 24, 22 , 23],// match the index of your weapon with the index in the allWeapon array in the order of weapon should be [1,4,2,3]
   
    weapnote:[{des:'The only limited time banner Sword in the game right now, with a passive with almost helps all the resonators this this one is a no brainer',role:'Best In Slot'},{des:'A utility-focused weapon prioritizing lightning-fast Concerto rotations over raw output with the ability to transform entire units action priorities under the right circumstances.', role:'Last Option'},{des:'A good option rn offering significantly higher base damage due to its 5★ rarity, as well as a stackable ATK% buff', role:'ALternative'},{des:'the shorter time on field the better. Best for Hybrid characters executing their rotation fast and infrequently', role:'Quick Swap'}],
        echobest:[11,24], // best 4 cost and 3 cost
        echosonata:[[8],[8,3]],
        echosub:{
          sub:['CRIT Rate/CRIT Dmg',' ATK% ≈ ATK ≈ Basic Attack DMG %','Resonance Liberation DMG % ', 'Resonance Skill DMG %'],
          main:[['Atk%'],['Crit RATE','Crit DMG'],['Havoc DMG']]}, // 1   4   3 
  },
  {   name:'aalto',
      rarity :4,
      weapon:'pistols',
      region:'NEW FEDERATION',//should be in caps
      hbd:"11 June", 
      intro:"Well, if it isn't my loyal patron! What do you wish to inquire about today?",    
      element:'aero',
      combatrole:['B','A','-',1], //some says 0 a a some say a a a .
      
      ascension:['Roaring Rock Fist','Wintry Bell','LF Howler Core','MF Howler Core','HF Howler Core','FF Howler Core'],
     
      skillprior:[2,3,1,0,4],//priority 0 basic, 1 skill, 2 libration ,3 forte circuit , 4 intro skill
  
      skillcost:['Impure Phlogiston','Extracted Phlogiston','Refined Phlogiston','Flawless Phlogiston','Monument Bell','LF Howler Core','MF Howler Core','HF Howler Core','FF Howler Core'],
      
      skilldes:[{name:'Half Truths', des:`Basic Attack
  Aalto fires up to 5 consecutive shots, dealing Aero DMG. Basic Attack 4 will spread the ‘Mist’ forward, which lasts for 1.5s.
  
  Heavy Attack
  Aalto enters the aiming state for a more powerful shot.
  The aimed shot fired after charging finishes deals Aero DMG.
  
  Mid-air Attack
  Aalto consumes Stamina to perform consecutive shots at the target in mid-air, dealing Aero DMG.
  
  Dodge Counter
  Use Basic Attack after a successful Dodge to attack the target, dealing Aero DMG.`},
        {name:'Shift Trick', des:`Mist Avatar
  Casts ‘Mist’ and 1 ‘Mist Avatar(s)’ to taunt the surrounding targets. The avatars inherit a portion of Aalto’s HP and generate 6 Mist Bullets around them, dealing Aero DMG.
  
  Mist Missiles
  Deals Aero DMG, considered as Resonance Skill damage.`},
        {name:"Flower in the Mist", des:`Generate a ‘Gate of Quandary’ in front, dealing Aero DMG. When bullets pass through the ‘Gate of Quandary’, ATK is increased. ‘Gate of Quandary’ lasts for 10s.`},
        {name:'Misty Cover' , des :`When Aalto passes through ‘Mist’ or ‘Gate of Quandary’, he enters ‘Mistcloak Dash’.
  
  Mistcloak Dash
  Movement speed increased;
  During this period, ‘Mist Drops’ are continuously consumed, and for each 1 ‘Mist Drop’ consumed, 1 Resonance Skill Mist Missile is generated.
  
  Mist Drops
  Aalto can hold up to 6 Mist Drops.
  When Basic Attack or Mid-air Attack passes through ‘Mist’ and hits the target, 1 ‘Mist Drop’ is recovered.`},
        {name:'Feint Shot', des:`Aalto shows up out of thin air to performs rapid continuous shooting, dealing Aero damage.`},
        
        {name:"Dissolving Mist", des:`The next character (or other characters on a nearby team that activates an Outro Skill) gains 23% Aero DMG Deepen for 14s or until they are switched off field.`},
        [{name:"Mid-game Break", des:`Aalto will continuously recover Stamina when he is in the Forte Circuit Miscloak Dash state.`},
        {name:"Perfect Performance", des:`Aalto's Heavy Attack will always critically hit, triggered once every 30s.`}]  ,
        [{name:" aalto stat bonus 1", des:`Aero DMG Bonus increased by 12%.` },
        {name:" aalto stat bonus 2", des:`ATK increased by 12%.` }]
      ],
      
      team:[['jiyan','baizhi',' second best team'],['jiyan','verina','Best Team',]], //the best team is in the middle with index 1 and the last index is the team name 
      
      teamdes:[["Baizhi as a secondary option"],["Jiyan hypercarry with aalto as a aero dmg support"]],//should be of the same order as of team 
      
      resonance:[["Trickster's Opening Show"],["Mistweaver’s Debut"],["Hazey Transition"],["Blake Bloom for Finale"],["pplause of the Lost"],["Broker’s Secrets"]],
      
      resodes:[
      /*1*/["The cooldown of Resonance Skill Shift Trick is reduced by 4s."],
  
      /*2*/["'Mist Avatar' inherits 100% more HP from Aalto. When Aalto attacks targets taunted by the 'Mist Avatar(s)', his ATK is increased by 15%."],
  
      /*3*/["When Aalto's Basic Attack or Mid-Air Attack passes through the 'Gate of Quandary', 2 more bullets will be generated, dealing 50% of the DMG of Basic Attack or Mid-Air Attack."],
  
      /*4*/["The damage of Resonance Skill Mist Bullets is increased by 30%; Aalto receives 30% less damage in his Forte Circuit Mistcloak Dash state."],
     
      /*5*/["In the Forte Circuit Mistcloak Dash state, Aalto's Aero DMG Bonus is increased by 25% for 6s."],
  
      /*6*/["Resonance Liberation Flower in the Mist now additionally increases Crit. Rate by 8%. When Aalto's Heavy Attack passes through the 'Gate of Quandary', the damage dealt is additionally increased by 50%."]],
      
      resoprior:[1],//this shows the constellation priority great is the greater than symbol this means 2,4,1
     
      weapons:[26,29,27,28],// match the index of your weapon with the index in the allWeapon array in the order of weapon should be [1,4,2,3]
     
      weapnote:[{des:'Currently the best available option for him, granting better Crit ratios',role:'Best Support'},{des:'you dont need this, u need jesus', role:'F2P'},{des:'2nd Best option rn, but reliant on dodging 3 times during your rotation for maximum value with continual dodges after that', role:'Support'},{des:'for the survivors out there,requires the player not to be hit to extract full value', role:'F2P'}],
  
      
        echobest:[6,17], // best 4 cost and 3 cost
        echosonata:[[5]],
        echosub:{
          sub:['CRIT RATE/CRIT DMG', 'ATK%','Energy Regen', 'ATK'],
          main:[['Atk%'],['Crit RATE','Crit DMG'],['Aero DMG']]}, // 1   4   3 
  },
  {   name:'baizhi',
      rarity :4,
      weapon:'rectifier',
      region:'HUANG LONG',//should be in caps
      hbd:"10 Septemper", 
      intro:"No, I cannot place my faith in it, but my anticipation stems precisely from this distrust. A claim is always verifiable before it is discredited entirely.",    
      element:'glacio',
      combatrole:['-','-','A',2], //some says 0 a a some say a a a .
     
      ascension:['Sound-Keeping Tacet Core','Lanternberry','LF Howler Core','MF Howler Core','HF Howler Core','FF Howler Core'],
     
      skillprior:[2,1,3,4,0],//priority 0 basic, 1 skill, 2 libration ,3 forte circuit , 4 intro skill
  
      skillcost:['Lento Helix','Adagio Helix','Andante Helix','Presto Helix','Monument Bell','LF Howler Core','MF Howler Core','HF Howler Core','FF Howler Core'],
      
      skilldes:[{name:'Destined Promise', des:`Basic Attack
  Baizhi instructs You’tan to perform up to 4 consecutive attacks, dealing Glacio DMG.
  
  Heavy Attack
  Baizhi continuously consumes Stamina to command You’tan to attack enemies, dealing Glacio DMG. During Heavy Attack, Baizhi can command You’tan to move.
  
  Mid-air Attack
  Baizhi consumes Stamina and summons You’tan in mid-air to perform a Plunging Attack, dealing Glacio DMG.
  
  Dodge Counter
  Use Basic Attack after a successful Dodge to attack the target, dealing Glacio DMG.`},
        {name:'Emergency Plan', des:`Baizhi calls You’tan to attack the target, dealing Glacio DMG while immediately healing all characters on nearby teams.`},
        {name:"Momentary Union", des:`Baizhi summons You’tan to heal all characters on nearby teams, generating 4 stacks of Remnant Entities.
  
  Remnant Entities
  
  Remnant Entities follow the active team members. 1 stacks of Remnant Entities are automatically consumed to attack the targets every 2.5s, dealing Glacio DMG on hit while healing the active character on a nearby team.`},
        {name:'Cycle of Life' , des :`You’tan
  A Remnant Creature that answers to Baizhi’s mind and desires while sharing all her attributes. You’tan goes back to Baizhi when Baizhi dodges.
  
  Concentration
  Baizhi consumes all ‘Concentrations’ when casting Heavy Attack or Resonance Skill Emergency Plan to continuously restore HP for Characters nearby. Each 1 ‘Concentration’ consumed restores HP for 1 time every 2s.
  When Baizhi consumes ‘Concentration’ to cast Heavy Attack, Baizhi additionally restores Concerto Energy and Resonance Energy;
  When Baizhi consumes ‘Concentration’ to cast Resonance Skill Emergency Plan, Baizhi additionally restores Concerto Energy.
  
  Concentration
  Baizhi can hold up to 4 ‘Concentrations’.
  Baizhi obtains 1 ‘Concentration’ for every Basic Attack on hit.`},
        {name:'Overflowing Frost', des:`Baizhi calls You'tan to perform 1 plunging attack, dealing Glacio DMG while healing all characters on a nearby team.`},
        {name:"Rejuvinating Flow", des:`Baizhi heals the next character (or other characters on a nearby team that activates an Outro Skill) by 1.54% of her Max HP every 3s for 30s. The healed character(s) also gain a 15% All-Type DMG Deepen for 6s.`},
        [{name:"Stimulus Feedback", des:`Baizhi's Heavy Attack on hit heals the character with the lowest HP on a nearby team by 0.25% of her Max HP.`},
        {name:"Harmonic Range", des:`When Baizhi casts Resonance Skill Emergency Plan, You'tan generates a field of Euphonia that lasts for 15s.
  
  Euphonia
  ATK of the Resonators who picks up Euphonia is increased by 15% for 20s.`}]  ,
        [{name:" baizhi stat bonus 1", des:`Healing Bonus increased by 12%.` },
        {name:" baizhi stat bonus 2", des:`HP increased by 12%.` }]
     
      ],
      
      team:[['calcharo','yinlin',' second best team'],['jiyan','mortefi','Best Team',],['rover','yangyang','F2P option']], //the best team is in the middle with index 1 and the last index is the team name 
      
      teamdes:[["Not gonna repeat myself"],["baizhi as a sustainer can be used in almost any team"],["Like i said...not gonna repeat"]],//should be of the same order as of team 
      
      resonance:[["Complex Simplicity"],["Silent Tundra"],["Veritas Lux Mea"],["Eternal Verity"],["A Wish Answered"],["Seeker's Devotion"]],
      
      resodes:[
      /*1*/["Resonance Skill Emergency Plan additionally restores 2.5 Resonance Energy for every 1 'Concentration' consumed."],
  
      /*2*/["'Resonance Skill Emergency Plan increases Baizhi's Glacio DMG Bonus by 15% and her Healing by 15% if she has 4 'Concentration'. These effects last for 12s."],
  
      /*3*/["Intro Skill Overflowing Frost increases Baizhi's Max HP by 12% for 10s."],
  
      /*4*/["Upon casting Resonance Liberation Momentary Union, Resonance Liberation Remnant Entities gains the following enhancements:-Remnant Entities can be performed 2 more time(s);-Healing multiplier of Remnant Entities is increased by 20%;-Remnant Entities deals additional Glacio DMG equal to 1.20% of Baizhi's Max HP."],
     
      /*5*/["If a team member is downed when Baizhi is alive on the team, immediately revive them and restore their HP to 100% of their Max HP. This effect can be triggered once every 10 minute(s)."],
  
      /*6*/["When Euphonia is picked up, increase the Glacio DMG Bonus of all characters nearby by 12% for 20s."]],
      
      resoprior:[6,5],//this shows the constellation priority great is the greater than symbol this means 2,4,1
     
      weapons:[5,1,7,6],// match the index of your weapon with the index in the allWeapon array in the order of weapon should be [1,4,2,3]
     
      weapnote:[{des:'A utility focused weapon best in slot with right implimentation,offers a good amount of Energy Regen',role:'Best In Slot'},{des:"You don't need this on her. She can't use it to its full potential, but it does have some energy regen.", role:'overcrit'},{des:'An easily accessible supportive option with a reasonable amount of Energy Regen', role:'Support'},{des:'for the survivors out there who need some more energy regen...literally thats all you want', role:'F2P'}],
  
      
        echobest:[2,14], // best 4 cost and 3 cost
        echosonata:[[6]],
        echosub:{
          sub:['Energy Regen','HP%','Flat HP'],
          main:[['HP%'],['Healing Bonus','HP%'],['Energy Regen']]}, // 1   4   3 
  },
  {
      name:'chixia',
      rarity :4,
      weapon:'pistols',
      region:'HUANG LONG',//should be in caps
      hbd:"18 April", 
      intro:"Jinzhou Patroller, Chixia. You can always call on me if you ever find yourself in a pickle!.",    
      element:'fusion',
      combatrole:['B','B','-',1], //some says 0 a a some say a a a .
     
      ascension:['Rage Tacet Core','Belle Poppy','LF Whisperin Core','MF Whisperin Core','HF Whisperin Core','FF Whisperin Core'],
     
      skillprior:[3,2,1,0,4],//priority 0 basic, 1 skill, 2 libration ,3 forte circuit , 4 intro skill
  
      skillcost:['Impure Phlogiston','Extracted Phlogiston','Refined Phlogiston','Flawless Phlogiston','Monument Bell','LF Whisperin Core','MF Whisperin Core','HF Whisperin Core','FF Whisperin Core'],
      
      skilldes:[{name:'POW POW', des:`Basic Attack
  Chixia fires up to 4 consecutive shots, dealing Fusion DMG.
  
  Heavy Attack
  Chixia enters the aiming state for a more powerful shot.
  The aimed shot fired after charging finishes deals Fusion DMG.
  
  Mid-air Attack
  Chixia consumes Stamina to perform consecutive shots at the target in mid-air, dealing Fusion DMG.
  
  Dodge Counter
  Use Basic Attack after a successful Dodge to attack the target, dealing Fusion DMG.`},
        {name:'Whizzing Fight Spirit', des:`Chixia unleashes a flurry of shots, dealing Fusion DMG.
  
  Whizzing Fight Spirit has 2 initial charges.`},
        {name:"Blazing Flames", des:`Chixia fires up fast shots at nearby enemies, dealing Fusion DMG.`},
        {name:'Heroic Bullets' , des :`Resonance Skill: DAKA DAKA!
  Hold Resonance Skill Whizzing Fight Spirit to enter DAKA DAKA!. In this state:
  Chixia continuously consumes ‘Thermobaric Bullets’ to attack the target, dealing Fusion DMG, considered as Resonance Skill damage;
  Tap Basic Attack to cast Basic Attack 4, dealing Fusion DMG, considered as Basic Attack damage. Then she terminates ‘DAKA DAKA!’;
  ·If 30 ‘Thermobaric Bullets’ have been fired when Basic Attack is activated, Chixia will cast Resonance Skill Boom Boom and terminate ‘DAKA DAKA!’
  Chixia terminates ‘DAKA DAKA!’ when all ‘Thermobaric Bullets’ are consumed.
  
  Resonance Skill: Boom Boom
  Chixia deals Fusion DMG, considered as Resonance Skill damage.
  
  Thermobaric Bullets
  Chixia can hold up to 60 ‘Thermobaric Bullets’.
  Inherent Skill Scorching Magazine increases Max ‘Thermobaric Bullets’ by 10.
  Chixia obtains ‘Thermobaric Bullets’ for every Normal Attack POW POW on hit.
  Chixia obtains ‘Thermobaric Bullets’ upon casting Intro Skill Grand Entrance and Resonance Skill Whizzing Fight Spirit.`},
        {name:'Grand Entrance', des:`Chixia makes a heroic entrance and fires rapidly with her dual pistols at the target, dealing Fusion DMG.`},
          {name:"Leaping Flames", des:`Chixia releases a shock wave surrounding the target, dealing Fusion DMG equal to 530.00% of Chixia's ATK to enemies within the range.`},
                [{name:"Numbingly Spicy!", des:`Each 'Thermobaric Bullets' that hits a target during Resonance Skill DAKA DAKA! increases ATK by 1% for 10s, stacking up to 30 times.`},
                {name:"Scorching Magazine", des:`Max 'Thermobaric Bullets' is increased by 10 rounds. The damage of Resonance Skill Boom Boom is increased by 50%.`}]  ,
                [{name:" chixia stat bonus 1", des:`Fusion DMG Bonus increased by 12%.` },
                {name:" chixia stat bonus 2", des:`ATK increased by 12%.` }]
             
      ],
      
      team:[['yangyang','verina',' second best team'],['changli','verina','Best Team',],['rover','baizhi','F2P option']], //the best team is in the middle with index 1 and the last index is the team name 
      
      teamdes:[["Yangyang’s Outro Skill can restore Liberation Energy for Chixia."],["Changli’s Fusion DMG Bonus buff and Liberation DMG buff is extremely suitable for Chixia."],['Rover and chixia can both be used together in a quick swap team']],//should be of the same order as of team 
      
      resonance:[["No.1 Hero Play Fan"],["Silent Tundra"],["Eternal Flames"],["Hero’s Ultimate Move"],["Triumphant Explosions"],["Easter Egg Performance"]],
      
      resodes:[
      /*1*/["Resonance Skill Boom Boom hits will always be Critical Hits."],
  
      /*2*/["'During Resonance Liberation Blazing Flames, for every 1 target defeated, Chixia recovers 5 Resonance Energy, up to 20 each time."],
  
      /*3*/["Resonance Liberation Blazing Flames deals 40% more damage to targets whose HP is below 50%."],
  
      /*4*/["Resonance Liberation Blazing Flames grants 60 “Thermobaric Bullets” and immediately resets the Cooldown of Resonance Skill Whizzing Fight Spirit."],
     
      /*5*/["When the Inherent Skill Numbingly Spicy! reaches max stacks, ATK is additionally increased by 30%."],
  
      /*6*/["Resonance Skill Boom Boom increases the Basic Attack DMG Bonus of all team members by 25.00% for 15s."]],
      
      resoprior:[6,5,1,4],//this shows the constellation priority great is the greater than symbol this means 2,4,1
     
      weapons:[26,29,27,28],// match the index of your weapon with the index in the allWeapon array in the order of weapon should be [1,4,2,3]
     
      weapnote:[{des:'The most dps oriented weapon for her as of now...',role:'Best In Slot'},{des:'you dont need this, u need jesus', role:'F2P'},{des:'Best for overall utility, and supporting a quickswap team', role:'Support'},{des:'for the survivors out there', role:'F2P'}],
  
      
        echobest:[1,9,19,14], // best 4 cost and 3 cost
        echosonata:[[4],[3]],
        echosub:{
          sub:['Energy Regen','CRIT RATE/CRIT DMG', 'Resonance Skill DMG','ATK%','ATK'],
          main:[['Atk%'],['Crit RATE','Crit DMG'],['Fusion DMG']]}, // 1   4   3 
  },
  {
      name:'danjin',
      rarity :4,
      weapon:'sword',
      region:'HUANG LONG',//should be in caps
      hbd:"31 august", 
      intro:"Wherever I go, I swear to vanquish evil, whether it's out in the daylight or hiding in the dark.",    
      element:'havoc',
      combatrole:['S','S','-',0], //some says 0 a a some say a a a .
     
      ascension:['Strife Tacet Core','Belle Poppy','Crude Ring','Basic Ring','Improved Ring','Tailored Ring'],
     
      skillprior:[3,1,2,0,4],//priority 0 basic, 1 skill, 2 libration ,3 forte circuit , 4 intro skill
  
      skillcost:['Inert Metallic Drip','Reactive Metallic Drip','Polarized Metallic Drip','Heterized Metallic Drip','Dreamless Feather','Crude Ring','Basic Ring','Improved Ring','Tailored Ring'],
      
      skilldes:[{name:'Execution', des:`Basic Attack
  Danjin performs up to 3 consecutive attacks, dealing Havoc DMG.
  
  Heavy Attack
  Danjin combines her Forte with the blade in her hand and consumes Stamina to launch consecutive attacks, dealing Havoc DMG.
  
  Mid-air Attack
  Consume Stamina to perform a Mid-air Plunging Attack, dealing Havoc DMG.
  
  Dodge Counter
  Use Basic Attack after a successful Dodge to launch an attack, dealing Havoc DMG.
  
  Dodge Counter: Ruby Shades
  After a successful Dodge Counter, Danjin can use the Resonance Skill Crimson Fragment to perform Resonance Skill: Crimson Erosion.`},
        {name:'Crimson Fragment', des:`When casting Incinerating Will, each attack consumes 3% of Danjin’s max HP. When Danjin’s HP is less than 1%, this no longer consumes HP.
  
  Carmine Gleam
  Danjin attacks the target, dealing Havoc DMG.
  
  Crimson Erosion
  After Basic Attack 2, Dodge Counter or Intro Skill Vindication, use Resonance Skill to perform up to 2 consecutive strikes, dealing Havoc DMG.
  When Crimson Erosion II hits a target, apply Incinerating Will to it.
  
  Incinerating Will
  Danjin’s damage dealt to targets marked with Incinerating Will is increased by 20%.
  
  Sanguine Pulse
  Use Resonance Skill after Basic Attack 3 to perform up to 3 consecutive attacks, dealing Havoc DMG.`},
        {name:"Crimson Bloom", des:`Danjin’s anger intensifies as she frantically swings her dual blades, performing multiple rapid consecutive attacks, and 1 Scarlet Burst attack(s), dealing Havoc DMG.`},
        {name:'HeSerene Vigil' , des :`Heavy Attack: Chaoscleave
  After accumulating 60 ‘Ruby Blossom’, long press Basic Attack to consume all ‘Ruby Blossom’ to cast Chaoscleave, dealing Havoc DMG considered as Heavy Attack damage, and restore HP for Danjin.
  If current ‘Ruby Blossom’ reaches over 120, this skill consumes 120 ‘Ruby Blossom’ to increase the damage multiplier of Chaoscleave and Scatterbloom performed this time.
  
  Heavy Attack: Scatterbloom
  Use Basic Attack after Heavy Attack Chaoscleave to cast Shatter to attack the target, dealing Havoc DMG, considered as Heavy Attack damage.
  
  Ruby Blossom
  Danjin obtains ‘Ruby Blossom’ when using Resonance Skill Crimson Fragment.`},
        {name:'Vindiction', des:`With unwavering determination, Danjin unleashes a strike, dealing Havoc DMG.`},
        {name:"Duality", des:`The next character (or other characters on a nearby team that activates an Outro Skill) gains 23% Havoc DMG Deepen for 14s or until they are switched off field.`},
        [{name:"Overflow", des:`After casting the Resonance Skill Sanguine Pulse, Danjin's Heavy Attack damage is increased by 30% for 5s.`},
        {name:"Crimson Light", des:`Damage of Resonance Skill Crimson Erosion triggered by Dodge Counter: Ruby Shades is increased by 20%. The HP cost and stacks of 'Ruby Blossom' recovered are doubled`}],
        [{name:" danjin stat bonus 1", des:`Havoc DMG Bonus increased by 12%.` },
        {name:" danjin stat bonus 2", des:`ATK increased by 12%.` }]
      
      ],
      
      team:[['rover (havoc)','verina','Partnership'],['mortefi','verina','BoomBaam 4star team',],['taoqi','baizhi','F2P option']], //the best team is in the middle with index 1 and the last index is the team name 
      
      teamdes:[["Havoc Rover benefits from Danjin's Deepen Outro skill and together they form one of the strongest teams in the game currently"],["mortfi as the best sub dps in the game--does his job"],['Taoqi can provide a shield and Resonance Skill DMG Deepen']],//should be of the same order as of team 
      
      resonance:[["Crimson Heart of Justice"],["Dusted Mirror"],["Fleeting Blossom"],["Solitary Carnation"],["Reigning Blade"],["Bloodied Jade"]],
      
      resodes:[
      /*1*/["When Danjin attacks a target with Resonance Skill's Incinerating Will, her ATK is increased by 5% for 6s, stacking up to 6 times. Danjin loses 1 stacks of this effect each time she takes damage."],
  
      /*2*/["'When Danjin attacks a target with Resonance Skill's Incinerating Will, her damage dealt is increased by 20%."],
  
      /*3*/["Resonance Liberation DMG Bonus is increased by 30%."],
  
      /*4*/["When Danjin has more than 60 'Ruby Blossom', her Crit. Rate is increased by 15%.This effect lasts until the end of Heavy Attack: Scatterbloom even after all 'Ruby Blossom' is consumed when casting Heavy Attack: Chaoscleave."],
     
      /*5*/["Danjin's Havoc DMG Bonus is increased by 15%, and further increased by another 15% when her HP is lower than 60%."],
  
      /*6*/["Heavy Attack Chaoscleave increases the ATK of all team members by 20% for 20s."]],
      
      resoprior:[1,5,6,2],//this shows the constellation priority great is the greater than symbol this means 2,4,1
     
      weapons:[33 ,25 ,22 ,23],// match the index of your weapon with the index in the allWeapon array in the order of weapon should be [1,4,2,3]

  weapnote:[{des:'The only limited time banner Sword in the game right now, with a passive with almost helps all the resonators this this one is a no brainer',role:'Best In Slot'},{des:'Sword option for Heavy and Basic ATK users with an easy to trigger passive - with the only downside being its 10 second time limit.', role:'Last Option'},{des:'A good option rn offering significantly higher base damage due to its 5★ rarity, as well as a stackable ATK% buff', role:'ALternative'},{des:'the shorter time on field the better. Best for Hybrid characters executing their rotation fast and infrequently', role:'Quick Swap'}],
      echobest:[11,24,9,14],// best 4 cost and 3 cost suar
      echosonata:[[8],[3]],
      echosub:{
        sub:['CRIT RATE/CRIT DMG','ATK%','Resonance Skill DMG', 'ATK'],
        main:[['Atk%'],['Crit RATE','Crit DMG'],['Havoc DMG']]}
  },
  {
      name:'mortefi',
      rarity :4,
      weapon:'pistols',
      region:'HUANG LONG',//should be in caps
      hbd:"6 November", 
      intro:"Fine, since you've done this much for me... Go ahead, tell me the wildest inventions you can think of, and watch me make them happen for you.",    
      element:'fusion',
      combatrole:['-','S','-',1], //some says 0 a a some say a a a .
     
      ascension:['Rage Tacet Core','Coriolus','LF Whisperin Core','MF Whisperin Core','HF Whisperin Core','FF Whisperin Core'],
     
      skillprior:[2,3,1,0,4],//priority 0 basic, 1 skill, 2 libration ,3 forte circuit , 4 intro skill
  
      skillcost:['Impure Phlogiston','Extracted Phlogiston','Refined Phlogiston','Flawless Phlogiston','Monument Bell','LF Whisperin Core','MF Whisperin Core','HF Whisperin Core','FF Whisperin Core'],
      
      skilldes:[{name:'Impromptu Show', des:`Basic Attack
  Mortefi uses his dual pistols and flames to perform up to 4 consecutive shots, dealing Fusion DMG.
  
  Heavy Attack
  Mortefi enters the aiming state for a more powerful shot.
  The aimed shot fired after charging finishes deals Fusion DMG.
  
  Mid-air Attack
  Mortefi consumes Stamina to perform consecutive shots at the target in mid-air, dealing Fusion DMG.
  
  Dodge Counter
  Use Basic Attack after a successful Dodge to attack the target, dealing Fusion DMG.`},
        {name:'Passionate Variation', des:`Launch a flashing lightning of flames forward, dealing Fusion DMG.`},
        {name:"Violent Finale", des:`Deal Fusion DMG, and apply Burning Rhapsody to all characters in the team.
        
        Burning Rhapsody
        When the on-field character’s Basic Attack hits the target, Mortefi launches a Coordinated Attack, firing 1 Marcato.
        When the on-field character’s Heavy Attack hits the target, Mortefi launches a Coordinated Attack, firing 2 Marcato.
        Mortefi can launch one Coordinated Attack every 0.35s.
        
        Marcato
        Deals Fusion DMG.`},
        {name:'Fury Fugue' , des :`Resonance Skill: Fury Fugue
        When Mortefi’s ‘Annoyance’ reaches 100, his Resonance Skill is replaced with Fury Fudge.
        When casting Fury Fudge, Mortefi consumes all ‘Annoyance’ to unleash high-speed flame lightning, dealing Fusion DMG, considered as Resonance Skill damage.
        
        Annoyance
        Mortefi can hold up to 100 Annoyance.
        When Normal Attack Impromptu Show hits the target, “Annoyance” is restored.
        When Intro Skill Dissonance hits the target, “Annoyance” is restored.
        When Resonance Skill Passionate Variation hits the target, “Annoyance” is restored.
        Within 5s after casting Passionate Variation, Basic Attack Impromptu that hits the target additionally restores “Annoyance”.`},
        {name:'Dissonance', des:`Attack the target, dealing Fusion DMG.`},
        {name:"Rage Transposition", des:`The next character (or other characters on a nearby team that activates an Outro Skill) gains 38% Heavy Attack DMG Deepen for 14s or until they are switched off field.`},
        [{name:"Rhythmic Vibrato", des:`During Resonance Liberation Burning Rhapsody, each hit of Resonance Liberation Marcato will increase the damage of the next Resonance Liberation Marcato by 1.50%, which can be triggered once every 0.35s, stacking up to 50 times.
        The effect will be reset after Resonance Liberation Burning Rhapsody ends.`},
        {name:"Harmonic Control", des:`After casting Resonance Skill Passionate Variation, the damage of Resonance Skill Fury Fugue is increased by 25% for 8s.`}],
        [{name:" mortefi stat bonus 1", des:`Fusion DMG Bonus increased by 12%.` },
        {name:" mortefi stat bonus 2", des:`ATK increased by 12%.` }]
          
      ],
      
      team:[['jinhsi','verina','Stack Passive Powerhouse'],['jiyan','verina',"Jiyan's Power Trio",],['rover (havoc)','baizhi','F2P option']],
    
      teamdes:[["Jinhsi relies on teammates coordinated Attack to maximize the rate of stacking “Incandescence” in order to maximize the damage of enhanced skill- mortefi as a great sub dps fills up this place pretty well"],["The main damage type of Jiyan is Heavy Attack Damage. Morfeti’s Outro Skill provides Heavy Attack DMG Deepen, making Morfeti the best teammate for Jiyan."],['Everyone literally works with mortfi']],
      
      resonance:[["Solitary Etude"],["Hypocritical Hymn"],["Flaming Recitativo"],["Cathartic Waltz"],["Funerary Quartet"],["Apoplectic Instrumental"]],
      
      resodes:[
      /*1*/["During Resonance Liberation Burning Rhapsody, Mortefi launches Coordinated Attacks when the on-field character performs their Resonance Skills, firing 2 Resonance Liberation's Marcato hits, dealing Fusion Damage."],
  
      /*2*/["'After using the Echo Skill, Mortefi restores an additional 10 Resonance Energy. This can be triggered once every 20 second."],
  
      /*3*/["During Resonance Liberation Burning Rhapsody, the Crit. DMG of Resonance Liberation's Marcato is increased by 30%."],
  
      /*4*/["The duration of Resonance Liberation Burning Rhapsody is extended by 7s."],
      
      /*5*/["When Resonance Skill Passionate Variation or Resonance Skill Draconic Hellfire hits a target, 4 Resonance Liberation's Marcato hits will be fired, dealing Fusion Damage. DMG of Resonance Liberation's Marcato fired in this way is reduced by 50%."],
      
      /*6*/["When Resonance Liberation Violent Finale is cast, ATK of all team members is increased by 20% for 20s."]],
      
      resoprior:[6,4,1],//this shows the constellation priority great is the greater than symbol this means 2,4,1
     
      weapons:[26,28,27,29],// match the index of your weapon with the index in the allWeapon array in the order of weapon should be [1,4,2,3]
     
      weapnote:[{des:'Best gun in the game, offering CRIT RATE, granting better Crit ratios, great base damage, and a good amount of Energy Regen',role:'Best In Slot'},{des:'you dont need this, u need jesus', role:'F2P'},{des:'One of the top gun options for Resonators that deals primarily Resonance Skill DMG with little to no conditions to worry about thanks to its effect being tied to Intro skills.', role:'Good Option'},{des:'A utility-focused weapon prioritizing lightning-fast Concerto rotations over raw output with the ability to transform entire units action priorities under the right circumstances.', role:'F2P'}],
      
      
        echobest:[6,17], // best 4 cost and 3 cost
        echosonata:[[5]],
        echosub:{
          sub:['Energy Regen','CRIT RATE/CRIT DMG', 'ATK%', 'Resonance Skill DMG','Resonance Liberation DMG', 'ATK'],
          main:[['Atk%'],['Crit RATE','Crit DMG'],['Energy Regen','Fusion DMG']]}, // 1   4   3 
  },
  {
      name:'sanhua',
      rarity :4,
      weapon:'sword',
      region:'HUANG LONG',//should be in caps
      hbd:"20 January", 
      intro:"Please don't stay too far away from me. I am confident to not let you get harmed in the slightest.",    
      element:'glacio',
      combatrole:['-','S','-',1], //some says 0 a a some say a a a .
     
      ascension:['Sound-Keeping Tacet Core','Wintry Bell','LF Whisperin Core','MF Whisperin Core','HF Whisperin Core','FF Whisperin Core'],
     
      skillprior:[2,3,1,4,0],//priority 0 basic, 1 skill, 2 libration ,3 forte circuit , 4 intro skill
  
      skillcost:['Inert Metallic Drip', 'Reactive Metallic Drip', 'Polarized Metallic Drip' ,'Heterized Metallic Drip','Unending Destruction','LF Whisperin Core','MF Whisperin Core','HF Whisperin Core','FF Whisperin Core'],
      
      skilldes:[{name:'Frigid Light', des:`Basic Attack
  Sanhua performs up to 5 consecutive attacks, dealing Glacio DMG.
  
  Heavy Attack
  Sanhua consumes Stamina to launch attacks, dealing Glacio DMG.
  
  Mid-air Attack
  anhua consumes Stamina to perform a Mid-Air Plunging Attack, dealing Glacio DMG.
  
  Dodge Counter
  Use Basic Attack after a successful Dodge to attack the target, dealing Glacio DMG.`},
        {name:'Eternal Frost', des:`Sanhua sends an air blade to create 1 ‘Ice Prism’ on the ground, dealing Glacio DMG.`},
        {name:"Glacial Gaze", des:`Sanhua deals Glacio DMG and creates 1 ‘Glacier’.`},
        {name:'Clarity of Mind' , des :`Heavy Attack: Detonate
  When holding Basic Attack, a cursor moves back and forth on the Forte Gauge. Release Basic Attack while cursor falls in the ‘Frostbite’ area, to perform Heavy Attack Detonate, dealing Glacio DMG considered as Heavy Attack damage.
  
  Ice Burst
  Sanhua’s Heavy Attack Detonate detonates all ‘Ice Thorns’, ‘Ice Prisms’ and ‘Glaciers’ within her attack range, dealing Glacio DMG. DMG done by Ice Burst is considered as Resonance Skill damage.
  
  Frostbite Area
  The ‘Frostbite’ area expands with every 1 stack of ‘Clarity’. ‘Clarity’ stacks up to 2 times.
  Sanhua obtains 1 stack of ‘Clarity’ upon performing Basic Attack 5.
  Sanhua obtains 1 stack of ‘Clarity’ upon casting Intro Skill Freezing Thorns.
  Sanhua obtains 1 stack of ‘Clarity’ upon casting Resonance Skill Eternal Frost.
  Sanhua obtains 2 stack(s) of ‘Clarity’ upon casting Resonance Liberation Glacial Gaze.
  Upon casting Heavy Attack Detonate, all ‘Clarity’ is removed.`},
        {name:'Freezing Thorns', des:`Sanhua swings her blade downward and creates 1 'Ice Thorn', dealing Glacio DMG.`},
        {name:"Silversnow", des:`The next character (or other characters on a nearby team that activates an Outro Skill) gains 38% Basic Attack DMG Deepen for 14s or until they are switched off field.`},
        [{name:"Avalanche", des:`Damage dealt by Sanhua's Forte Circuit Ice Burst is increased by 20% for 8s after casting Basic Attack 5.`},
        {name:"Condensation", des:`Damage dealt by Sanhua's Resonance Skill increased by 20% for 8s after casting her Intro Skill.`}]  ,
        [{name:" sanhua stat bonus 1", des:`Glacio DMG Bonus increased by 12%.` },
        {name:" sanhua stat bonus 2", des:`ATK increased by 12%.` }]
          
      ],
      
      team:[['jianxin','verina',' Quick swap'],['encore','verina','Kill Squard',],['yangyang','baizhi','F2P option']], //the best team is in the middle with index 1 and the last index is the team name 
      
      teamdes:[
          ["Jianxin can gather enemies, helping Sanha achieve maximum burst damage when facing multiple targets. Additionally, Jianxin’s Outro Skill provides Resonance Liberation DMG"],
          ["Encore requires a large amount of field time and deals a good chunk of her damage with Basic ATK's making Sanhua a great partner for her."],['Yangyang with some croud control, for the f2p players']],//should be of the same order as of team 
      
      resonance:[["Solitude's Embrace"],["Snowy Clarity"],["Anomalous Vision"],["Blade Mastery"],["Unraveling Fate"],["Daybreak Radiance"]],
      
      resodes:[
      /*1*/["Basic Attack V increases Sanhua's Crit. Rate by 15% for 10s."],
      
      /*2*/["'Stamina cost of Heavy Attack Detonate is reduced by 10. When Sanhua casts Resonance Skill Eternal Frost, her Anti-interruption is enhanced for 10s."],
      
      /*3*/["Sanhua's damage dealt is increased by 35% against targets with HP below 70%."],
      
      /*4*/["Resonance Liberation Glacial Gaze restores 10 Resonance Energy.DMG of the next Heavy Attack Detonate within 5s is increased by 120%."],
      
      /*5*/["Crit. DMG of Forte Circuit Ice Burst is increased by 100%. Ice Creations (Ice Thorn, Ice Prism, and Glacier) will explode even if they are not detonated."],
      
      /*6*/["After an Ice Prism or a Glacier is detonated, all team members' ATK is increased by 10% for 20s, stacking up to 2 times."]],
      
      resoprior:[6,3,4],//this shows the constellation priority great is the greater than symbol this means 2,4,1
      
      weapons:[ 33 , 24, 22 , 23],// match the index of your weapon with the index in the allWeapon array in the order of weapon should be [1,4,2,3]
   
      weapnote:[{des:'The only limited time banner Sword in the game right now, with a passive with almost helps all the resonators this this one is a no brainer',role:'Best In Slot'},{des:'A utility-focused weapon prioritizing lightning-fast Concerto rotations over raw output with the ability to transform entire units action priorities under the right circumstances.', role:'Last Option'},{des:'A good option rn offering significantly higher base damage due to its 5★ rarity, as well as a stackable ATK% buff', role:'ALternative'},{des:'the shorter time on field the better. Best for Hybrid characters executing their rotation fast and infrequently', role:'Quick Swap'}],
      
        echobest:[6,8,12,17], // best 4 cost and 3 cost
        echosonata:[[2],[5]],
        echosub:{
          sub:['Energy Regen','CRIT RATE/CRIT DMG', 'ATK%', 'ATK'],
          main:[['Atk%'],['Crit RATE','Crit DMG'],['Glacio DMG']]}, // 1   4   3 
  },
  {
      name:'taoqi',
      rarity :4,
      weapon:'broadblade',
      region:'HUANG LONG',//should be in caps
      hbd:"25 Febuary", 
      intro:"Phew... All set. Time for a little break.",    
      element:'havoc',
      combatrole:['-','B','-',1], //some says 0 a a some say a a a .
     
      ascension:['Gold-Dissolving Feather','Iris','LF Howler Core','MF Howler Core','HF Howler Core','FF Howler Core'],
     
      skillprior:[2,3,1,4,0],//priority 0 basic, 1 skill, 2 libration ,3 forte circuit , 4 intro skill
  
      skillcost:['Waveworn Residue 210','Waveworn Residue 226','Waveworn Residue 235','Waveworn Residue 239','Dreamless Feather','LF Howler Core','MF Howler Core','HF Howler Core','FF Howler Core'],
      
      skilldes:[{name:'Concealed Edge', des:`Basic Attack
  Taoqi performs up to 4 continuous attacks, dealing Havoc DMG.
  
  Heavy Attack
  Taoqi consumes Stamina and enters Rocksteady Defense state.
  
  Rocksteady Defense
  Taoqi’s damage taken is reduced by 35%;
  -When Taoqi is attacked during Rocksteady Defense, she will cat Strategic Parry;
  -Strategic Parry is automatically cast after Rocksteady Defense lasts for 3s;
  -If Taoqi is attacked when casting Resonance Skill Rocksteady Shield, Strategic Parry is automatically cast.
  
  Strategic Parry
  Taoqi attacks the target, dealing Havoc DMG.
  
  Mid-air Attack
  Taoqi consumes Stamina to perform a Mid-Air Plunging Attack, dealing Havoc DMG.
  
  Dodge Counter
  Use Basic Attack after a successful Dodge to attack the target, dealing Havoc DMG.`},
        {name:'Fortified Defense', des:`Taoqi deals Havoc DMG to surrounding targets, generating 3 Rocksteady Shield and restoring HP to Taoqi.
  If attacked when casting Fortified Defense, Strategic Parry will be automatically cast.
  
  Rocksteady Shield
  When the active character is attacked, 1 Rocksteady Shield is consumed to reduce the damage taken.`},
        {name:"Unmovable", des:`Launch an attack based on Taoqi’s DEF on the target, dealing Havoc DMG.`},
        {name:'Power Shift' , des :`Timed Counters
  When carrying ‘Resolving Caliber’, use Basic Attack after Heavy Attack: Strategic Parry or Intro Skill: Defense Formation to cast Timed Counters, performing up to 3 consecutive attacks, dealing Havoc DMG, considered as Basic Attack damage.
  Timed Counters consume 1 ‘Resolving Caliber’ upon hitting an enemy to grant a shield.
  After casting the Intro Skill Defense Formation, using Basic Attack can directly cast Timed Counters.
  
  Resolving Caliber
  Taoqi can hold up to 3 Resolving Caliber.
  Basic Attack 4 will consume all of Taoqi’s Rocksteady Shields to obtain that many ‘Resolving Caliber’.
  While Rocksteady Shield exists, when the on-field character is attacked, 1 Rocksteady Shield will be consumed, and ‘Resolving Caliber’ is recovered.
  After Rocksteady Shield ends, all remaining Rocksteady Shield will be consumed to grant that many ‘Resolving Caliber’.`},
        {name:'Defense Formation', des:`Attack the target, dealing Havoc DMG.`}, 
        {name:"Iron Will", des:`The next character (or other characters on a nearby team that activates an Outro Skill) gains 38% Resonance Skill DMG Deepen for 14s or until they are switched off field.`},
        [{name:"Unyielding", des:`After Heavy Attack: Strategic Parry is successfully triggered, 25 Stamina is recovered.`},
        {name:"Steadfast Protection", des:`During the duration of the Resonance Skill Rocksteady Shield, the Character's DEF is increased by 15%.`}]  ,
        [{name:" name stat bonus 1", des:`Havoc DMG Bonus increased by 12%.` },
        {name:" name stat bonus 2", des:`DEF increased by 15.2%.` }]
          
  
      ],
      
      team:[['rover (havoc)','baizhi','second Best Team'],['rover (havoc)','verina','Best Team',]], //the best team is in the middle with index 1 and the last index is the team name 
      
      teamdes:[
          ["Baizhi as a secondary option"],
          ["Taoqi can help ensure Rover (Havoc)’s survival during the “Dark Surge”. "]],//should be of the same order as of team 
      
      resonance:[["Essense of Tranquility"],["Silent Strength"],["Keen-eyed Observer"],["Heavylifting Duty"],["Benevolent Guardian"],["Defender of Peace"]],
      
      resodes:[
      /*1*/["Forte Circuit Power Shift's Shield is increased by 40%."],
      
      /*2*/["'The Crit. Rate and Crit. DMG of Resonance Liberation Unmovable is increased by 20% and 20%, respectively."],
      
      /*3*/["The duration of Resonance Skill Rocksteady Shield is extended to 30s."],
      
      /*4*/["When Taoqi successfully triggers Heavy Attack Strategic Parry, she restores 25% HP and increases her DEF by 50% for 5s. This can be triggered once every 15s."],
      
      /*5*/["The damage of Forte Circuit Power Shift is increased by 50%. When Forte Circuit Power Shift hits a target, restore 20 Resonance Energy."],
      
      /*6*/["The damage of Taoqi's Basic Attack and Heavy Attack is increased by 40% while the Shield granted by Resonance Skill Rocksteady Shield holds."]],
      
      resoprior:[4,5,6,2],//this shows the constellation priority great is the greater than symbol this means 2,4,1
     
      weapons:[20,14,21,16],//[1,4,2,3]
      
      weapnote:[
          {des:'taoqi could get help from the energy regen',role:'Best In Slot'}, //1
          {des:'u should consider building some other character', role:'overcrit'}, //4
          {des:'Since she scales off defence more defnece is always usefull', role:'Good Option'}, //2
          {des:'could work on her', role:'F2P'}], //3
          
      
        echobest:[6,17,14], // best 4 cost and 3 cost
        echosonata:[[5,6]],
        echosub:{
          sub:['Energy Regen','DEF%','DEF'],
          main:[['DEF%'],['DEF%'],['Energy Regen','DEF%']]}, // 1   4   3 
  },
  {
      name:'yangyang',
      rarity :4,
      weapon:'sword',
      region:'HUANG LONG',//should be in caps
      hbd:"11 October", 
      intro:"I hope I can be the one to embrace all that you are, and share with you all that you carry.",    
      element:'aero',
      combatrole:['C','A','-',1], //some says 0 a a some say a a a .
     
      ascension:['Roaring Rock Fist','Wintry Bell','Crude Ring','Basic Ring','Improved Ring','Tailored Ring'],
     
      skillprior:[3,2,1,4,0],//priority 0 basic, 1 skill, 2 libration ,3 forte circuit , 4 intro skill
  
      skillcost:['Inert Metallic Drip','Reactive Metallic Drip','Polarized Metallic Drip','Heterized Metallic Drip','Unending Destruction','Crude Ring','Basic Ring','Improved Ring','Tailored Ring'],
      
      skilldes:[{name:'Feather as Blade', des:`Basic Attack
  Yangayang performs up to 4 consecutive attacks, dealing Aero DMG.
  
  Heavy Attack
  Yangyang consumes Stamina to lunge forward, dealing Aero DMG.
  
  Heavy Attack: Zephyr Song
  Use Basic Attack after Heavy Attack or Dodge Counter to perform Heavy Attack Zephyr Song, dealing Aero DMG.
  
  Mid-air Attack
  Yangyang consumes Stamina to perform a Plunging Attack from mid-air, dealing Aero DMG.
  
  Dodge Counter
  Use Basic Attack after a successful Dodge to thrust forward, dealing Aero DMG.`},
        {name:'Zephyr Domain', des:`Yangyang wields her sword to create a whirling vortex of winds that gathers nearby enemies to the center, dealing Aero DMG.`},
        {name:"Wind Spirals", des:`Yangyang conjures a mighty Cyclone that gathers nearby enemies, dealing Aero DMG.`},
        {name:'Echoing Feathers' , des :`Heavy Attack: Stormy Strike
  When Yangyang has 3 Melodies, she can cast Stormy Strike after Heavy Attack, dealing Aero DMG.
   
  Mid-air Attack: Feather Release
  When Yangyang has 3 Melodies, casting Basic Attacks in mid-air will cause her to consume all Melodies, perform consecutive strikes, and dive from mid-air, dealing Aero DMG. As Yangyang lands, she sheathes her sword with an attack, dealing Aero DMG. This attack is considered as Basic Attack.
   
  Melody
  Yangyang can hold up to 3 Melodies
  Yangyang obtains 1 Melody with every Basic Attack 4 on hit.
  Yangyang obtains 1 Melody for every Zephyr Song on hit.
  Yangyang obtains 1 Melody for every Resonance Skill Zephyr Domain on hit.
  Yangyang obtains 1 Melody upon casting Intro Skill Cerulean Song.`},
        {name:'Cerulean Song', des:`Yangyang sends the target into the air, dealing Aero DMG.`},
        {name:"Whispering Breeze", des:`Yangyang recovers 4 Resonance Energy per second over 5s for the next character (or other characters on a nearby team that activates an Outro Skill).`},
        [{name:"Lazuline Mercy", des:`Yangyang's Aero DMG Bonus is increased by 8% for 8s after casting Intro Skill Cerulean Song.`},
        {name:"Compassion", des:`Yangyang recovers 30 STA after she casts a Mid-air Attack Feather Release.`}]  ,
        [{name:" yangyang stat bonus 1", des:`Aero DMG Bonus increased by 12%.` },
        {name:" yangyang stat bonus 2", des:`ATK increased by 12%.` }]
          
  
  
      ],
      
      team:[['jianxin','danjin','Stack passive Midloaded'],['jiyan','verina','Best Team',],['rover (havoc)','baizhi','F2P ']], //the best team is in the middle with index 1 and the last index is the team name 
      
      teamdes:[
          ["A high risk , high reward team with jianxin as the main sustainer and danjin with her powerful dps output"],
          ["yangynag to make jiyan's life easier by giving him some croud control and energy from her outro skill"],
          ["A good F2P option"]],//should be of the same order as of team 
      
      resonance:[["Sapphire Skies, Soaring Sparrows"],["Nesting Twigs, in Beaks They Harrow"],["Nature Sings in Symphony"],["Close Your Eyes and Listen in"],["Winds Whisper in Harmony"],["A Tribute to Life's Sweet Hymn"]],
      
      resodes:[
      /*1*/["Intro Skill Cerulean Song increases Yangyang's Aero DMG Bonus by an additional 15% for 8s."],
      
      /*2*/["'Heavy Attack recovers an additional 10 Resonance Energy for Yangyang when it hits a target, which can be triggered 1 time every 20s."],
      
      /*3*/["Resonance Skill DMG Bonus is increased by 40%. The Wind Field's pulling effect on surrounding targets is enhanced, and the pulling range is expanded by 33%."],
      
      /*4*/["Mid-Air Attack Feather Release's damage is increased by 95%."],
      
      /*5*/["Resonance Liberation Wind Spirals's damage is increased by 85%."],
      
      /*6*/["After casting Mid-Air Attack Feather Release, the ATK of all team members is increased by 20% for 20s."]],
      
      resoprior:[2],//this shows the constellation priority great is the greater than symbol this means 2,4,1
      weapons:[ 33 , 24, 22 , 23],// match the index of your weapon with the index in the allWeapon array in the order of weapon should be [1,4,2,3]
   
      weapnote:[{des:'The only limited time banner Sword in the game right now, with a passive with almost helps all the resonators this this one is a no brainer',role:'Best In Slot'},{des:'A utility-focused weapon prioritizing lightning-fast Concerto rotations over raw output with the ability to transform entire units action priorities under the right circumstances.', role:'Last Option'},{des:'A good option rn offering significantly higher base damage due to its 5★ rarity, as well as a stackable ATK% buff', role:'ALternative'},{des:'the shorter time on field the better. Best for Hybrid characters executing their rotation fast and infrequently', role:'Quick Swap'}],
        echobest:[6,17], // best 4 cost and 3 cost
        echosonata:[[5]],
        echosub:{
          sub:['Energy Regen','CRIT RATE/CRIT DMG', 'ATK%', 'ATK', 'Resonance Liberation DMG','Bascic DMG%'],
          main:[['Atk%'],['Crit RATE','Crit DMG'],['Aero DMG','Energy Regen']]}, // 1   4   3 
  },
  {
      name:'yuanwu',
      rarity :4,
      weapon:'gauntlets',
      region:'HUANG LONG',//should be in caps
      hbd:"2 October", 
      intro:"Assuming I've thought my decisions through and acted with integrity, I am content.",    
      element:'electro',
      combatrole:['-','A','-',1], //some says 0 a a some say a a a .
     
      ascension:['Roaring Rock Fist','Terraspawn Fungus','Crude Ring','Basic Ring','Improved Ring','Tailored Ring'],
     
      skillprior:[2,1,3,4,0],//priority 0 basic, 1 skill, 2 libration ,3 forte circuit , 4 intro skill
  
      skillcost:[
        'Cadence Seed',
        'Cadence Bud',
        'Cadence Leaf',
        'Cadence Blossom',
        'Unending Destruction',
        'Crude Ring',"Basic Ring","Improved Ring","Tailored Ring"],
      
      skilldes:[{name:'Leihuangquan', des:`Basic Attack
  Yuanwu performs up to 5 consecutive attacks, dealing Electro DMG.
  
  Heavy Attack
  Yuanwu consumes Stamina to attack the target, dealing Electro DMG.
  
  Mid-air Attack
  Yuanwu consumes Stamina to launch a Mid-air Plunging Attack, dealing Electro DMG.
  
  Dodge Counter
  Use Basic Attack after a successful Dodge to attack the target, dealing Electro DMG.`},
        {name:'Leihuang Master', des:`Thunder Wedge
  Yuanwu summons Thunder Wedge, dealing Electro DMG, and forms a Thunder Field centered on the Thunder Wedge. Thunder Wedge lasts for 12s.
  Forte Circuit Rumbling Spark and Resonance Liberation Blazing Might will immediately detonate Resonance Skill Thunder Wedge on the field, dealing Electro DMG, considered as Resonance Skill Damage.
  
  Thunder Field
  The on-field character gains the effects below when in the Thunder Field: a Coordinated Attack from Resonance Skill Thunder Wedge is triggered when attacks hit a target, dealing Electro DMG. This can be triggered once every 1.2s. The effect lasts for 1.5s.`},
        {name:"Blazing Might", des:`Awaken the power of thunder and provide Forte Circuit Lightning Infused status for all nearby characters for 10s, granting them increased Anti-interruption, then perform a powerful blow that deals Electro DMG.`},
        {name:'Unassuming Blade' , des :`Rumbling Spark
  When ‘Readiness’ is full, long press Resonance Skill to consume all ‘Readiness’ and cast Rumbling Spark, dealing Electro DMG and entering the Lightning Infused state.
  
  Thunder Uprising
  When you have full ‘Readiness’, Resonance Skill Thunder Wedge will cast Thunder Uprising, dealing Electro DMG.
  
  Lightning Infused
  The character in Lightning Infused state has a greatly increased anti-interruption.
  When Yuanwu is in this state:
  -Basic Attacks: Hits targets in a larger range, depletes enemy Vibration Strength faster;
  -Heavy Attacks: Attack speed is increased, deplete enemy Vibration Strength faster;
  -Dodge Counters: Attack speed is increased, deplete enemy Vibration Strength faster.
  -Use Basic Attack within 3s after casting a Heavy Attack or a successful Counterattack to cast Thunderweaver, dealing Electro DMG, considered as Basic Attack damage;
  Yuanwu does not recover ‘Readiness’ in this state.
  
  Readiness
  Yuanwu can hold up to 100 ‘Readiness’.
  When Resonance Skill Thunder Wedge is on the field, Yuanwu gains 6 ‘Readiness’ every second, even when he is not the on-field character;
  When Resonance Skill Thunder Wedge hits a target with a Coordinated Attack, Yuanwu gains 5 ‘Readiness’.`},
        {name:'Thunder Bombardment', des:`Attack the target, dealing Electro DMG.`},
        {name:"Lightning Manipulation", des:`Yuanwu unleashes thunderbolts in an area centered around the skill target, weakening the Vibration Strength of enemies upon impact.`},
                [{name:"Reserved Confidence", des:`The ranges of the Resonance Skill Thunder Field and Thunder Uprising are greatly expanded. When exiting during combat, if Readiness is not full, Yuanwu will automatically leave 1 Resonance Skill Thunder Wedge in place.`},
                {name:"Thunderweaver", des:`The damage multiplier of Resonance Skill Thunder Uprising is increased by 40%, and its depletion of enemy Vibration Strength is enhanced.`}]  ,
                [{name:" yuannwu stat bonus 1", des:`Electro DMG Bonus increased by 12%.` },
                {name:" yuanwu stat bonus 2", des:`DEF increased by 15.2%.` }]
                  
  
      ],
      
      team:[['jianxin','baizhi','Jianxin Carries'],['jinhsi','verina','Stack Passive Power',],['rover (havoc)','baizhi','F2P Option']],//the best team is in the middle with index 1 and the last index is the team name 
      
      teamdes:[
          ["A quick swap team with Jianxin using the weapon (Originite: Type IV) not suitbale for some people"],
          ["Yuanwu offers a consistent permanently accessible Electro Coordinated Attack to assist with stacking up Jinhsi's Forte Gauge"],
          ["Okish good F2P option"]],//should be of the same order as of team 
          
      resonance:[["Steaming Cup of Justice"],["Fierce Heart, Serene Mind"],["Upholder of Integrity"],["Retributive Knuckles"],["Neighborhood Protector"],["Defender of All Realms"]],
      
      resodes:[
      /*1*/["When Yuanwu is in Forte Circuit's Lightning Infused state, his Basic Attack Speed is increased by 20%, and his Heavy Attack Speed is increased by 20%."],
      
      /*2*/["'Intro Skill Thunder Bombardment additionally recovers 15 Resonance Energy for Yuanwu."],
      
      /*3*/["When the Coordinated Attacks of Resonance Skill's Thunder Wedge hits a target, the damage is additionally increased by 20% of Yuanwu's DEF."],
      
      /*4*/["When casting Resonance Liberation Blazing Might, the on-field character will gain a Shield equal to 200% of Yuanwu's DEF for 10s."],
      
      /*5*/["When Resonance Skill Thunder Wedge is on the field, Yuanwu's Resonance Liberation DMG Bonus is increased by 50%."],
      
      /*6*/["All team members nearby within the range of Resonance Skill Thunder Wedge will gain a 32% DEF increase, lasting 3s."]],
      
      resoprior:[2,1],//this shows the constellation priority great is the greater than symbol this means 2,4,1
      
      weapons:[8,10,32,12],//[1,4,2,3]
      
      weapnote:[
          {des:'5 star weapon providing higher croit stats for a sub dps role',role:'Best In Slot'}, //1
          {des:'you dont need this, u need jesus', role:'F2P'}, //4
          {des:`A good weapon for a supporting role`, role:'ALternative'}, //2
          {des:`I am out of words now , u can use this if u wanna...`, role:'F2P'}], //3
          
      
        echobest:[6,17], // best 4 cost and 3 cost
        echosonata:[[5]],
        echosub:{
          sub:['Energy Regen','CRIT RATE/CRIT DMG', 'DEF%','DEF'],
          main:[['DEF%'],['Crit RATE','Crit DMG'],['Electro DMG',
          'DEF%'
          ]]}, // 1   4   3 
  }
  ]
  
  
  

const App = () => {

  const [selectedCardElement, setSelectedCardElement] = useState("null");
  const buttonNames = ['spectro', 'aero', 'fusion', 'electro', 'glacio', 'havoc'];

  const handleButtonClick = (element) => {
    setSelectedCardElement(element);
  };
  const resetCard=()=>{
    selectedCardElement("null")
  }

  const router = createBrowserRouter([
    {
      path:"/Guide/:param",
      element:<>
      <ScrollToTop />
      <Navbar buttonNames={buttonNames} onButtonClick={handleButtonClick} resetCard={resetCard} />
      <Charinfo charData={charData} weapons={allWeapon} allEchoes={allEchoes} allSonata={allSonata}/>
      <Footer />
      </>
    },
    {
      path:"/Guide",
      element:
      <>
      <ScrollToTop />
      <Navbar buttonNames={buttonNames} onButtonClick={handleButtonClick} resetCard={resetCard} />
      <Cards charData={charData} selectedCardElement={selectedCardElement} />
      <Footer />
      </>
    },
    {
      path:"/",
      element:<>
      <ScrollToTop />
      <Home latestChar={charData[0]}  allWeapon={allWeapon} allEchoes={allEchoes} />
      </>,
      errorElement:<h1 className="text-gray-200">ERROR:???</h1>
    }
  ])

  return (
    <>   
      <RouterProvider router={router}/>
    </>
  )
}
export default App