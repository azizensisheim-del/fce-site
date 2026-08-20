export type CalendarMatch = {
  id: number;
  date: string;
  time: string;
  opponent: string;
  venue: "Domicile" | "Extérieur";
  competition: string;
  kind: "championnat" | "coupe";
  score?: {
    fce: number;
    opponent: number;
  };
};

export type TeamCalendar = {
  slug: string;
  label: string;
  division: string;
  source: string;
  matches: CalendarMatch[];
};

export const teamCalendars: TeamCalendar[] = [
  {
    "slug": "ensisheim-fc-4",
    "label": "Seniors 2",
    "division": "District 6 Alsace · Poule G",
    "source": "https://www.sportcorico.com/clubs/fc-ensisheim/ensisheim-fc-4?season=2026-2027",
    "matches": [
      {
        "id": 5804147,
        "date": "23/08/2026",
        "time": "10:00",
        "opponent": "Wittenheim Astr 3",
        "venue": "Extérieur",
        "competition": "District 6 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5804071,
        "date": "30/08/2026",
        "time": "10:00",
        "opponent": "Heimsbrunn AS 2",
        "venue": "Extérieur",
        "competition": "Coupe des Réserves Alsace Vivialys",
        "kind": "coupe"
      },
      {
        "id": 5804153,
        "date": "06/09/2026",
        "time": "10:00",
        "opponent": "Oderen Jeunes 2",
        "venue": "Domicile",
        "competition": "District 6 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5804159,
        "date": "20/09/2026",
        "time": "10:00",
        "opponent": "Doller US 2",
        "venue": "Extérieur",
        "competition": "District 6 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5804167,
        "date": "04/10/2026",
        "time": "10:00",
        "opponent": "Mulhouse Mouloudia 3",
        "venue": "Domicile",
        "competition": "District 6 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5804170,
        "date": "17/10/2026",
        "time": "19:00",
        "opponent": "Vieux Thann ASb. 2",
        "venue": "Extérieur",
        "competition": "District 6 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5804175,
        "date": "25/10/2026",
        "time": "10:00",
        "opponent": "Munchhouse FC 3",
        "venue": "Extérieur",
        "competition": "District 6 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5804183,
        "date": "01/11/2026",
        "time": "10:00",
        "opponent": "Lutterbach AS 3",
        "venue": "Domicile",
        "competition": "District 6 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5804190,
        "date": "08/11/2026",
        "time": "10:00",
        "opponent": "Heimsbrunn AS 2",
        "venue": "Extérieur",
        "competition": "District 6 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5804198,
        "date": "15/11/2026",
        "time": "10:00",
        "opponent": "Hirtzfelden FC 3",
        "venue": "Domicile",
        "competition": "District 6 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5804202,
        "date": "22/11/2026",
        "time": "10:00",
        "opponent": "Pfastatt FC 3",
        "venue": "Extérieur",
        "competition": "District 6 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5804208,
        "date": "29/11/2026",
        "time": "10:00",
        "opponent": "Meyenheim FC 3",
        "venue": "Domicile",
        "competition": "District 6 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5804220,
        "date": "28/02/2027",
        "time": "10:00",
        "opponent": "Doller US 2",
        "venue": "Domicile",
        "competition": "District 6 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5804228,
        "date": "14/03/2027",
        "time": "10:00",
        "opponent": "Mulhouse Mouloudia 3",
        "venue": "Extérieur",
        "competition": "District 6 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5804232,
        "date": "21/03/2027",
        "time": "10:00",
        "opponent": "Vieux Thann ASb. 2",
        "venue": "Domicile",
        "competition": "District 6 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5804240,
        "date": "04/04/2027",
        "time": "10:00",
        "opponent": "Munchhouse FC 3",
        "venue": "Domicile",
        "competition": "District 6 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5804245,
        "date": "11/04/2027",
        "time": "10:00",
        "opponent": "Lutterbach AS 3",
        "venue": "Extérieur",
        "competition": "District 6 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5804251,
        "date": "18/04/2027",
        "time": "10:00",
        "opponent": "Heimsbrunn AS 2",
        "venue": "Domicile",
        "competition": "District 6 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5804258,
        "date": "02/05/2027",
        "time": "10:00",
        "opponent": "Hirtzfelden FC 3",
        "venue": "Extérieur",
        "competition": "District 6 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5804262,
        "date": "09/05/2027",
        "time": "10:00",
        "opponent": "Pfastatt FC 3",
        "venue": "Domicile",
        "competition": "District 6 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5804270,
        "date": "23/05/2027",
        "time": "10:00",
        "opponent": "Meyenheim FC 3",
        "venue": "Extérieur",
        "competition": "District 6 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5804274,
        "date": "30/05/2027",
        "time": "10:00",
        "opponent": "Wittenheim Astr 3",
        "venue": "Domicile",
        "competition": "District 6 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5804215,
        "date": "05/06/2027",
        "time": "19:30",
        "opponent": "Oderen Jeunes 2",
        "venue": "Extérieur",
        "competition": "District 6 Alsace",
        "kind": "championnat"
      }
    ]
  },
  {
    "slug": "ensisheim-fc-7",
    "label": "Seniors 3",
    "division": "District 8 Alsace · Poule O",
    "source": "https://www.sportcorico.com/clubs/fc-ensisheim/ensisheim-fc-7?season=2026-2027",
    "matches": [
      {
        "id": 5799249,
        "date": "30/08/2026",
        "time": "10:00",
        "opponent": "Heiteren FC 3",
        "venue": "Domicile",
        "competition": "Challenge des Réserves Alsace Vivialys",
        "kind": "coupe"
      },
      {
        "id": 5822188,
        "date": "06/09/2026",
        "time": "10:00",
        "opponent": "Reguisheim FC 3",
        "venue": "Extérieur",
        "competition": "District 8 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5822166,
        "date": "13/09/2026",
        "time": "10:00",
        "opponent": "Buhl FC 3",
        "venue": "Domicile",
        "competition": "District 8 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5822205,
        "date": "04/10/2026",
        "time": "10:00",
        "opponent": "Gundolsheim FC 3",
        "venue": "Extérieur",
        "competition": "District 8 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5822216,
        "date": "18/10/2026",
        "time": "10:00",
        "opponent": "Rouffach FC 3",
        "venue": "Domicile",
        "competition": "District 8 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5822234,
        "date": "01/11/2026",
        "time": "10:00",
        "opponent": "Fessenheim FC 3",
        "venue": "Extérieur",
        "competition": "District 8 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5822243,
        "date": "08/11/2026",
        "time": "10:00",
        "opponent": "Blodelsheim Bantz US 2",
        "venue": "Domicile",
        "competition": "District 8 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5822252,
        "date": "15/11/2026",
        "time": "10:00",
        "opponent": "Oberhergheim FC 2",
        "venue": "Extérieur",
        "competition": "District 8 Alsace",
        "kind": "championnat"
      }
    ]
  },
  {
    "slug": "ensisheim-fc-18",
    "label": "Seniors 4",
    "division": "District 8 Alsace · Poule P",
    "source": "https://www.sportcorico.com/clubs/fc-ensisheim/ensisheim-fc-18?season=2026-2027",
    "matches": [
      {
        "id": 5804022,
        "date": "06/09/2026",
        "time": "10:00",
        "opponent": "Cernay FC 3",
        "venue": "Domicile",
        "competition": "District 8 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5804039,
        "date": "20/09/2026",
        "time": "10:00",
        "opponent": "Feldkirch FC 3",
        "venue": "Extérieur",
        "competition": "District 8 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5804050,
        "date": "04/10/2026",
        "time": "10:00",
        "opponent": "Masevaux FC 3",
        "venue": "Domicile",
        "competition": "District 8 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5804008,
        "date": "11/10/2026",
        "time": "10:00",
        "opponent": "Aspach le Bas FC 1",
        "venue": "Extérieur",
        "competition": "District 8 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5804072,
        "date": "25/10/2026",
        "time": "10:00",
        "opponent": "Mitzach 3",
        "venue": "Extérieur",
        "competition": "District 8 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5804090,
        "date": "08/11/2026",
        "time": "10:00",
        "opponent": "Vallee Thur US 4",
        "venue": "Extérieur",
        "competition": "District 8 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5804097,
        "date": "15/11/2026",
        "time": "10:00",
        "opponent": "Reiningue Blue Star 2",
        "venue": "Domicile",
        "competition": "District 8 Alsace",
        "kind": "championnat"
      }
    ]
  },
  {
    "slug": "ensisheim-embo",
    "label": "U18",
    "division": "U18 D1 Alsace · Poule B",
    "source": "https://www.sportcorico.com/clubs/fc-ensisheim/ensisheim-embo?season=2026-2027",
    "matches": [
      {
        "id": 5950770,
        "date": "05/09/2026",
        "time": "16:00",
        "opponent": "Alsasud 2",
        "venue": "Extérieur",
        "competition": "U18 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5950789,
        "date": "19/09/2026",
        "time": "16:00",
        "opponent": "Mulhouse Foot Reunis 1",
        "venue": "Extérieur",
        "competition": "U18 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5950799,
        "date": "26/09/2026",
        "time": "18:00",
        "opponent": "Burnhauptois Stade 1",
        "venue": "Domicile",
        "competition": "U18 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5950804,
        "date": "03/10/2026",
        "time": "16:00",
        "opponent": "ENT. HT Koenigsbourg 1",
        "venue": "Extérieur",
        "competition": "U18 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5950819,
        "date": "10/10/2026",
        "time": "18:00",
        "opponent": "ENT. des Mines 1",
        "venue": "Domicile",
        "competition": "U18 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5950824,
        "date": "17/10/2026",
        "time": "16:00",
        "opponent": "Ste Croix/plaine FC 1",
        "venue": "Extérieur",
        "competition": "U18 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5950830,
        "date": "07/11/2026",
        "time": "18:00",
        "opponent": "Habsheim FC 1",
        "venue": "Domicile",
        "competition": "U18 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5950836,
        "date": "14/11/2026",
        "time": "14:30",
        "opponent": "Sundgau Foot 1",
        "venue": "Extérieur",
        "competition": "U18 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5950846,
        "date": "21/11/2026",
        "time": "18:00",
        "opponent": "St Pierre Bois/t ASC 1",
        "venue": "Domicile",
        "competition": "U18 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5950863,
        "date": "28/11/2026",
        "time": "14:30",
        "opponent": "Andolsheim AS 1",
        "venue": "Extérieur",
        "competition": "U18 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5950878,
        "date": "05/12/2026",
        "time": "17:00",
        "opponent": "Sundhoffen AS 1",
        "venue": "Domicile",
        "competition": "U18 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5950879,
        "date": "06/03/2027",
        "time": "16:00",
        "opponent": "Mulhouse Foot Reunis 1",
        "venue": "Domicile",
        "competition": "U18 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5950891,
        "date": "13/03/2027",
        "time": "16:00",
        "opponent": "Burnhauptois Stade 1",
        "venue": "Extérieur",
        "competition": "U18 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5950906,
        "date": "20/03/2027",
        "time": "16:00",
        "opponent": "ENT. HT Koenigsbourg 1",
        "venue": "Domicile",
        "competition": "U18 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5950930,
        "date": "03/04/2027",
        "time": "16:00",
        "opponent": "ENT. des Mines 1",
        "venue": "Extérieur",
        "competition": "U18 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5950942,
        "date": "10/04/2027",
        "time": "16:00",
        "opponent": "Ste Croix/plaine FC 1",
        "venue": "Domicile",
        "competition": "U18 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5950955,
        "date": "17/04/2027",
        "time": "17:00",
        "opponent": "Habsheim FC 1",
        "venue": "Extérieur",
        "competition": "U18 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5950968,
        "date": "01/05/2027",
        "time": "16:00",
        "opponent": "Sundgau Foot 1",
        "venue": "Domicile",
        "competition": "U18 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5950992,
        "date": "08/05/2027",
        "time": "16:00",
        "opponent": "St Pierre Bois/t ASC 1",
        "venue": "Extérieur",
        "competition": "U18 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5950993,
        "date": "22/05/2027",
        "time": "17:00",
        "opponent": "Andolsheim AS 1",
        "venue": "Domicile",
        "competition": "U18 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5951017,
        "date": "29/05/2027",
        "time": "17:00",
        "opponent": "Sundhoffen AS 1",
        "venue": "Extérieur",
        "competition": "U18 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5951031,
        "date": "05/06/2027",
        "time": "17:00",
        "opponent": "Alsasud 2",
        "venue": "Domicile",
        "competition": "U18 D1 Alsace",
        "kind": "championnat"
      }
    ]
  },
  {
    "slug": "ensisheim-fc-19",
    "label": "U16",
    "division": "U16 D1 Alsace · Poule E",
    "source": "https://www.sportcorico.com/clubs/fc-ensisheim/ensisheim-fc-19?season=2026-2027",
    "matches": [
      {
        "id": 5952849,
        "date": "05/09/2026",
        "time": "18:00",
        "opponent": "Aspach le Haut AS 1",
        "venue": "Domicile",
        "competition": "U16 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5952856,
        "date": "19/09/2026",
        "time": "18:00",
        "opponent": "Munster AS 1",
        "venue": "Domicile",
        "competition": "U16 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5952860,
        "date": "26/09/2026",
        "time": "15:00",
        "opponent": "Avenir Vauban 97 1",
        "venue": "Extérieur",
        "competition": "U16 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5952863,
        "date": "03/10/2026",
        "time": "18:00",
        "opponent": "Mulhouse RC 1",
        "venue": "Domicile",
        "competition": "U16 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5952870,
        "date": "10/10/2026",
        "time": "16:00",
        "opponent": "Soultz FC 1919 1",
        "venue": "Extérieur",
        "competition": "U16 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5952887,
        "date": "17/10/2026",
        "time": "15:30",
        "opponent": "Ingersheim Samodji 2",
        "venue": "Domicile",
        "competition": "U16 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5952889,
        "date": "07/11/2026",
        "time": "17:00",
        "opponent": "Berrwiller AS 1",
        "venue": "Extérieur",
        "competition": "U16 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5952897,
        "date": "14/11/2026",
        "time": "18:00",
        "opponent": "Bennwihr FC 1",
        "venue": "Domicile",
        "competition": "U16 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5952911,
        "date": "21/11/2026",
        "time": "16:00",
        "opponent": "Buhl FC 1",
        "venue": "Extérieur",
        "competition": "U16 D1 Alsace",
        "kind": "championnat"
      }
    ]
  },
  {
    "slug": "ensisheim-ejep-2",
    "label": "U15 équipe 1",
    "division": "U15 D1 Alsace · Poule B",
    "source": "https://www.sportcorico.com/clubs/fc-ensisheim/ensisheim-ejep-2?season=2026-2027",
    "matches": [
      {
        "id": 5903139,
        "date": "05/09/2026",
        "time": "15:30",
        "opponent": "Sausheim FC 1",
        "venue": "Extérieur",
        "competition": "U15 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5903147,
        "date": "19/09/2026",
        "time": "14:00",
        "opponent": "Molsheim Erno. ES 2",
        "venue": "Extérieur",
        "competition": "U15 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5903153,
        "date": "26/09/2026",
        "time": "15:30",
        "opponent": "Alsasud 1",
        "venue": "Domicile",
        "competition": "U15 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5903160,
        "date": "03/10/2026",
        "time": "16:00",
        "opponent": "Racing HW 96 1",
        "venue": "Extérieur",
        "competition": "U15 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5903164,
        "date": "10/10/2026",
        "time": "15:30",
        "opponent": "ENT. Morschwiller RH 1",
        "venue": "Domicile",
        "competition": "U15 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5903170,
        "date": "17/10/2026",
        "time": "16:00",
        "opponent": "Ste Croix/plaine FC 1",
        "venue": "Extérieur",
        "competition": "U15 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5903178,
        "date": "07/11/2026",
        "time": "15:30",
        "opponent": "Mulhouse Foot Reunis 1",
        "venue": "Domicile",
        "competition": "U15 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5903183,
        "date": "14/11/2026",
        "time": "14:30",
        "opponent": "Geispolsheim FC 1",
        "venue": "Extérieur",
        "competition": "U15 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5903191,
        "date": "21/11/2026",
        "time": "15:30",
        "opponent": "Burnhauptois Stade 1",
        "venue": "Domicile",
        "competition": "U15 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5903196,
        "date": "28/11/2026",
        "time": "14:30",
        "opponent": "ENT. HT Koenigsbourg 1",
        "venue": "Extérieur",
        "competition": "U15 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5903200,
        "date": "05/12/2026",
        "time": "14:00",
        "opponent": "ENT. des Mines 1",
        "venue": "Domicile",
        "competition": "U15 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5903204,
        "date": "06/03/2027",
        "time": "16:00",
        "opponent": "Molsheim Erno. ES 2",
        "venue": "Domicile",
        "competition": "U15 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5903215,
        "date": "13/03/2027",
        "time": "15:30",
        "opponent": "Alsasud 1",
        "venue": "Extérieur",
        "competition": "U15 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5903217,
        "date": "20/03/2027",
        "time": "16:00",
        "opponent": "Racing HW 96 1",
        "venue": "Domicile",
        "competition": "U15 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5903224,
        "date": "03/04/2027",
        "time": "16:00",
        "opponent": "ENT. Morschwiller RH 1",
        "venue": "Extérieur",
        "competition": "U15 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5903229,
        "date": "10/04/2027",
        "time": "16:00",
        "opponent": "Ste Croix/plaine FC 1",
        "venue": "Domicile",
        "competition": "U15 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5903236,
        "date": "17/04/2027",
        "time": "16:00",
        "opponent": "Mulhouse Foot Reunis 1",
        "venue": "Extérieur",
        "competition": "U15 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5903240,
        "date": "01/05/2027",
        "time": "16:00",
        "opponent": "Geispolsheim FC 1",
        "venue": "Domicile",
        "competition": "U15 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5903246,
        "date": "08/05/2027",
        "time": "16:00",
        "opponent": "Burnhauptois Stade 1",
        "venue": "Extérieur",
        "competition": "U15 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5903260,
        "date": "22/05/2027",
        "time": "17:00",
        "opponent": "ENT. HT Koenigsbourg 1",
        "venue": "Domicile",
        "competition": "U15 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5903265,
        "date": "29/05/2027",
        "time": "17:00",
        "opponent": "ENT. des Mines 1",
        "venue": "Extérieur",
        "competition": "U15 D1 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5903288,
        "date": "05/06/2027",
        "time": "17:00",
        "opponent": "Sausheim FC 1",
        "venue": "Domicile",
        "competition": "U15 D1 Alsace",
        "kind": "championnat"
      }
    ]
  },
  {
    "slug": "pulversheim-ejep-1",
    "label": "U15 équipe 2",
    "division": "U15 D3 Alsace · Poule J",
    "source": "https://www.sportcorico.com/clubs/fc-ensisheim/pulversheim-ejep-1?season=2026-2027",
    "matches": [
      {
        "id": 5902308,
        "date": "05/09/2026",
        "time": "15:30",
        "opponent": "Feldkirch FC 1",
        "venue": "Domicile",
        "competition": "U15 D3 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5902367,
        "date": "19/09/2026",
        "time": "15:30",
        "opponent": "Cernay FC 1",
        "venue": "Domicile",
        "competition": "U15 D3 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5902375,
        "date": "26/09/2026",
        "time": "16:00",
        "opponent": "Oberbruck USo.D. 1",
        "venue": "Extérieur",
        "competition": "U15 D3 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5902385,
        "date": "03/10/2026",
        "time": "15:30",
        "opponent": "ENT. Morschwiller RH 2",
        "venue": "Domicile",
        "competition": "U15 D3 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5902390,
        "date": "10/10/2026",
        "time": "16:00",
        "opponent": "Mulh. Bourtzwiller 1",
        "venue": "Extérieur",
        "competition": "U15 D3 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5902410,
        "date": "07/11/2026",
        "time": "16:00",
        "opponent": "Vieux Thann ASb. 1",
        "venue": "Extérieur",
        "competition": "U15 D3 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5902418,
        "date": "14/11/2026",
        "time": "15:30",
        "opponent": "EJHT 2",
        "venue": "Domicile",
        "competition": "U15 D3 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5902431,
        "date": "21/11/2026",
        "time": "15:30",
        "opponent": "Richwiller RS 1",
        "venue": "Extérieur",
        "competition": "U15 D3 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5902440,
        "date": "28/11/2026",
        "time": "15:30",
        "opponent": "Soultz FC 1919 1",
        "venue": "Domicile",
        "competition": "U15 D3 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5902447,
        "date": "05/12/2026",
        "time": "14:00",
        "opponent": "Illfurth FC 2",
        "venue": "Extérieur",
        "competition": "U15 D3 Alsace",
        "kind": "championnat"
      }
    ]
  },
  {
    "slug": "ensisheim-fc-3",
    "label": "U13 équipe 1",
    "division": "U13 D2 Alsace · Poule I",
    "source": "https://www.sportcorico.com/clubs/fc-ensisheim/ensisheim-fc-3?season=2026-2027",
    "matches": [
      {
        "id": 5871024,
        "date": "05/09/2026",
        "time": "13:30",
        "opponent": "ASTW 1",
        "venue": "Extérieur",
        "competition": "U13 D2 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5871026,
        "date": "19/09/2026",
        "time": "14:00",
        "opponent": "Colmar SR FA 3",
        "venue": "Extérieur",
        "competition": "U13 D2 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5871031,
        "date": "26/09/2026",
        "time": "13:30",
        "opponent": "Agiir Florival 2",
        "venue": "Domicile",
        "competition": "U13 D2 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5871035,
        "date": "03/10/2026",
        "time": "14:30",
        "opponent": "Biesheim ASC 2",
        "venue": "Extérieur",
        "competition": "U13 D2 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5871037,
        "date": "10/10/2026",
        "time": "13:30",
        "opponent": "Munster AS 1",
        "venue": "Domicile",
        "competition": "U13 D2 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5871042,
        "date": "17/10/2026",
        "time": "13:30",
        "opponent": "Colmar SR FA 3",
        "venue": "Domicile",
        "competition": "U13 D2 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5871046,
        "date": "07/11/2026",
        "time": "13:30",
        "opponent": "Agiir Florival 2",
        "venue": "Extérieur",
        "competition": "U13 D2 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5871051,
        "date": "14/11/2026",
        "time": "13:30",
        "opponent": "Biesheim ASC 2",
        "venue": "Domicile",
        "competition": "U13 D2 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5871059,
        "date": "21/11/2026",
        "time": "13:00",
        "opponent": "Munster AS 1",
        "venue": "Extérieur",
        "competition": "U13 D2 Alsace",
        "kind": "championnat"
      },
      {
        "id": 5871066,
        "date": "28/11/2026",
        "time": "13:30",
        "opponent": "ASTW 1",
        "venue": "Domicile",
        "competition": "U13 D2 Alsace",
        "kind": "championnat"
      }
    ]
  }
];
