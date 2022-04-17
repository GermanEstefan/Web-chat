import { StyledHeader, StyledHeaderSocialMedias, StyledHeaderSocialMediasGitHub, StyledHeaderTitle, StyledHeaderTitleIcon } from "./StyledHeader"

export const Hedaer = () => {
  return (
    <StyledHeader>

      <StyledHeaderTitle>
        <h1>Web Chat</h1>
        <StyledHeaderTitleIcon className="far fa-comment"></StyledHeaderTitleIcon>
      </StyledHeaderTitle>

      <StyledHeaderSocialMedias>
        <StyledHeaderSocialMediasGitHub className="fab fa-github"></StyledHeaderSocialMediasGitHub>
        <i className="fab fa-linkedin"></i>
      </StyledHeaderSocialMedias>

    </StyledHeader>
  )
}
