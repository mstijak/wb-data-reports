import {HtmlElement, Rescope, Text, Repeater, FlexRow, Link, Icon, Heading} from 'cx/widgets';

import Controller from './Controller';

export default <cx>
    <Rescope bind="$page">
        <h1 putInto="header">Samples</h1>
        <div controller={Controller}>
            <FlexRow wrap spacing="large" pad>
                <Repeater records:bind="reports">
                    <Link class="report-card" href:tpl="~/{$record.id}">
                        <FlexRow align="center">
                            <Heading text:bind="$record.title" level={4} style="flex:1"/>

                            <Icon name="star"/>
                            <span text:bind="$record.starCount"/>

                        </FlexRow>
                        <p text:bind="$record.description" visible:bind="$record.description"/>
                    </Link>
                </Repeater>
            </FlexRow>
        </div>
    </Rescope>
</cx>
