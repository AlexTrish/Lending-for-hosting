import React from 'react';
import i18n from './language/i18n';

function Rules() {
    return (
        <div className="rules">
            <section className="sec">
                <h3>
                    {i18n.t('general')}
                </h3>
                <ol className="list txt">
                    <li>
                        {i18n.t('support')}
                    </li>
                    <li>
                        {i18n.t('speedNote')}
                    </li>
                    <li>
                        {i18n.t('rightToRefuse')}
                    </li>
                    <li>
                        {i18n.t('nsRequirement')}
                    </li>
                    <li>
                        {i18n.t('clientResponsibility')}
                    </li>
                    <li>
                        {i18n.t('providerIssue')}
                    </li>
                    <li>
                        {i18n.t('dataResponsibility')}
                    </li>
                    <li>
                        {i18n.t('blockRights')}
                    </li>
                    <li>
                        {i18n.t('domainLimit')}
                    </li>
                    <li>
                        {i18n.t('prohibitedUsage')}
                    </li>
                </ol>
            </section>
            <section className="sec">
                <h3 className="heading">
                    {i18n.t('renewal')}
                </h3>
                <ol className="list txt">
                    <li>
                        {i18n.t('priceChange')}
                    </li>
                    <li>
                        {i18n.t('declineRenewal')}
                    </li>
                    <li>
                        {i18n.t('latePenalty')}
                    </li>
                    <li>
                        {i18n.t('noNotification')}
                    </li>
                    <li>
                        {i18n.t('euroRate')}
                    </li>
                    <li>
                        {i18n.t('gracePeriod')}
                    </li>
                </ol>
            </section>
            <section className="sec">
                <h3 className="heading">
                    {i18n.t('refundPolicy')}
                </h3>
                <p className="para txt">
                    {i18n.t('refundDetails')}
                </p>
                <ol className="list txt">
                    <li>
                        {i18n.t('serviceFailure')}
                    </li>
                    <li>
                        {i18n.t('ruleViolations')}
                    </li>
                    <li>
                        {i18n.t('vpsRefund')}
                    </li>
                    <li>
                        {i18n.t('dedicatedRefund')}
                    </li>
                    <li>
                        {i18n.t('setupFee')}
                    </li>
                    <li>
                        {i18n.t('abuseResistant')}
                    </li>
                    <li>
                        {i18n.t('restrictedContent')}
                    </li>
                    <li>
                        {i18n.t('partialRefund')}
                    </li>
                </ol>
                <p className="para txt">
                    {i18n.t('contractChange')}
                </p>
            </section>
            <section className="sec">
                <h3 className="heading">
                    {i18n.t('usageRules')}
                </h3>
                <ol className="list txt">
                    <li>
                        {i18n.t('intellectualProperty')}
                    </li>
                    <li>
                        {i18n.t('personalData')}
                    </li>
                    <li>
                        {i18n.t('maliciousContent')}
                    </li>
                    <li>
                        {i18n.t('childProtectionPt1')} <span className="rules-block-text">kids</span>, <span className="rules-block-text">lolita</span>, <span className="rules-block-text">pedo</span>, <span className="rules-block-text">peta</span>, <span className="rules-block-text">peto</span>, <span className="rules-block-text">pre-teen</span>, <span className="rules-block-text">pedophile</span>, <span className="rules-block-text">underage</span>, <span className="rules-block-text">child</span> {i18n.t('childProtectionPt2')}
                    </li>
                    <li>
                        {i18n.t('phishing')}
                    </li>
                    <li>
                        {i18n.t('spam')}
                    </li>
                    <li>
                        {i18n.t('hateSpeech')}
                    </li>
                    <li>
                        {i18n.t('fraud')}
                    </li>
                    <li>
                        {i18n.t('pyramidSchemes')}
                    </li>
                    <li>
                        {i18n.t('cryptoMining')}
                    </li>
                    <li>
                        {i18n.t('unlicensedStreaming')}
                    </li>
                    <li>
                        {i18n.t('adultServices')}
                    </li>
                </ol>
            </section>
        </div>
    )
}

export default Rules;