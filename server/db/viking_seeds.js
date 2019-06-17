use kattegat_list_overall

db.dropDatabase();

db.vikings.insertMany([

  {
    name: "Ragnar Lodbrok",
    parents: [
      "Sigurd Hring",
      "Alfhild Gandolfsdatter"
    ],
    famousFor: [
      {
        name: "Sack of Paris (Siege of Paris)",
        description: "The Sack of Paris. We have just arrived back from our battle in Francia, where we battled the king the Franks call King Charles. We entered the jaws of their river 10 days ago with 120 ships and over 5000 men, and laid siege to their castles and plundered their main city, Paris, on their Christian day of Easter. The city walls held for minutes, and we soon found ourselves negotiation with this king. We have come home richer with over 5000 pounds of silver. Although many of our warriors died at the hands of their Christian god, we have returned and will tell of this victory for years to come."
      }
    ]

  },
  {
    name: "Bjorn Ironside",
    parents: [
      "Ragnarr Loþbrók",
      "Auslaug Sigurdsdatter"
    ],
    famousFor: [
      {
        name: "Siege of Luni",
        description: "This has to be the best raid of my life. Ragnar would have been proud. After successfully raiding the town of Pisa in Italy we decided we would go to the Christian capital of Rome. When we arrived we were met with towering walls that looked impossible to breach, and this was the case. For several days. After some time of waiting I persuaded an envoy of this Christian city to go back and inform the Bishop that I had perished, but converted to Christianity before I died and I requested the sacrament of last rites and to be buried in holy grounds within the city. The fool agreed and allowed me to be escorted directly into their Christian building by some of my closest allies and a small amount of friends. Little did the Christians know I was not dead, and as soon as I knew that I was inside the heart of the city I jumped up from the stretcher that I was being carried in and my friends and I began to fight our way out of the city and opened the gates, which allowed us to breach the city and raid. Now to the failure… Our intended target was Rome, the actual capital of the Christian empire. However, some fool advised us that it was in the wrong direction so we ended up laying siege to the Italian city of Luni. Our victory is still a tale I will look forward to talking with Odin about when the Valkyries come and I rise up and take my rightful place in the great halls of Odin, in Valhalla."
      }
    ]
  },
  {
    name: "Ivar the Boneless",
    parents: [
      "Ragnarr Loþbrók",
      "Auslaug"
    ],
    famousFor: [
      {
        name: "The Great Heathen Army",
        description: "Me and my brothers Halfdan and Hubba invaded Great Britain in the year 865 at the head of a large Viking force described by fearful Christians as the Great Heathen Army. Me and my brothers motivation was to avenge our father, who had died after being captured while raiding the kingdom of Northumbria. Ragnar supposedly had been cast into a pit full of venomous snakes by order of the Northumbrian king Aella. My forces landed in the kingdom of East Anglia, where they met little resistance, and moved on to Northumbria, where they captured the capital city of York in 866. Aella and Osbert, the Northumbrian king whom Aella had deposed, were not captured then, but, in a second battle, in March 867, both were killed. We subjecting Aella to a particularly gruesome death, by method of a Blood Eagle. This is a cruel method of death reserved only for the most hated enemy of us Vikings and is only the second time in known history this has been carried out."
      }
    ]
  },
  {
    name: "Erik the Red",
    parents: [
      "Thorvald Asvaldsson",
      "Asvald Asvaldson"
    ],
    famousFor: [
      {
        name: "Colonising Greenland",
        description: "After being exiled in 982, I set sail to seek a land to the west of Iceland which had been reportedly spotted by a Norwegian named Gunnbjorn Ulfsson around a century earlier. I covered around 900 nautical miles of ocean before reaching the coast of a glacial land, which we now know as Greenland. I made present day Tunulliarfik Fjord, a fjord on the southern tip of Greenland, my base and spent the time of my exile exploring the land. After my exile was over, I returned to Iceland. I told people about the land I had explored and tried to persuade them to accompany me in an attempt to colonize it. I gave it the name Greenland because I believed men will desire much more to go there if the land has a good name. I  was ultimately successful in convincing many people in Iceland that Greenland held great opportunity. In 985, I set sail with 25 ships and more than 400 people to colonize Greenland. Out of 25 ships that had left only 14 arrived in Greenland as 11 were lost at sea or returned. We established two major colonies on the southwest coast of Greenland, the Eastern Settlement in modern-day Qaqortoq and the Western Settlement close to present-day Nuuk. There were also a number of smaller settlements between these two. The Viking colony that I established in Greenland survived for around 500 years and grew to a size of probably 5,000 people at its peak."
      }
    ]
  },
  {
    name: "Rollo Of Normandy",
    parents: [
      "Ragnavald Eysteinsson",
      "Ragnhild Hrolfsdottir"
    ],
    famousFor: [
      {
        name: "The Treaty of Saint-Clair-sur-Epte",
        description: "I arrived near Rouen to the horrors of the populace. However, I received word from the Bishop of Rouen named Franco that the people of the city were unarmed and wanted peace with them. I chose peace and from that point Rouen served as my foothold in West Francia.I then proceeded to raid the Seine Valley that menaced King Charles and his court. My raid escalated around 910, when I made a daring raid on Paris. The outcome of the attacked determined my faith and that of Normandy. Leaving Norway to embark on pirating expeditions and raid England, Scotland, and Flanders, I headed into France around 911 and settled along the Seine, besieging Paris. Charles III (the Simple) of France was able to hold me off for a while, but he eventually negotiated a treaty to stop me. The treaty of Saint-Clair-sur-Epte gave me part of Nuestria in return for my agreement that me and my fellow Vikings would stop pillaging any further in France."
      }
    ]
  },
  {
    name: "Sweyn Forkbeard",
    parents: [
      "Harald Bluetooth",
      "Gunhild"
    ],
    famousFor: [
      {
        name: "Battle Of Svolder",
        description: "I had already established a foothold in Norway, controlling Viken in c. 970. However, I have lost control over the Norwegian claims following mt defeat against a German army in 974.I built an alliance with Swedish king Olof Skotkonung and  Eirik Hakonarson,  Jarl of Lade, against Norwegian king Olaf Tryggyason. My sagas ascribe the causes of the alliance to Olaf Tryggvason's ill-fated marriage proposal to Sigrid the Haughty and his problematic marriage to Thyri, Svein’s sister.The allies attacked and defeated king Olaf in the western Baltic Sea when he was sailing home from an expedition, in the Battle of Svolder, fought in September of either 999 or 1000. The victors divided Norway among them. I re-gained direct control of Viken district. King Olaf of Sweden received four districts in Trondheim as well as Møre, Romsdal and Rånrike (the Fagrskinna, by contrast, says that the Swedish part consisted of  Oppland and a part of Trondheim). He gave these to his son in law, Jarl Svein Hakonarson, to hold as a vassal. The rest of Norway was ruled by Eirik Hákonarson as King Svein's vassal.The Jarls Eirik and Svein proved strong, competent rulers, and their reign was prosperous."
      }
    ]
  },
])
