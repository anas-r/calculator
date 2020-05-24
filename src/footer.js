const footer = `
<div class="github"
     style="background: #4A5568; position: fixed; bottom: 0; margin: 0 0px 0 0;width: 100%; 
     height: 50px; display: flex; justify-content: space-around; color: white;
     font-family: 'Merriweather Sans', sans-serif; font-size: 1rem">
    <div class="text" style="margin: auto 0 auto auto">Part of my The ODIN
        Project portfolio.
    </div>
    <a href="https://github.com/anas-r"
       style="margin: auto 5px auto 10px; color: white; text-decoration: none"> <i
            class="fab fa-github fa-2x" style="cursor: pointer; font-family: \'FontAwesome\',serif; font-style: normal; "></i></a>
    &nbsp;
    <a href="https://www.linkedin.com/in/s-s-s-s/"
       style="margin: auto auto auto 0; color: white; text-decoration: none"> <i
            class="fab fa-linkedin fa-2x" style="cursor: pointer; font-family: \'FontAwesome\',serif; font-style: normal; "></i></a>
</div>
`
export function insertFooter() {
    document.body.insertAdjacentHTML('beforeend', footer);
}