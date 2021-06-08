/* AJPM
*  Samuel Bettendorf
*  Main JS page for website
*/

/* function prototypes */
/*setUsername();*/ /* sets the username of the change user button */

/****************************************
*                 main
* task: This function contain and directs
*       all other functions.
* data in: none
* data out: none
***************************************/
function main()
{
    /* select the image resource from the html file */
    let myImage = document.querySelector("img");

    /* set an onclick listener to the document to replace the image */
    myImage.onclick = function ()

    /*****************************************
    *                onclick
    * 
    * task: This function will change the holding
    *       hands image when the webpage is selected.
    * data in: none
    * data out: none
    *******************************************/
    {
        /* obtain the src of the image */
        let mySrc = myImage.getAttribute("src");

        /* check if the orginal image of the blue holding hands
           image is being displayed. */
        if (mySrc === "https://cdn.pixabay.com/photo/2014/03/25/16/54/stick-figures-297554__340.png")
        {
            /* change the image to the black image of holding hands */
            myImage.setAttribute("src", "https://svgsilh.com/svg/297554.svg");

            /* change the width and heigh of the image to a pleasant size */
            myImage.setAttribute("width", "350em"); 
            myImage.setAttribute("height", "200em");
        }

        /* otherwise utilize the orginal blue holding hands */
        else
        {
            myImage.setAttribute("src", "https://cdn.pixabay.com/photo/2014/03/25/16/54/stick-figures-297554__340.png");
        }
    }

    /******************************
         Button
    *******************************/
    /* select the button to change the title of the webpage */
    let myButton = document.querySelector("button");
    
    /* reference to the webpage title */
    let myHeading = document.querySelector("h1");

    /* first check if the localStorage fails to contain the user's name */
    if (!localStorage.getItem("name"))
    {
        /* set the title of the webpage to the user's name by calling the function again recursively */
        setUserName();
    }
    /* otherwise set the title of the webpage to the prexising entered name */
    else
    {
        /* obtain the name stored in localStorage */
        let storedName = localStorage.getItem("name");

        /* set the title to the name of the user */
        myHeading.textContent = "Ecce, " + storedName;
    }

    /* set the button with an onclick hander */
    myButton.onclick = function ()
    {
        /* set the username to the title of the webpage */
        setUserName(); 
    }
}

/***************************************************
*                  setUserName
*
* task: This function sets the username of the webpage
*       title.
* data in: none
* data out: none
****************************************************/
/* void */ function setUserName(/*void*/)
{
    /* promt the user to enter a name */
    let myName = prompt("Please enter your name.");

    /* check if the name is set */
    if(!myName)
    {
        /* obtain a name from the user if the name is failed to be set */
        setUserName();
    }
    /* otherwise, set the title of the webpage to the entered username */
    else
    {   
        /* store the name in local storage */
        localStorage.setItem("name", myName);

        /* set the title of the webpage to the person's name */
        myHeading.textContent = "Ecce, " + myName;
    }
}

/* execute the main function */
main();
