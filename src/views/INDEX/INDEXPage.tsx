import React, { useEffect } from 'react'
import { Container } from 'react-neu'
import styled from 'styled-components'

import Page from 'components/Page'
import {
  ProductPageHeader,
  ProductPageContent,
  TokenStats,
  PriceChanges,
  WalletBalance,
  Description,
} from 'components/ProductPage'
import { BuySellWrapper } from 'components/BuySell'
import MarketData from './components/MarketData'

import useIndexTokenMarketData from 'hooks/useIndexTokenMarketData'
import useBalances from 'hooks/useBalances'

import IndexReleaseScheduleImage from 'assets/index-token-release-schedule.png'

const DpiProductPage = (props: { title: string }) => {
  useEffect(() => {
    document.title = props.title
  }, [])

  const {
    prices,
    latestPrice,
    latestMarketCap,
    latestVolume,
  } = useIndexTokenMarketData()
  const { indexBalance } = useBalances()

  return (
    <Page>
      <Container size='lg'>
        <ProductPageHeader>
          <MarketData />
          <BuySellWrapper tokenId='index' />
        </ProductPageHeader>
        <ProductPageContent>
          <WalletBalance
            symbol='LGT'
            latestPrice={latestPrice}
            currentBalance={indexBalance}
          />
          <PriceChanges prices={prices} />
          <TokenStats
            latestPrice={latestPrice}
            latestVolume={latestVolume}
            latestMarketCap={latestMarketCap}
          />
          <Description>
            <strong>LGT</strong> is the governance token which presides over the
            LGT.
            <h2>What is the LGT?</h2>
            The LGT is a collective aimed at creating and maintaining the best
            crypto indices on the market. The coop creates crypto ETPs (exchange
            traded products) that help users get broad exposure to different
            sectors or themes across crypto. As the first flagship product, LGT
            has created the DeFi Pulse LGT that provides broad DeFi exposure for
            its users by holding one token.
            <h2>Token Characteristics</h2>
            LGT is an ERC-20 token deployed on the Ethereum blockchain. It has a
            capped maximum supply of 10,000,000 tokens. LGT is used to vote in
            changes to the LGT including but not limited to:
            <ul>
              <li>Smart contract upgrades to the LGT</li>
              <li>How to allocate the LGT treasury</li>
              <li>Add new LGT products</li>
            </ul>
            <h2>Token Release Schedule</h2>
            <StyledDpiIndexCalculationImage src={IndexReleaseScheduleImage} />
            <h4>Token Distribution Breakdown</h4>
            <ul>
              <li>
                <b>1%</b> allocated to historical DPI holders{' '}
              </li>
              <li>
                <b>7.5%</b> allocated to the Index Methodologist program over a
                period of 18 months, beginning 60 days after LGT launch
              </li>
              <li>
                <b> 9%</b> allocated to a 60 day liquidity mining program for
                the DeFi Pulse Index Set
              </li>
              <li>
                <b>52.5%</b> community treasury (with 5% available immediately
                and 47.5% vested over 3 years)
              </li>
              <li>
                <b>28%</b> allocated to Set Labs Inc
              </li>
              <li>
                <b>2%</b> allocated to DeFi Pulse
              </li>
            </ul>
          </Description>
        </ProductPageContent>
      </Container>
    </Page>
  )
}

const StyledDpiIndexCalculationImage = styled.img`
  margin-bottom: 20px;
  width: 100%;
`

export default DpiProductPage
