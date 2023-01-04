import styled, {css} from 'styled-components'
import { Theme } from 'types/styled-components'

const activeBox = (theme: Theme) => css`
	content: "";
	position: absolute;
	background-color: transparent;
	height: 50px;
	right: 0;
	width: calc(100% - 15px);
	bottom: -50px;
	border-top-right-radius: 25px;
	box-shadow: 0 -25px 0 0 ${theme.colors.baseBg1};
	z-index: 0;
`;

export const Menu = styled.menu`
	${({ theme }) => css`
		margin: 0;
		padding: 20px 0;
		height: 100vh;
		width: 105px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		background: ${theme.colors.baseBg2};
		border-radius: 0 16px 16px 0;
		box-sizing: border-box;
		nav {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;
		}
	`}
`;

export const MenuLogo = styled.div`
	${() => css`
		display: flex;
		justify-content: center;
		padding: 0 0 20px 0;
		img {
			height: 80px;
		}
	`}
`;

const MenuItemModifiers = {
	active: (theme: Theme) => css`
		background-color: ${theme.colors.baseBg1};
		&::before {
			${activeBox(theme)};
			top: -50px;
			transform: scaleY(-1);
		}
		&::after {
			${activeBox(theme)};
		}
	`,
};

type MenuItemStyled = { active: boolean };

export const MenuItem = styled.div<MenuItemStyled>`
	${({ theme, active }) => css`
		height: 80px;
		width: calc(100% - 15px);
		border-radius: 16px 0 0 16px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 15px;
		position: relative;
		${active && MenuItemModifiers.active(theme)}
	`}
`;

export const MenuItemButton = styled.button<MenuItemStyled>`
	${({ theme, active }) => css`
		${theme.mixins.buttonIcon()};
		z-index: 1;
		${active && theme.mixins.buttonIcon(true)};
	`}
`;

export const MenuItemLogout = styled.button`
	${({ theme }) => css`
		${theme.mixins.buttonIcon()};
		z-index: 1;
	`}
`;