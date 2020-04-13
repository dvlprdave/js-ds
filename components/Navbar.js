import Link from 'next/link'

const NavBar = () => {
	return (
		<div className='nav-wrapper'>
			<h1>
				<Link href='/'>
					<a>JS-DS</a>
				</Link>
			</h1>
			<ul className='nav-links'>
				<li>
					<Link href='./arrays'>
						<a>Arrays</a>
					</Link>
				</li>
				<li>
					<Link href='./objects'>
						<a>Objects</a>
					</Link>
				</li>
			</ul>

			<style jsx>{`
				.nav-wrapper {
					display: flex;
					align-items: center;
					padding: 1.3rem 1.8rem;
				}	

				h1 {
					margin-right: auto;
				}

				.nav-links {
					display: flex;
				}

				.nav-links a:first-child {
          padding-right: 10px;
				}

        .nav-links a {
          position: relative;
          transition: 0.4s ease;
        }

        .nav-links a:before {
          content: "";
          position: absolute;
          width: 88%;
          height: 2px;
          margin-top: 8px;
          bottom: 0;
          left: 0;
          background-color: #000;
          visibility: hidden;
          transform: scaleX(0);
          transition: all 0.4s ease;
        }

        .nav-links a:hover:before {
          visibility: visible;
          transform: scaleX(1);
        }

				@media screen and (max-width: 650px) {
          h1 a {
						color: rgba(211, 174, 54, 1);
					}
        }
			
			`}</style>
		</div>
	)
}

export default NavBar