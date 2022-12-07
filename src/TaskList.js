const date= new Date();

  const currentDate= date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear();

  const hours=(date.getHours()%12) || 12;

  const amOrPm= hours>=12 ? 'pm' : 'am';

  const currentTime= hours+" "+amOrPm;
    const itemsList= [
      {
        text: "Task 1",
        dateAndTime: currentTime+""+currentDate
      },
      {
        text: "Task 2",
        dateAndTime: currentTime+""+currentDate
      },
      {
        text: "Task 3",
        dateAndTime: currentTime+""+currentDate
      },
      {
        text: "Task 4",
        dateAndTime: currentTime+""+currentDate
      }
    ]

export default itemsList;