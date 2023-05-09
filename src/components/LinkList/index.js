// src/components/LinkList/index.js
import Link from 'next/link';
import { LinksListWrapper, LinkItem, FirstLinkItem } from './style';
import { StyledSectionLinkTree } from '@/styles/sections';
import { trackEvent } from '@/utils/gaTracking';
import * as GAEvents from '@/utils/gaEvents';

const LinksList = ({ links }) => {

    const handleClick = (label, url) => {
        trackEvent(GAEvents.GA_EVENT_SHARE_SOCIAL_MEDIA.category, GAEvents.GA_EVENT_SHARE_SOCIAL_MEDIA.action, label);
        window.open(url, '_blank');
    };

    return (
            <LinksListWrapper>
                {links.map((link, index) => {
                    const LinkComponent = index === 0 ? FirstLinkItem : LinkItem;
                    return (
                        <Link key={index} href={link.url} passHref>
                            <div onClick={() => handleClick(link.label, link.url)} target="_blank" rel="noopener noreferrer">
                                <LinkComponent>
                                    {link.icon && <span>{link.icon}</span>}
                                    {link.label}
                                </LinkComponent>
                            </div>
                        </Link>
                    );
                })}
            </LinksListWrapper>
    );
};

export default LinksList;
