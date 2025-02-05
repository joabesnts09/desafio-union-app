
interface INavItemProps {
  label: string
  isActive: boolean
  onClick: (label: string) => void
}

export const NavItem = ({ label, isActive, onClick }: INavItemProps) => {


  return (
    <li className="w-max relative">
      <a
        href="#"
        className={` text-[18px] font-bold leading-[2.2rem] cursor-pointer pb-2 lg-plus:text-xl lg:pb-0 transition-all
          ${isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#7D208E] to-[#0A45F6]' : 'text-gray-300'}
          hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#7D208E] hover:to-[#0A45F6]`}
        onClick={() => onClick(label)}
      >
        {label}
      </a>

      <span
        className={`absolute left-0 w-full h-[1px] bg-gradient-to-r from-[#7D208E] to-[#0A45F6] transition-all duration-300 
          ${isActive ? 'opacity-100' : 'opacity-0'} bottom-[3px] lg:bottom-[-33px]`}
      ></span>
    </li>
  )
}