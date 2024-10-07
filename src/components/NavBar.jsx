import { Link, useMatch, useResolvedPath } from "react-router-dom"
 
export default function NavBar(){
	return (

		<nav className="navbar">
			
			<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSukof1wspdp_UqWT5Z16kVAgvJkmnv_0vINg&s" alt="Logo" />


			<ul className="nav-items">
				<CustomLink className="link" to="/home">home</CustomLink>
				<CustomLink className="link" to="/importance">importance</CustomLink>
				<CustomLink className="link" to="/about">about</CustomLink>
			</ul>

		</nav>

		)
}



function CustomLink({to, children, ...props}){
	const resolvedPath = useResolvedPath(to)
	const isActive = useMatch({path: resolvedPath.pathname, end:true})

	return(

		<li className={isActive? "active": ""}>
			<Link to={to} {...props}>
				{children}
			</Link>
		</li>

		)
}