const alplha=[{name:'ref',des:'pol'},{name:'romio',des:'thef'}]
const allWeapon =[
       
    //rectifier
        {name:'Stringmaster',rarity:5, des:"Increases the DMG Bonus of all Resonance Attributes by 12%/15%/18%/21%/24%. When Resonance Skill hits a target, increases ATK by 12%/15%/18%/21%/24%, stacking up to 2/2/2/2/2. When the equipped character is not on the field, increases their ATK by an additional 12%/15%/18%/21%/24%.",sub:'ATK: 500 |Crit Rate: 36%'},//0
        
        {name:'Cosmic Ripples',rarity:5, des:"Increases Energy Regen by 12.8%/16%/19.2%/22.4%/25.6%. When hitting a target with Basic Attacks, increases Basic Attack DMG Bonus by 3.2%/4%/4.8%/5.6%/6.4%, stacking up to 5/5/5/5/5 time(s). This effect lasts for 8/8/8/8/8s and can be triggered 1/1/1/1/1 time(s) every 0.5/0.5/0.5/0.5/0.5s.",sub:'ATK : 500 | ATK% : 54%'},//1
        
        {name:'Jinzhou Keeper',rarity:4, des:"When Intro Skill is released, increases the caster’s ATK by 8%/10%/12%/14%/16% and HP by 10%/12.5%/15%/17.5%/20%, lasting for 15s.",sub:'ATK : 387 | 12% crit rate'},//2
        
        {name:'Negikimeegi',rarity:4, des:"the best weapon less goo I will kill each and every man alive headifjdslkfjlskdjf",sub:'45% crit rate'},//3 , this is a useless slot but i cant change it now
        
        {name:'Augment',rarity:4, des:"When Resonance Liberation is released, increases the caster’s ATK by 15%/23.25%/31.5%/39.75%/48%, lasting for 15/15/15/15/15s.",sub:'ATK : 412 | Crit Rate : 20.2%'},//4
    
        {name:'Variation',rarity:4, des:"When Resonance Skill is released, restores Concerto Energy by 8/10/12/14/16. This effect can be triggered 1 time every 20s.",sub:'ATK : 337 | Energy Regen : 51.8%'}, //5
    
        {name:'Rectifier25',rarity:4, des:"When Resonance Skill is released, if the Resonator’s HP is below 60%, restores their HP by 5%/6.25%/7.5%/8.75%/10%. This effect can be triggered 1 time(s) every 8s; if the Resonator’s HP is above 60%, increases ATK by 12%/15%/18%/21%/24%, lasting for 10s.",sub:'ATK : 337 | atk% 45'},//6
    
        {name:'Rectifier of Voyager',rarity:3, des:"When Resonance Skill is released, restores Resonance Energy by 8/9/10/11/12. This effect can be triggered 1 time(s) every 20s.",sub:'ATK : 300 | 65% enery'}, //7
    
    //gauntlets
        {name:'Abyss Surges',rarity:5, des:"SUITABLE FOR DPS/ SUB DPS CONFIG   The only avialable 5 star option  Increases Energy Regen by 12.8%. When hitting a target with Resonance Skill, increases Basic Attack DMG Bonus by 10%, lasting for 8s. When hitting a target with Basic Attacks, increases Resonance Skill DMG Bonus by 10%, lasting for 8s. ",sub:'ATK: 587 | ATK: 36.4%'}, //8
    
        {name:'Originite Type IV',rarity:3, des:"When hitting a target with Basic Attacks, restores HP by 1.1%. This effect can be triggered 1 time(s) every 3s.",sub:'ATK: 300 | CRIT DMG: 40.5%'}, //9
        
        {name:'Marcato',rarity:4, des:"When Resonance Skill is released, restores Concerto Energy by 8. This effect can be triggered 1 time every 20s.",sub:'ATK: 337 | Energy Reg.: 51.8%'}, //10
    
        {name:'Hollow Mirage',rarity:4, des:"When Resonance Liberation is released, grants 3 stack(s) of Iron Armor. Each stack increases ATK and DEF by 3%, stacking up to 3 time(s). When the Resonator takes damage, reduces the number of stacks by 1.",sub:' ATK: 412 | ATK: 30.3%'}, //11
    
        {name:'Stonard',rarity:4, des:"When Resonance Skill is released, increases the caster’s Resonance Liberation DMG Bonus by 18%/27%/36%/45%/54%, lasting for 15/15/15/15/15s.",sub:' ATK: 412 | CRIT RATE:20.3%'} ,//12
    
        {name:'Gauntlets21D',rarity:4, des:"When the Resonator dashes or dodges, increases ATK by 8%/10%/12%/14%/16%. Increases Counter Attack DMG by 50%/62.5%/75%/87.5%/100%, lasting for 8/8/8/8/8s. When Counter Attack is performed, restores the Resonator’s HP by 5%/6.25%/7.5%/8.75%/10%. This effect can be triggered 1/1/1/1/1 time(s) every 6/6/6/6/6s.",sub:' ATK: 387 | ENERGY REGEN:38.8%'} , //13
    
    
    //broadblade
        {name:'Lustrous Razor',rarity:5, des:"Increases Energy Regen by 12.8%. When Resonance Skill is released, increases Resonance Liberation DMG by 7%, stacking up to 3 times. This effect lasts for 12s.",sub:'ATK: 587 | ATK: 36.4%'} ,//14
    
        {name:'Verdant Summit',rarity:5, des:"the Increases the DMG Bonus of all Resonance Attributes by 12%. Every time Intro Skill or Resonance Liberation is cast, increases Heavy Attack DMG Bonus by 24%, stacking up to 2 time(s). This effect lasts for 14s.",sub:'ATK: 587 | CRIT DMG: 48.6%'}, //15
    
        {name:'Autumntrace',rarity:4, des:"Increases ATK by 12.8% upon dealing Basic Attack DMG or Heavy Attack DMG, stacking up to 5 time(s). This effect lasts for 7s and can be triggered 1 time(s) every 1s.",sub:'ATK: 412 | CRIT Rate: 20.2%'}, //16
    
        {name:'Helios Cleaver',rarity:4, des:"Within 12s after Resonance Skill is released, increases ATK by 6% every 2s, stacking up to 4 time(s). When the number of stacks reaches 12, all stacks will be reset within 1s.",sub:' ATK: 412 | ATK: 30.3%'} , //17
    
        {name:'Broadblade41',rarity:4, des:"When the Resonator's HP is above 80%, increases ATK by 24%. When the Resonator's HP is below 80%, restores their HP by 10%, for dealing Basic Attack DMG or Heavy Attack DMG. This effect can be triggered 1 time(s) every 8s.",sub:'ATK: 412 | Energy Regen: 32.3%'} , //18
    
        {name:'Ages of Harvest',rarity:5, des:"Gain 12%/15%/18%/21%/24% additional DMG Bonus for all Attributes. The wielder is bestowed with divine blessings and gains 24%/30%/36%/42%/48% stack of Blessing of Ages for each Basic Attack strike, for up to 12 stacks, which is removed when the wielder leaves the field. At 24%/30%/36%/42%/48% stacks of Blessing of Ages or more, the wielder consumes all stacks of Blessing of Ages when casting the next Resonance Skill, with its DMG increased by 12 for 5s. This can be triggered 1 time every 6s.",sub:'ATK : 587 | Crit Rate : 24.3%'},//19 
        
        {name:'Discord',rarity:4, des:"When Resonance Skill is released, restores Concerto Energy by 8. This effect can be triggered 1 time every 20s.",sub:' ATK: 337 | Energy Reg.: 51.8%'} , //20
    
        {name:'Dauntless Evernight',rarity:4, des:"When Intro Skill is released, increases ATK by 8% and DEF by 15%, lasting for 15s.",sub:' ATK: 337 | DEF: 61.5%'} , //21
    
    
    //sword
        {name:'Emerald of Genesis',rarity:5, des:"Increases Energy Regen by 12.8%/16%/19.2%/22.4%/25.6%. When Resonance Skill is released, increases ATK by 6%/7.5%/9%/10.5%/12%, stacking up to 2 time(s). This effect lasts for 10s.",sub:'ATK: 587 | CRIT Rate: 24.3%'}, //22
    
        {name:'Commando of Conviction',rarity:4, des:"When Intro Skill is released, increases ATK by 15%, lasting for 15.",sub:'ATK: 412 | ATK: 30.3%'}, //23
    
        {name:'Lunar Cutter',rarity:4, des:"Equipped Resonator gains 6 stack(s) of Oath upon entering the battlefield. Each stack increases ATK by 2%, up to 6 stacks. This effect can be triggered 1 time(s) every 12s. Oath reduces by 1 stack(s) every 2s. Equipped Resonator gains an additional 6 stack(s) of Oath upon defeating an enemy.",sub:'ATK: 412 | ATK: 30.3%'}, //24
    
        {name:'Lumingloss',rarity:4, des:"When Resonance Skill is released, increases Basic Attack DMG and Heavy Attack DMG by 20%, stacking up to 1 time(s). This effect lasts for 10s and can be triggered 1 time(s) every 1s.",sub:'ATK: 387 | ATK: 36.4%'}, //25
    
    //pistols
        {name:'Static Mist',rarity:5, des:"When Increases Energy Regen by 12.8%. When Outro Skill is released, increases the switched-in Resonator's ATK by 10%, stacking up to 1 time(s). This effect lasts for 14s.",sub:'ATK: 587 | CRIT Rate: 24.3%'},//26
    
        {name:'Novaburst',rarity:4, des:"When the Resonator dashes or dodges, increases ATK by 4%, stacking up to 3 time(s). This effect lasts for 8s.",sub:'ATK: 412 | ATK: 30.3%'}, //27
    
        {name:'Pistols26',rarity:4, des:"When When the Resonator takes no damage, increases ATK by 6% every 5s, stacking up to 2 time(s). This effect lasts for 8s. When the Resonator takes damage, reduces the number of stacks by 1 and restores their HP by 5%.",sub:'ATK: 387 | ATK: 36.4%'}, //28
    
        {name:'Undying Flame',rarity:4, des:"When Intro Skill is released, increases Resonance Skill DMG Bonus by 20% for 15s.",sub:'ATK: 412 | ATK: 30.3%'}, //29
    
        {name:'Thunderbolt',rarity:4, des:"When hitting a target with Basic Attacks or Heavy Attacks, increases Resonance Skill DMG Bonus by 7%, stacking up to 3 time(s). This effect lasts for 10s and can be triggered 1 time(s) every 1s.",sub:' ATK: 387 | ATK: 36.4%'}, //30
        
        {name:'Cadenza',rarity:4, des:"When Resonance Skill is released, restores Concerto Energy by 8/10/12/14/16. This effect can be triggered 1 time every 20s.",sub:' ATK: 337 | Energy Regen: 32.3%'} , //31
    
    
    
    //dikkkat
         
        {name:'Amity Accord',rarity:4, des:"Level:When Intro Skill is released, increases Resonance Liberation DMG Bonus by 20%, lasting for 15s.",sub:' ATK: 338 | DEF:61.56%'} , //32
        
  {name:'Blazing Brilliance',rarity:5, des:"ATK increased by 12%/15%/18%/21%/24%. The equipper gains 1 stack of Searing Feather upon dealing damage, which can be triggered once every 0.5s, and gains 5 stacks of the same effect upon casting Resonance Skill. Each stack of Searing Feather gives 4%/5%/6%/7%/8% additional Resonance Skill DMG Bonus for up to 14 stacks. All stacks will be removed within 10s after reaching the max stack.",sub:'ATK: 587 | CRIT DMG: 48.6%'}, //33
    
    ]   

    
export {alplha , allWeapon}