import Index from '@Page/index.vue'
import Blog from '@Page/blog.vue'
import Git from '@Page/git.vue'
const COMPONETT_OBJ = {
    index: Index,
    blog: Blog,
    git: Git
}
export function geneRoute(routeInfo){
    let res = [];
    let routes = [].concat(routeInfo);
    routes.forEach(item => {
        if(item.hidden){
            return;
        }
        item.childrenList.forEach(subitem => {
            if(subitem.hidden){
                return;
            }
            res.push({
                path: item.path + subitem.path,
                component: COMPONETT_OBJ[subitem.component]
            })
        })
    })
    return res;
}