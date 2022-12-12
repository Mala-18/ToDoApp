const date= new Date();

  const currentDate= date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear();

  const hours=(date.getHours()%12) || 12;

  const amOrPm= hours>=12 ? 'pm' : 'am';

  const currentTime= hours+" "+amOrPm;
    const itemsList= [
      {
        text:"Make bed",
        dateAndTime:currentTime+" "+currentDate,
        isComplete: false
    },
    {
        text:"Meditate",
        dateAndTime:currentTime+" "+currentDate,
        isComplete: true
    },
    {
        text:"Journal",
        dateAndTime:currentTime+" "+currentDate,
        isComplete: false
    },
    {
        text:"Gratitude Practice",
        dateAndTime:currentTime+" "+currentDate,
        isComplete: true
    }
    ]

export default itemsList;